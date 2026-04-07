import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const githubRepo = process.env.GITHUB_REPOSITORY ?? ""
const [owner, repo] = githubRepo.split("/")
const isUserPage = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`

const inferredBaseUrl = process.env.QUARTZ_BASE_URL
  ? process.env.QUARTZ_BASE_URL
  : owner && repo
    ? isUserPage
      ? `${owner}.github.io`
      : `${owner}.github.io/${repo}`
    : "example.github.io/bitcoin-wiki"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "비트코인 위키",
    pageTitleSuffix: " · Bitcoin Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: inferredBaseUrl,
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Noto Serif KR",
        header: "Noto Serif KR",
        body: "Noto Sans KR",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f4ede1",
          lightgray: "#d1c0a1",
          gray: "#8f7759",
          darkgray: "#30251b",
          dark: "#120d09",
          secondary: "#f7931a",
          tertiary: "#a57934",
          highlight: "rgba(247, 147, 26, 0.11)",
          textHighlight: "#f7931a44",
        },
        darkMode: {
          light: "#0e0a07",
          lightgray: "#2b2117",
          gray: "#9f8461",
          darkgray: "#eadcc6",
          dark: "#fff8ef",
          secondary: "#ffb347",
          tertiary: "#d6a24a",
          highlight: "rgba(255, 179, 71, 0.14)",
          textHighlight: "#ffb34755",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, mermaid: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

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
    : "example.github.io/bitcoin-monolith-quartz"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "비트코인 모노리스",
    pageTitleSuffix: " · Bitcoin Monolith",
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
          light: "#f8f4ed",
          lightgray: "#ddd5c8",
          gray: "#8d8579",
          darkgray: "#433d36",
          dark: "#17130f",
          secondary: "#b86e00",
          tertiary: "#3d6a73",
          highlight: "rgba(184, 110, 0, 0.12)",
          textHighlight: "#f6a62055",
        },
        darkMode: {
          light: "#0f0d0b",
          lightgray: "#2d261f",
          gray: "#968a7d",
          darkgray: "#e6ddd0",
          dark: "#faf7f3",
          secondary: "#f0a340",
          tertiary: "#79b9c3",
          highlight: "rgba(240, 163, 64, 0.15)",
          textHighlight: "#ffb84d55",
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

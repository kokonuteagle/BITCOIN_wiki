import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import BitcoinGraph from "./quartz/components/BitcoinGraph"

const githubRepo = process.env.GITHUB_REPOSITORY
const githubUrl = githubRepo ? `https://github.com/${githubRepo}` : "https://github.com/jackyzha0/quartz"
const graphPanel = BitcoinGraph({
  localGraph: {
    depth: 1,
    scale: 1.34,
    repelForce: 2.1,
    centerForce: 0.05,
    linkDistance: 122,
    fontSize: 0.9,
    opacityScale: 1.28,
    showTags: false,
    focusOnHover: true,
  },
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: githubUrl,
      Quartz: "https://quartz.jzhao.xyz/",
      Bitcoin: "https://bitcoin.org/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    graphPanel,
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: true },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [graphPanel, Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

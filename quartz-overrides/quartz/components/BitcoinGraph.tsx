import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../components/types"
// @ts-ignore
import script from "../components/scripts/graph.inline"
import style from "../components/styles/graph.scss"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import { D3Config } from "../components/Graph"

interface GraphOptions {
  localGraph: Partial<D3Config> | undefined
}

const defaultOptions: GraphOptions = {
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.15,
    repelForce: 0.54,
    centerForce: 0.28,
    linkDistance: 34,
    fontSize: 0.62,
    opacityScale: 1,
    showTags: true,
    removeTags: [],
    focusOnHover: true,
    enableRadial: false,
  },
}

export default ((opts?: Partial<GraphOptions>) => {
  const BitcoinGraph: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const localGraph = { ...defaultOptions.localGraph, ...opts?.localGraph }
    return (
      <div class={classNames(displayClass, "graph", "bitcoin-graph")}>
        <h3>{i18n(cfg.locale).components.graph.title}</h3>
        <div class="graph-outer">
          <div class="graph-container" data-cfg={JSON.stringify(localGraph)}></div>
        </div>
      </div>
    )
  }

  BitcoinGraph.css = style
  BitcoinGraph.afterDOMLoaded = script

  return BitcoinGraph
}) satisfies QuartzComponentConstructor

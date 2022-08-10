import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faCalendarDay, faCalendarAlt, faFilter, faTags } from '@fortawesome/free-solid-svg-icons'
import "./css/reflistnav.css";
import ReflistNavFixed from "./patial/NavFixed";

function ReflistNav() {
  return (
    <nav className="reflist-nav">
      <section className="reflist-nav-inner-box">
        <ReflistNavFixed svgclass="reflist-nav-svg-inbox" title="收件箱">
          <FontAwesomeIcon icon={faInbox} />
        </ReflistNavFixed>
        <ReflistNavFixed svgclass="reflist-nav-svg-today" title="今天">
          <FontAwesomeIcon icon={faCalendarDay} />
        </ReflistNavFixed>
        <ReflistNavFixed svgclass="reflist-nav-svg-preview" title="预览">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </ReflistNavFixed>
        <ReflistNavFixed svgclass="reflist-nav-svg-filter" title="过滤器">
          <FontAwesomeIcon icon={faFilter} />
        </ReflistNavFixed>
        <ReflistNavFixed svgclass="reflist-nav-svg-tags" title="标签">
          <FontAwesomeIcon icon={faTags} />
        </ReflistNavFixed>
      </section>
      <div className="reflist-nav-toggle"></div>
    </nav>
  )
}
export default ReflistNav;

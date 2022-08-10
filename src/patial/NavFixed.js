function ReflistNavFixed(props) {
  return (
    <div className="reflist-nav-inner-item">
      <span className={props.svgclass}>{props.children}</span>
      <span>{props.title}</span>
    </div>
  )
}
export default ReflistNavFixed;

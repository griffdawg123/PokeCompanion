export function Content(props) {
  return (
    <div
      className={
        props.activeTab === props.id ? "content active-content" : "content"
      }
    >
      {props.children}
    </div>
  );
}

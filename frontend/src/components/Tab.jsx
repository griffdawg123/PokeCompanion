export function Tab({ children, activeTab, setActiveTab, id }) {
  return (
    <div
      className={activeTab === id ? "tab active-tab" : "tab"}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </div>
  );
}

import React from "react";

export function TabList(props) {
  const renderTabs = () => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        activeTab: props.activeTab,
        setActiveTab: props.setActiveTab,
      });
    });
  };

  return <div className="tab-list">{renderTabs()}</div>;
}

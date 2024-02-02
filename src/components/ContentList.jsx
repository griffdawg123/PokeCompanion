import React from "react";

export function ContentList(props) {
  const renderContent = () => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        activeTab: props.activeTab,
      });
    });
  };

  return <div className="content-list">{renderContent()}</div>;
}

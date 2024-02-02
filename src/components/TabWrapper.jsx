import { useState } from "react";
import React from "react";

export function TabWrapper({ children }) {
  const [activeTab, setActiveTab] = useState(1);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        activeTab: activeTab,
        setActiveTab: setActiveTab,
      });
    });
  };

  return <div className="grid">{renderChildren()}</div>;
}

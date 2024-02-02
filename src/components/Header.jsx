import logo from "../static/header.png";
import { useState, useEffect } from "react";
const MAX_WIDTH = 500;

export function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const staticSize = width >= MAX_WIDTH;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <img
      src={logo}
      alt="header image"
      width={staticSize ? MAX_WIDTH : width - 80}
    ></img>
  );
}

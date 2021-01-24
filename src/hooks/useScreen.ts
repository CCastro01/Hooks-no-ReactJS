import { useEffect, useState } from "react";

export default function useScreen() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function onResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { width: windowWidth };
}

import {
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

interface DrawerPortalProps {
  children: React.ReactNode;
}

function DrawerPortal({
  children,
}: DrawerPortalProps) {
  const [isMounted, setMounted] = useState(false);
  const drawerContainerRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const drawerContainer =
      document.createElement("div");
    drawerContainerRef.current = drawerContainer;
    document.body.appendChild(drawerContainer);
    setMounted(true);

    return () => {
      document.body.removeChild(drawerContainer);
    };
  }, []);

  return isMounted
    ? ReactDOM.createPortal(
        children,
        drawerContainerRef.current!
      )
    : null;
}

export default DrawerPortal;

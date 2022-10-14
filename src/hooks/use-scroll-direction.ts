import { useThrottleCallback } from "@react-hook/throttle";
import { useCallback, useEffect, useRef, useState } from "react";

type ScrollDirection = "down" | "up";

export const useScrollDirection = (fps?: number): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const lastScrollYRef = useRef(typeof window === "object" ? window.scrollY : 0);

  const updateScrollDirection = useCallback(() => {
    const scrollY = window.scrollY;
    const lastScrollY = lastScrollYRef.current;
    const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
    if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
      setScrollDirection(direction);
    }
    lastScrollYRef.current = scrollY > 0 ? scrollY : 0;
  }, [scrollDirection]);

  const throttledUpdate = useThrottleCallback(updateScrollDirection, fps);

  useEffect(() => {
    window.addEventListener("scroll", throttledUpdate);
    return () => window.removeEventListener("scroll", throttledUpdate);
  }, [scrollDirection, throttledUpdate]);

  return scrollDirection;
};

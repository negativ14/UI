import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );
    const onScreenSizeChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mediaQueryList.addEventListener("change", onScreenSizeChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () =>
      mediaQueryList.removeEventListener("change", onScreenSizeChange);
  }, []);

  return !!isMobile;
}

// const onScreenSizeChange = () => {
//   setIsMobile(mediaQueryList.matches);
// };

// setIsMobile(mediaQueryList.matches);

// {
//   matches: true,  // or false → whether the query matches right now
//   media: "(max-width: 767px)", // the actual query string
//   onchange: null, // you can assign a callback directly
//   addListener: f, // legacy event listener
//   removeListener: f, // legacy removal
//   addEventListener: f, // modern event listener
//   removeEventListener: f
// }

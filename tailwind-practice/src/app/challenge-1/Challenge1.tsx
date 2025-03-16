import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import MainVisual from "./MainVisual";
import About from "./About";
import Bicycle from "./Bicycle";

export default function Challenge1() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  return (
    <div>
      <Header />
      <MainVisual isDesktopOrLaptop={isDesktopOrLaptop} />
      <About isDesktopOrLaptop={isDesktopOrLaptop} />
      <Bicycle isDesktopOrLaptop={isDesktopOrLaptop} />
    </div>
  );
}

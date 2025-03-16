import AnchorLink from "react-anchor-link-smooth-scroll";
import MainVisualSvg from "../../svg/mainVisual.svg?react";
import MainVisualSvg2 from "../../svg/mainVisual2.svg?react";
import { useMediaQuery } from "react-responsive";

import AboutSvg from "../../svg/about.svg?react";
import Bicycle1Svg from "../../svg/bicycle1.svg?react";
import Bicycle2Svg from "../../svg/bicycle2.svg?react";
import Bicycle3Svg from "../../svg/bicycle3.svg?react";

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

function Header() {
  return (
    <div className="py-4 px-[10px] flex justify-between align-center">
      <div>Home</div>
      <div className="flex gap-4 justify-end">
        <AnchorLink href="#link1" offset="50">
          <p className="font-sans text-black">About</p>
        </AnchorLink>
        <AnchorLink href="#link2" offset="50">
          <p className="font-sans text-black">Bicycle</p>
        </AnchorLink>
      </div>
    </div>
  );
}

function MainVisual({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  return (
    <section className="pt-2">
      {isDesktopOrLaptop ? (
        <MainVisualSvg className="w-full" />
      ) : (
        <MainVisualSvg2 className="w-full" />
      )}
    </section>
  );
}

function About({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  if (isDesktopOrLaptop) {
    return (
      <section id="link1" className="pt-30 px-[4%]">
        <p className="text-5xl underline">About</p>
        <div className="flex pt-10 gap-6">
          <AboutSvg />
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-left">AAAA BBBB</p>
            <p className="text-left">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="link1" className="pt-30 px-[4%]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-5xl underline">About</p>
        <AboutSvg />
        <div className="text-2xl text-left">AAAA BBBB</div>
        <p className="text-left">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </section>
  );
}

function Bicycle({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  if (isDesktopOrLaptop) {
    return (
      <div id="link2" className="pt-30 px-[4%]">
        <p className="text-5xl underline">Bicycle</p>
        <div className="flex pt-10 gap-6">
          <div className="flex flex-col gap-4">
            <Bicycle1Svg />
            <p className="text-2xl">タイトル1</p>
            <p className="">
              テキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Bicycle2Svg />
            <p className="text-2xl">タイトル2</p>
            <p className="">
              テキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Bicycle3Svg />
            <p className="text-2xl">タイトル3</p>
            <p className="">
              テキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div id="link2" className="pt-30 px-[4%]">
      <div className="flex flex-col pt-10 gap-6 items-center">
        <p className="text-5xl underline">Bicycle</p>
        <div className="flex flex-col gap-4 items-center">
          <Bicycle1Svg />
          <p className="text-2xl">タイトル1</p>
          <p className="">
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Bicycle2Svg />
          <p className="text-2xl">タイトル2</p>
          <p className="">
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Bicycle3Svg />
          <p className="text-2xl">タイトル3</p>
          <p className="">
            テキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  );
}

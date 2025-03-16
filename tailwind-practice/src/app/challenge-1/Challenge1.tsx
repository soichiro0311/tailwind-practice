import AnchorLink from "react-anchor-link-smooth-scroll";
import MainVisualSvg from "../../svg/mainVisual.svg?react";
import AboutSvg from "../../svg/about.svg?react";
import Bicycle1Svg from "../../svg/bicycle1.svg?react";
import Bicycle2Svg from "../../svg/bicycle2.svg?react";
import Bicycle3Svg from "../../svg/bicycle3.svg?react";

export default function Challenge1() {
  return (
    <div>
      <Header />
      <MainVisual />
      <About />
      <Bicycle />
    </div>
  );
}

function Header() {
  return (
    <div className="py-4 px-60">
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

function MainVisual() {
  // TODO: 親要素の外まで広げたい？
  return (
    <div className="pt-2 max-h-[600px]">
      <MainVisualSvg className="max-h-[600px]" />
    </div>
  );
}

function About() {
  return (
    <div id="link1" className="pt-30 px-60">
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
    </div>
  );
}

function Bicycle() {
  return (
    <div id="link2" className="pt-30 px-60">
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

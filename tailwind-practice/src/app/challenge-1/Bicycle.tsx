import Bicycle1Svg from "../../svg/bicycle1.svg?react";
import Bicycle2Svg from "../../svg/bicycle2.svg?react";
import Bicycle3Svg from "../../svg/bicycle3.svg?react";

export default function Bicycle({
  isDesktopOrLaptop,
}: {
  isDesktopOrLaptop: boolean;
}) {
  if (isDesktopOrLaptop) {
    return (
      <div id="link2" className="pt-30 px-[4%]">
        <p className="text-5xl underline">Bicycle</p>
        <div className="flex pt-10 gap-6">
          <Bicycle1 isDesktopOrLaptop={isDesktopOrLaptop} />
          <Bicycle2 isDesktopOrLaptop={isDesktopOrLaptop} />
          <Bicycle3 isDesktopOrLaptop={isDesktopOrLaptop} />
        </div>
      </div>
    );
  }
  return (
    <div id="link2" className="pt-30 px-[4%]">
      <div className="flex flex-col pt-10 gap-6 items-center">
        <p className="text-5xl underline">Bicycle</p>
        <Bicycle1 isDesktopOrLaptop={isDesktopOrLaptop} />
        <Bicycle2 isDesktopOrLaptop={isDesktopOrLaptop} />
        <Bicycle3 isDesktopOrLaptop={isDesktopOrLaptop} />
      </div>
    </div>
  );
}

function Bicycle1({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  const style = isDesktopOrLaptop
    ? "flex flex-col gap-4"
    : "flex flex-col gap-4 items-center";
  return (
    <div className={style}>
      <Bicycle1Svg />
      <p className="text-2xl">タイトル1</p>
      <p className="">
        テキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function Bicycle2({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  const style = isDesktopOrLaptop
    ? "flex flex-col gap-4"
    : "flex flex-col gap-4 items-center";
  return (
    <div className={style}>
      <Bicycle2Svg />
      <p className="text-2xl">タイトル2</p>
      <p className="">
        テキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

function Bicycle3({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  const style = isDesktopOrLaptop
    ? "flex flex-col gap-4"
    : "flex flex-col gap-4 items-center";
  return (
    <div className={style}>
      <Bicycle3Svg />
      <p className="text-2xl">タイトル3</p>
      <p className="">
        テキストテキストテキストテキストテキストテキストテキスト
      </p>
    </div>
  );
}

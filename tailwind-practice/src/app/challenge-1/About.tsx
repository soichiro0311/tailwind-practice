import AboutSvg from "../../svg/about.svg?react";

export default function About({
  isDesktopOrLaptop,
}: {
  isDesktopOrLaptop: boolean;
}) {
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

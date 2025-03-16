import MainVisualSvg from "../../svg/mainVisual.svg?react";
import MainVisualSvg2 from "../../svg/mainVisual2.svg?react";

export default function MainVisual({
  isDesktopOrLaptop,
}: {
  isDesktopOrLaptop: boolean;
}) {
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

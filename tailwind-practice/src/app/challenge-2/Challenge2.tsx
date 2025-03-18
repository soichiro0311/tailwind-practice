import Menu from "../../svg/toggle_btn.svg?react";
import Gallery1 from "../../svg/item1.svg?react";
import Gallery2 from "../../svg/item2.svg?react";
import Gallery3 from "../../svg/item3.svg?react";
import Gallery4 from "../../svg/item4.svg?react";
import Gallery5 from "../../svg/item5.svg?react";
import Gallery6 from "../../svg/item6.svg?react";
import Gallery7 from "../../svg/item7.svg?react";
import Gallery8 from "../../svg/item8.svg?react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { default as cn } from "clsx";

export default function Challenge2() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const [menuOpenState, setMenuOpenState] = useState<boolean>(false);
  const changeMenuOpenStatus = () => setMenuOpenState(!menuOpenState);

  return (
    <>
      {menuOpenState && <MenuOpenBackGround />}
      <div className={cn(isDesktopOrLaptop ? "px-[2%]" : "px-[8%]")}>
        <Header
          isDesktopOrLaptop={isDesktopOrLaptop}
          changeMenuOpenStatus={changeMenuOpenStatus}
        />
        <Gallery isDesktopOrLaptop={isDesktopOrLaptop} />
      </div>
    </>
  );
}

function MenuOpenBackGround() {
  return <div className="bg-black fixed opacity-80 w-full h-full z-10"></div>;
}

function Header({
  isDesktopOrLaptop,
  changeMenuOpenStatus,
}: {
  isDesktopOrLaptop: boolean;
  changeMenuOpenStatus: Function;
}) {
  const style = isDesktopOrLaptop
    ? "flex justify-between w-full py-[2%]"
    : "flex justify-between w-full py-[4%]";

  return (
    <header className={style}>
      <p className="text-2xl font-bold">Furniture Design</p>
      <button
        onClick={() => changeMenuOpenStatus()}
        className="opacity-100 z-20 bg-black"
      >
        <Menu />
      </button>
    </header>
  );
}

function Gallery({ isDesktopOrLaptop }: { isDesktopOrLaptop: boolean }) {
  const style = isDesktopOrLaptop
    ? "grid gap-[35px] grid-cols-4"
    : "grid gap-[35px] grid-cols-2";
  return (
    <div className={style}>
      <GalleryCard>
        <Gallery1 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery2 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery3 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery4 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery5 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery6 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery7 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery8 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery1 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery2 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery3 className="w-auto h-auto" />
      </GalleryCard>
      <GalleryCard>
        <Gallery4 className="w-auto h-auto" />
      </GalleryCard>
    </div>
  );
}

function GalleryCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <p className="text-left text-sm">プロダクトタイトル</p>
      <p className="text-left text-xs">¥ 9,999,999</p>
    </div>
  );
}

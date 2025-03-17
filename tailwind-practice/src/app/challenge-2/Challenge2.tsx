import Menu from "../../svg/toggle_btn.svg?react";
import Gallery1 from "../../svg/item1.svg?react";
import Gallery2 from "../../svg/item2.svg?react";
import Gallery3 from "../../svg/item3.svg?react";
import Gallery4 from "../../svg/item4.svg?react";
import Gallery5 from "../../svg/item5.svg?react";
import Gallery6 from "../../svg/item6.svg?react";
import Gallery7 from "../../svg/item7.svg?react";
import Gallery8 from "../../svg/item8.svg?react";

export default function Challenge2() {
  return (
    <div className="px-[10%]">
      <Header />
      <Gallery />
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between w-full py-[2%]">
      <p className="text-md font-bold">Furniture Design</p>
      <Menu />
    </div>
  );
}

function Gallery() {
  return (
    <div className="flex gap-[16px] flex-wrap">
      <GalleryCard>
        <Gallery1 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery2 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery3 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery4 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery5 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery6 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery7 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery8 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery1 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery2 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery3 className="w-[210px] h-[210px]" />
      </GalleryCard>
      <GalleryCard>
        <Gallery4 className="w-[210px] h-[210px]" />
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

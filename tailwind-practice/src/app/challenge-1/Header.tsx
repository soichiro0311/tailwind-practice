import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  return (
    <header className="py-4 px-[10px] flex justify-between align-center">
      <div>Home</div>
      <div className="flex gap-4 justify-end">
        <AnchorLink href="#link1" offset="50">
          <p className="font-sans text-black">About</p>
        </AnchorLink>
        <AnchorLink href="#link2" offset="50">
          <p className="font-sans text-black">Bicycle</p>
        </AnchorLink>
      </div>
    </header>
  );
}

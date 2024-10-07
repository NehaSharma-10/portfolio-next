import Link from "next/link";

const Header = () => {
  return (
    <>
      <main >
        <nav className="navbar navbar-expand-lg navbar-light h-24 flex justify-center gap-10 items-center mx-auto bg-[#020617] ">
          <Link
            href="#about"
            className="text-white uppercase"
          >About</Link>
          <Link
            href="#exp"
            className="text-white uppercase"
          >Experience</Link>
          <Link
            href="#pro"
            className="text-white uppercase"
          >Projects</Link>
        </nav>
      </main>

    </>
  );
};

export default Header;

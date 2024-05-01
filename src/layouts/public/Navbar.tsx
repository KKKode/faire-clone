import {
  Language,
  SearchBar,
  SigninButton,
  SignupButton,
} from "@/components/core";
import AdSection from "./AdSection";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <>
      <AdSection />
      <nav className="w-full sticky z-[999] top-0 bg-white">
        <section className="nav-container flex items-center justify-between text-sm py-4">
          <img src="/faire-logo.svg" alt="logo" className="w-28" />
          <SearchBar />
          <Language title="EN-US" axis="top-full" />
          <p>|</p>
          <button>Blog</button>
          <button>Sell on Faire</button>
          <SigninButton className="xyz" />
          <SignupButton title="Sign Up to Shop" className="btn-primary" />
        </section>
        <NavMenu />
      </nav>
    </>
  );
};

export default Navbar;

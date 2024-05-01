import { Language } from "@/components/core";
import { FOOTER_ARR } from "@/constants";
import { PiGlobeThin } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className="border-y border-gray-200 top-spacing bottom-spacing">
        <section className="main-container flex flex-col md:flex-row items-center justify-between gap-4">
          <aside className="w-full md:w-2/5 grid grid-cols-3 gap-2">
            {FOOTER_ARR?.map((item) => (
              <div className="space-y-2" key={item?._id}>
                <h4 className="text-sm">{item?.title}</h4>
                {item?.list?.map((innerItem, i) => (
                  <p className="description" key={i}>
                    {innerItem?.name}
                  </p>
                ))}
              </div>
            ))}
          </aside>
          <aside className="hidden md:blockw-full md:w-[35%]"></aside>
          <aside className="w-full md:w-1/4 space-y-4">
            <h2 className="title">Get the Faire app</h2>
            <p className="description">
              Shop on the go, message brands, and track orders with the Faire
              app.
            </p>
            <div className="flex items-center gap-4">
              <img src="/home/app-store.svg" alt="app-store" className="w-40" />
              <img
                src="/home/play-store.png"
                alt="play-store"
                className="w-40"
              />
            </div>
          </aside>
        </section>
      </footer>
      <section className="main-container flex flex-col md:flex-row items-center justify-between gap-2 py-4">
        <div className="space-y-2">
          <p className="description">
            ©{new Date().getFullYear()} Faire Wholesale, Inc.
          </p>
          <p className="description">
            Terms of Service • Privacy Policy • Cookie Policy • IP Policy •
            Sitemap
          </p>
        </div>
        <Language title="English (US)" axis="bottom-full" />
      </section>
    </>
  );
};

export default Footer;

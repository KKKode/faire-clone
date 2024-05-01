import { SignupButton } from "../core";

const Advertisement = () => {
  return (
    <section className=" w-full bg-[#585440] top-spacing bottom-spacing">
      <div className="main-container flex flex-col items-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          Ready to start buying <br className="hidden md:block" /> wholesale
          online?
        </h2>
        <ul className="pt-8 pb-6 space-y-2">
          <li className="description text-white">✔ 60-day payment terms</li>
          <li className="description text-white">
            ✔ Free returns on all opening orders
          </li>
          <li className="description text-white">
            ✔ Unique products curated for your store
          </li>
        </ul>
        <SignupButton title="Sign Up for Shop" className="btn-secondary" />
      </div>
    </section>
  );
};

export default Advertisement;

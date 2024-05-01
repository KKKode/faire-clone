import { useState } from "react";
import CustomModal from "./CustomModal";
import SigninButton from "./SigninButton";

const SignupButton = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <button className={className} onClick={() => setOpen(true)}>
        {title}
      </button>

      <CustomModal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-end p-2">
          <button onClick={() => setOpen(false)}>❌</button>
        </div>
        <div className="p-4 md:p-6 lg:pt-4 lg:pb-12 lg:px-12 rounded-md w-[40vw]">
          <div className="flex flex-col items-center text-center gap-3">
            <img src="/faire-logo.svg" alt="logo" className="w-28" />
            <h2 className="title">Shop wholesale, online</h2>
            <p className="description">
              Purchase from over 1,00,000 unique brands. Sign up for free!
            </p>
          </div>
          <form className="pt-8 pb-4">
            <label
              htmlFor="email"
              className="text-sm text-gray-600 tracking-wider"
            >
              Business email address
            </label>
            <div className="border rounded-sm border-gray-600 px-3 py-2 mt-1 mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@yourstore.com"
                className="w-full outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Sign up for free
            </button>
          </form>
          <div className="text-center">
            <SigninButton className="underline" />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="bg-gray-200 w-full h-[1px]"></span>
            <span>or</span>
            <span className="bg-gray-200 w-full h-[1px]"></span>
          </div>
        </div>
      </CustomModal>
    </section>
  );
};

export default SignupButton;

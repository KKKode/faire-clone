import { useState } from "react";
import CustomModal from "./CustomModal";

const SIGN_CONTENT = [
  {
    title: "Whenever, wherever",
    description:
      "On Faire.com and the Faire mobile app, stock up whenever you need.",
  },
  {
    title: "Unique finds",
    description:
      "Discover thousands of new brands to introduce to your customers.",
  },
  {
    title: "Buy with confidence",
    description: "Get free returns on your opening order with any brand.",
  },
];

const SigninButton = ({ className }: { className: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <button className={`${className}`} onClick={() => setOpen(true)}>
        Sign in
      </button>

      <CustomModal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col lg:flex-row justify-between rounded-md w-[60vw]">
          <aside className="w-full bg-[url('/home/signin-bg.webp')] bg-center bg-cover bg-no-repeat flex flex-col justify-end gap-4 p-4 lg:p-8 lg:pt-80">
            {/* <div className=""></div> */}
            {SIGN_CONTENT?.map((item, index) => (
              <div key={index} className="flex items-start gap-4 justify-start">
                <div>0{index + 1}</div>
                <div className="space-y-2">
                  <p className="text-sm tracking-wide text-primary">
                    {item?.title}
                  </p>
                  <p className="description">{item?.description}</p>
                </div>
              </div>
            ))}
          </aside>
          <aside className="w-full">
            <div className="flex justify-end p-2">
              <button onClick={() => setOpen(false)}>❌</button>
            </div>
            <div className="p-4 lg:p-12">
              <div className="flex flex-col items-center text-center gap-3">
                <h2 className="title">Welcome back!</h2>
                <p className="description">Thousands of products await.</p>
              </div>
              <form className="pt-8 pb-4">
                <div className="border rounded-sm border-gray-600 px-3 py-2 mt-1 mb-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full outline-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Continue
                </button>
              </form>
              <div className="flex items-center gap-2">New to Faire?</div>

              <div className="flex items-center gap-4 mt-2">
                <span className="bg-gray-200 w-full h-[1px]"></span>
                <span>or</span>
                <span className="bg-gray-200 w-full h-[1px]"></span>
              </div>
            </div>
          </aside>
        </div>
      </CustomModal>
    </section>
  );
};

export default SigninButton;

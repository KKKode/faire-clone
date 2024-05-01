import { SignupButton } from "@/components/core";

const AdSection = () => {
  return (
    <section className="nav-container bg-[#FAF9F6] text-gray-500 text-sm text-center py-4 flex items-center justify-center gap-2">
      <p>Shop wholesale online from over 1,00,000 brands. </p>
      <SignupButton title="Sign Up" className="underline" />
    </section>
  );
};

export default AdSection;

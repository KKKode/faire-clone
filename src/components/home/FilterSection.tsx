import { TbArrowsUpDown } from "react-icons/tb";
import { AiOutlineSwap } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
const FilterSection = () => {
  return (
    <section className="lg:sticky lg:z-[998] lg:top-[123px] bg-white flex items-center gap-2 py-4">
      <button className="bg-gray-100 rounded-full p-3">
        <TbArrowsUpDown className="text-gray-600" />
      </button>
      <button className="bg-gray-100 rounded-full p-3">
        <AiOutlineSwap className="text-gray-700" />
      </button>
      <button className="flex items-center gap-2 text-sm bg-gray-100 rounded-3xl px-4 py-2 text-gray-600">
        Values{" "}
        <span>
          <MdOutlineArrowBackIosNew className="-rotate-90" />
        </span>
      </button>
      <button className="flex items-center gap-2 text-sm bg-gray-100 rounded-3xl px-4 py-2 text-gray-600">
        Lead time{" "}
        <span>
          <MdOutlineArrowBackIosNew className="-rotate-90" />
        </span>
      </button>
    </section>
  );
};

export default FilterSection;

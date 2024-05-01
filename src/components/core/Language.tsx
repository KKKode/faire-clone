import { LANGUAGE_ARR } from "@/constants";
import { PiGlobeThin } from "react-icons/pi";

const Language = ({
  title = "EN-US",
  axis,
}: {
  title?: string;
  axis: string;
}) => {
  return (
    <section className="relative group">
      <button className="flex items-center gap-1">
        <PiGlobeThin fontSize={20} /> {title}
      </button>
      <div
        className={`group-hover:flex absolute w-32 z-[999] left-0 bg-white hidden flex-col items-start px-5 py-4 border rounded-sm ${axis}`}
      >
        {/* <div className="py-2"></div> */}
        {LANGUAGE_ARR?.map((item, i) => (
          <button key={i} className="py-2 description">
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Language;

import { FAQ_ARR } from "@/constants";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Faq = () => {
  return (
    <section className="main-container top-spacing bottom-spacing">
      <h2 className="title text-center">Keep exploring</h2>
      <aside className="top-spacing w-full flex flex-col">
        {FAQ_ARR?.map((item: IFaqType, i) => (
          <FaqCard key={item?._id} item={item} i={i} />
        ))}
      </aside>
    </section>
  );
};

export default Faq;

const FaqCard = ({ item, i }: { item: IFaqType; i: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-gray-200 py-4 ${i === 0 ? "border-y" : "border-b"}`}
    >
      <p
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="capitalize text-primary">{item.que}</span>
        <span className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]">
          <MdExpandMore
            fontSize={24}
            className={`text-gray-500 common-transition ${
              open ? "-rotate-180" : ""
            }`}
          />
        </span>
      </p>
      <p
        className={`animate-collapse grid common-transition ease-in-out ${
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] "
        }`}
      >
        <span className="description w-full md:w-11/12 lg:w-4/5 overflow-hidden">
          {item.ans}
        </span>
      </p>
    </div>
  );
};

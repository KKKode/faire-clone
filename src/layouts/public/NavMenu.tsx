import { NAV_MENU_ARR } from "@/constants";
import { useState } from "react";

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative w-full border-b border-gray-200">
      <div className="main-container w-3/4 flex items-center justify-between gap-4">
        {NAV_MENU_ARR.map((item) => (
          <aside
            key={item._id}
            className="group font-sm text-sm hover:underline cursor-pointer py-4"
          >
            {item.title}
            <div className="group-hover:block hidden absolute top-full left-0 w-full z-[999] bg-white border-b border-gray-300 py-6">
              <div className="main-container w-3/4 flex justify-between">
                <div className="w-1/4 pr-4 border-r border-gray-300">
                  {item?.arr?.map((ele, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 rounded-sm ${
                        activeIndex === index ? "bg-gray-100" : "bg-white"
                      }`}
                      onMouseOver={() => setActiveIndex(index)}
                    >
                      {ele?.header}
                    </div>
                  ))}
                </div>

                <div className="w-1/2 grid grid-cols-2 gap-4 pl-4 h-full">
                  {item?.arr?.[activeIndex]?.subArr?.map((ele, i) => (
                    <div key={i}>
                      <p className="text-primary">{ele?.subHeader}</p>
                      {ele?.list ? (
                        <div className="space-y-2 pt-2">
                          {ele?.list?.map((item, innerI) => (
                            <p key={innerI} className="description">
                              {item}
                            </p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="w-1/4 space-y-4 pl-4">
                  <img src={item?.feature?.img} alt="img" className="" />
                  <p className="text-primary">{item?.feature?.title}</p>
                  <p className="description">{item?.feature?.description}</p>
                </div>
              </div>
            </div>
          </aside>
        ))}
      </div>
    </section>
  );
};

export default NavMenu;

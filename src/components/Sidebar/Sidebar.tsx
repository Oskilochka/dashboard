import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { routes } from "../../route";
import { links } from "./links";

type MenuItemType = {
  to: string,
  label: string,
  icon: React.ReactElement
}

const MenuItem: FC<MenuItemType> = ({ to, label, icon }) => {
  return (
    <Link
      to={to}
      className="items-center
                 gap-3 ml-3 mt-4 flex
                 text-xl
                 tracking-tight dark:text-white text-slate-900"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {
        activeMenu && (
          <>
            <div className="flex direction-colomn justify-between items-center">
              <Link
                to={routes.base}
                className="items-center
                 gap-3 ml-3 mt-4 flex
                 text-xl font-extrabold
                 tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware />
                <span>Shop chop</span>
              </Link>
              <TooltipComponent content="Menu" position={"BottomCenter"}>
                <button>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>

              <div>
                {links.map(item => {
                  return <div>
                    <p className="uppercase">
                      {item.title}

                    </p>

                    <div>
                      {item.links.map(link => <MenuItem label={link.name} to={link.route} icon={link.icon} />)}
                    </div>
                  </div>;
                })}

              </div>

            </div>
          </>
        )
      }
    </div>
  );
};

export default Sidebar;

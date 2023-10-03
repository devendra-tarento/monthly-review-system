import styles from "./SideNavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { currentMenu as currentMenuAtom } from "states";
import { useEffect } from "react";

interface SideNavBarProps {
  navItems: any[];
  onClickHandler?: (event: any) => void;
  showIcons?: boolean;
}

export const SideNavBar = ({
  navItems,
  onClickHandler,
  showIcons,
}: SideNavBarProps) => {
  let location = useLocation();
  let navigate = useNavigate();

  // State Management
  // const [selectedMenu, setSelectedMenu] = useRecoilState(currentMenuAtom);

  useEffect(() => {
    let element = document.querySelector(".active > label");

    if (element?.textContent) {
      // setSelectedMenu(element?.textContent);
    }
  }, []);

  const onSideNavigation = (e: any, item: any) => {
    e.preventDefault();
    // setSelectedMenu(item);
  };

  return (
    <div className={`${styles.side_nav_bg} ${styles.side_nav_space} h-100`}>
      <ul className={`${styles.side_nav_list} pt-3 pb-4 list-unstyled`}>
        {navItems &&
          navItems.map((i: any, j: number) => {
            return (
              <div className="mb-3 mt-1" key={j}>
                <h4 className="px-2 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-4">
                  {/* {i.title} */}
                </h4>
                {i.children.map((m: any, n: number) => {
                  return (
                    <li
                      className={`${
                        m.link.includes(location.pathname)
                          ? `${styles.side_nav_list_active} active`
                          : ""
                      } pt-2 pb-2 text-start px-2 px-sm-3 px-md-3 px-lg-3 px-xl-3 px-xxl-4`}
                      key={n}
                      onClick={(e) => {
                        navigate(m.link.length ? m.link[0] : "");
                        onSideNavigation(e, m.name);
                      }}
                    >
                      {showIcons && (
                        <span
                          className={`${styles.side_nav_icons} material-icons pe-1`}
                        >
                          {m.icon}
                        </span>
                      )}
                      <label>{m.name}</label>
                    </li>
                  );
                })}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

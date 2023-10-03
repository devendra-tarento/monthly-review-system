import { Link } from "react-router-dom";
import styles from "./MainNavBar.module.css";
import "../../assets/fonts/fonts.css"
import { Search } from "../index";
import { Avatar } from "../index";

interface MainNavBarProps {
  logo?: string;
  logoLink?: any;
  navItems?: any[];
  showSearch: boolean;
  showNotifications: boolean;
  logoutLink?: string;
  isCollection: boolean;
  navString?: string;
}

export const MainNavBar = ({
  logo,
  logoLink,
  navItems,
  showSearch,
  showNotifications,
  logoutLink,
  isCollection,
  navString,
}: MainNavBarProps) => {
  const logout = () => {};

  return (
    <>
      <nav className={`${styles.navi_black_bg} navbar navbar-expand-lg`}>
        <div className="container-fluid">
          <div className="row col-12">
            <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2 p-0">
              <a
                className="navbar-brand col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2 px-3"
                href={logoLink}
              >
                {logo && (
                  <img src={logo} alt="data platform" width="189" height="36" />
                )}
              </a>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10 col-xxl-10 p-0">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="row col-12 m-0">
                  <div className="col-sm-12 col-md-12 col-lg-4 h-100">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      {!isCollection && navString && (
                        <li className="nav-item px-2">
                          <div className={`${styles.list_color} nav-link`}>
                            {navString}
                          </div>
                        </li>
                      )}
                      {isCollection &&
                        navItems &&
                        navItems.map((i: any, j: number) => {
                          return (
                            <li className="nav-item pe-5" key={j}>
                              <Link
                                className={`${styles.list_color} nav-link`}
                                aria-current="page"
                                to={i.link}
                              >
                                {i.name}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-8 h-100 m-0 p-0">
                    <div className="row col-12">
                      <div className="col-sm-12 col-md-12 col-lg-5">
                        {/* {showSearch && (
                          <Search />
                      )} */}
                      </div>

                      <div className="col-sm-12 col-md-12 col-lg-7 p-0">
                        <div
                          className="float-end mt-2 mt-sm-2 mt-md-2 mt-lg-0"
                          onClick={logout}
                        >
                          <Avatar initials="TU" variant="small" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="navbar-brand col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2"
            href={logoLink}
          >
            {logo && (
              <img src={logo} alt="data platform" width="189" height="36" />
            )}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={`${styles.toggle_color} navbar-toggler-icon`}
            ></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-sm-12 col-md-12 col-lg-3">
              {!isCollection && navString && (
                <li className="nav-item pe-5">
                  <div className={`${styles.list_color} nav-link`}>
                    {navString}
                  </div>
                </li>
              )}
              {isCollection &&
                navItems &&
                navItems.map((i: any, j: number) => {
                  return (
                    <li className="nav-item pe-5" key={j}>
                      <Link
                        className={`${styles.list_color} nav-link`}
                        aria-current="page"
                        to={i.link}
                      >
                        {i.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <div className="row col-sm-12 col-md-12 col-lg-9">
              {showSearch && (
                <div className="col-sm-12 col-md-12 col-lg-5">
                  <Search />
                </div>
              )}
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="float-end mt-2 mt-sm-2 mt-md-2 mt-lg-0">
                  <Link to={logoutLink ? logoutLink : ""}>
                    <Avatar initials="TU" variant="small"/>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

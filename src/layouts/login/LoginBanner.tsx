import styles from "./LoginLayout.module.css";

import logo from "../../assets/images/data_platform_login_logo_v2.svg";

interface LoginBannerProps {}

export const LoginBanner = ({}: LoginBannerProps) => {
  return (
    <div
      className={`${styles.right_side_view} col-sm-12 col-md-6 col-lg-6 vh-100`}
    >
      <div className="d-flex justify-content-center h-100 align-items-center">
        <img src={logo} alt="data platform login" />
      </div>
    </div>
  );
};

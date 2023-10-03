import { LoginBanner, LoginFields } from "../../layouts";

export const LoginPage = () => {
  return (
    <div className="col-12 vh-100">
      <div className="vh-100">
        <div className="row m-0 p-0">
          <LoginBanner />
          <LoginFields />
        </div>
      </div>
    </div>
  );
};

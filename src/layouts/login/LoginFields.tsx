// import { useNavigate } from "react-router-dom";
// import { BodyOne, ButtonLarge, Headline, InputField, SubHeadingOne } from "../../components";
// import { MainSubHeadingOne } from "../../components/headings/SubHeadingOne.stories";
// import styles from "./LoginLayout.module.css";
// import axios from "axios";
// import { useState } from "react";
// import { RouteConstants } from "../../constants";
// import { useRecoilState } from "recoil";
// import { API_ENDPOINT } from "../../constants/ApiConstants";
// import { employeeID } from "../../components/states/empIdState";
// import { currentEmployeeDetails, EmployeeDetails } from "../../components/states/empDetailsState";
// import { authToken } from "../../components/states/tokenState";
// import { MainSubHeadingTwo } from "../../components/headings/SubHeadingTwo.stories";

// interface LoginFieldsProps { }

// export const LoginFields = ({ }: LoginFieldsProps) => {

//   const [emailID, setEmailID] = useState("");
//   const [token, setToken] = useRecoilState(authToken)
//   const [password, setPassword] = useState("");
//   const [empDetails, setEmpDetails] = useRecoilState(currentEmployeeDetails)
//   const [employeeId, setEmployeeId] = useRecoilState(employeeID)

//   const navigate = useNavigate()

//   const goToDashboard = () => {
//     if (empDetails.menteeIds.length != 0) {
//       navigate(`${RouteConstants.managerdashboard}`);
//     } else {
//       navigate(`${RouteConstants.maindashboard}`);
//     }
//   };


//   const loginButtonClick = async (e: any): Promise<void> => {

//     const userCredentials = {
//       username: emailID,
//       password: password
//     };

//     const headers = {
//       "Access-Control-Allow-Origin": "*"
//     };

//     await axios.post(API_ENDPOINT.LOGIN_DEV, userCredentials, { headers })
//       .then((res) => {
//         setEmployeeId(res.data.responseData.id)
//         setToken(res.data.responseData.sessionId)

//         setTimeout(() => {
//           getEmployeeDetails()
//         }, 1000);
//       })
//       .catch((err) => {
//         console.log(err)
//       });

//   };


//   const getEmployeeDetails = async (): Promise<void> => {

//     const credentials = {
//       userId: employeeId
//     }

//     const headers = {
//       "Authorization": token,
//       "Access-Control-Allow-Origin": "*"
//     };

//     await axios.post(API_ENDPOINT.GET_USER_DETAILS_DEV, credentials, { headers })
//       .then((res) => {

//         const details: EmployeeDetails = {
//           userId: res.data.responseData.userId,
//           name: res.data.responseData.firstName + ' ' + res.data.responseData.lastName,
//           empRole: res.data.responseData.designation.designation,
//           profilePic: res.data.responseData.imagePath,
//           managerId: res.data.responseData.managerIds[0],
//           menteeIds: res.data.responseData.manageeIds
//         }
//         setEmpDetails(details)
//         goToDashboard()

//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   };


//   return (
//     <div className={`${styles.left_side_view} col-sm-12 col-md-6 col-lg-6 vh-100`}>
//       <div className="d-flex h-100 align-items-center justify-content-center">
//         <div className={`${styles.mainDiv} flex-column responsive-width-1 `}>
//           <Headline title="Login" />
//           <div className="mt-3 mb-3 ">
//             <MainSubHeadingTwo title={"Email ID"} />
//             <div className="mt-1 mb-3 ">
//               <InputField
//                 inputType="email"
//                 placeholder="Enter your Email-ID here"
//                 showDescription
//                 showTitle
//                 changeHandler={(event) => { setEmailID(event.target.value) }}
//                 showOptTxt={false}
//               />
//             </div>

// <MainSubHeadingTwo title={"Password"} />
// <div className="mt-1 mb-3">
//   <InputField
//     inputType="password"
//     placeholder="Enter your password here"
//     showDescription
//     showTitle
//     changeHandler={(event) => { setPassword(event.target.value) }}
//     showOptTxt={false}
//   />
// </div>

//           </div>
//           <ButtonLarge
//             btnTxt={"Login"}
//             clickHandler={loginButtonClick}
//             showIcon={false}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { API_ENDPOINT } from "../../constants/ApiConstants";
import { RouteConstants } from "../../constants";
import { authToken } from "../../components/states/tokenState";
import { currentEmployeeDetails, EmployeeDetails } from "../../components/states/empDetailsState";
import { employeeID } from "../../components/states/empIdState";
import { ButtonLarge, Headline, InputField } from "../../components";
import { MainSubHeadingTwo } from "../../components/headings/SubHeadingTwo.stories";
import styles from "./LoginLayout.module.css";

interface LoginFieldsProps { }

export const LoginFields = ({ }: LoginFieldsProps) => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useRecoilState(authToken);
  const [empDetails, setEmpDetails] = useRecoilState(currentEmployeeDetails);
  const [employeeId, setEmployeeId] = useRecoilState(employeeID);

  const navigate = useNavigate();

  const loginButtonClick = async (): Promise<void> => {
    try {
      const userCredentials = {
        username: emailID,
        password: password,
      };

      const headers = {
        "Access-Control-Allow-Origin": "*",
      };

      const response = await axios.post(API_ENDPOINT.LOGIN_DEV, userCredentials, { headers });
      const responseData = response.data.responseData;

      setEmployeeId(responseData.id);
      setToken(responseData.sessionId);

      setTimeout(() => {
        getEmployeeDetails();
      }, 1000);
    }
    catch (error) {
      console.error("Login failed:", error);
    }
  };

  const getEmployeeDetails = async (): Promise<void> => {
    try {
      const credentials = {
        userId: employeeId,
      };

      const headers = {
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
      };

      const response = await axios.post(API_ENDPOINT.GET_USER_DETAILS_DEV, credentials, { headers });
      const responseData = response.data.responseData;

      const details: EmployeeDetails = {
        userId: responseData.userId,
        name: `${responseData.firstName} ${responseData.lastName}`,
        empRole: responseData.designation.designation,
        profilePic: responseData.imagePath,
        managerId: responseData.managerIds[0],
        menteeIds: responseData.manageeIds,
      };

      setEmpDetails(details);

      if (details.menteeIds.length !== 0) {
        navigate(RouteConstants.managerdashboard);
      }
      else {
        navigate(RouteConstants.maindashboard);
      }
    } catch (error) {
      console.error("Fetching employee details failed:", error);
    }
  };

  return (
    <div className={`${styles.left_side_view} col-sm-12 col-md-6 col-lg-6 vh-100`}>
      <div className="d-flex h-100 align-items-center justify-content-center">
        <div className={`${styles.mainDiv} flex-column responsive-width-1`}>
          <Headline title="Login" />
          <div className="mt-3 mb-3 ">
            <MainSubHeadingTwo title={"Email ID"} />
            <div className="mt-1 mb-3 ">
              <InputField
                inputType="email"
                placeholder="Enter your Email-ID here"
                showDescription
                showTitle
                changeHandler={(event) => {
                  setEmailID(event.target.value);
                }}
                showOptTxt={false}
              />
            </div>

            <MainSubHeadingTwo title={"Password"} />
            <div className="mt-1 mb-3">
              <InputField
                inputType="password"
                placeholder="Enter your password here"
                showDescription
                showTitle
                changeHandler={(event) => {
                  setPassword(event.target.value)
                }}
                showOptTxt={false}
              />
            </div>
          </div>
          <ButtonLarge btnTxt={"Login"} clickHandler={loginButtonClick} showIcon={false} />
        </div>
      </div>
    </div>
  );
};

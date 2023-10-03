import { MainNavBar, SideNavBar } from "../../components"
import Logo from "../../assets/images/data_platform_logo.svg"
import { ProfileCard } from "../../components/cards/ProfileCard"
import styles from "../manager_dashboard/ManagerDashboardLayout.module.css"
import { useRecoilState, useRecoilValue } from 'recoil';
import { EmployeeDetails, currentEmployeeDetails } from "../../components/states/empDetailsState";
import axios from "axios";
import { API_ENDPOINT } from "../../constants/ApiConstants";
import { authToken } from "../../components/states/tokenState";
import { useEffect, useState } from "react";
import dp from "../../assets/images/profile_pic.png"
import { employeeID } from "../../components/states/empIdState";
import { RouteConstants } from "../../constants";
import { useNavigate } from "react-router-dom";

// interface ManagerDashboardProps { }

// export const ManagerDashboard = ({ }: ManagerDashboardProps) => {
//     useEffect(() => {
//         getEmployeeDetails();
//     }, []);

//     const [id, setId] = useRecoilState(employeeID)

//     const onProfileClick = (profileId: number) => {
//         setId(profileId)
//     };

//     const onMyProfileClick = () => {
//         console.log("hi")
//         setId(currentEmpDetails.userId)
//     };

//     const [token, setToken] = useRecoilState(authToken)

//     const currentEmpDetails = useRecoilValue(currentEmployeeDetails);

//     const [nameList, setNameList] = useState<string[]>([]);
//     const [roleList, setRoleList] = useState<string[]>([]);
//     const [dpList, setDpList] = useState<string[]>([]);
//     const [profileIdList, setProfileIdList] = useState<number[]>([]);

//     const getEmployeeDetails = async (): Promise<void> => {

//         const userId = currentEmpDetails.menteeIds

//         const headers = {
//             "Authorization": token,
//             "Access-Control-Allow-Origin": "*"
//         };
//         console.log(currentEmpDetails)

//         const apiRequests = userId.map((menteeIds) => {
//             return axios.post(API_ENDPOINT.GET_USER_DETAILS_DEV, menteeIds, { headers });
//         });
//         Promise.all(apiRequests)
//             .then((responses) => {
//                 const updatedNameList: string[] = [];
//                 const updatedRoleList: string[] = [];
//                 const updatedDpList: string[] = [];
//                 const updatedProfileIdList: number[] = [];

//                 responses.forEach((res, index) => {
//                     const user = res.data.responseData;
//                     const fullName = `${user.firstName} ${user.lastName}`;
//                     const role = user.designation.designation;
//                     const imagePath = user.imagePath;
//                     const profile_id = user.userId

//                     updatedNameList.push(fullName);
//                     updatedRoleList.push(role);
//                     updatedDpList.push(imagePath);
//                     updatedProfileIdList.push(profile_id);

//                     console.log(`User ${userId[index]} - Name: ${fullName}, Role: ${role}, ImagePath: ${imagePath}, ProfileId: ${profile_id}`);
//                 });

//                 setNameList(updatedNameList);
//                 setRoleList(updatedRoleList);
//                 setDpList(updatedDpList);
//                 setProfileIdList(updatedProfileIdList)

//                 console.log("nameList:   ", updatedNameList);
//                 console.log("roleLisy:   ", updatedRoleList);
//                 console.log("dpList:   ", updatedDpList);

//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <MainNavBar
//                     logo={Logo}
//                     showSearch={false}
//                     showNotifications={false}
//                     isCollection={false}
//                 />
//             </div>
//             <div className="row vh-100">
//                 <div className="col-2 p-0">
//                     <SideNavBar
//                         showIcons
//                         navItems={[
//                             {
//                                 children: [
//                                     {
//                                         icon: 'account_circle',
//                                         id: 0,
//                                         link: [RouteConstants.managerdashboard],
//                                         name: 'MY MENTEES'
//                                     },
//                                     {
//                                         icon: 'group',  
//                                         id: 1,
//                                         link: [RouteConstants.maindashboard],
//                                         name: ' MY PROFILE'
//                                     },
//                                 ],
//                                 id: 0,
//                             }
//                         ]}
//                     />
//                 </div>
//                 <div className="col-10">
//                     <div className={`${styles.profileCards}`}>
//                         {/* {nameList.map((name, index) => ( */}
//                              {/* <ProfileCard */}
//                             {/* //     key={index}
//                             //     name={name}
//                             //     role={roleList[index]}
//                             //     profile_pic={dpList[index]}
//                             //     status={false}
//                             //     clickHandler={() => onProfileClick(profileIdList[index])}
//                             // /> */}
//                             <ProfileCard
//                                 // key={index}
//                                 name="Abhijith P J"
//                                 role="Associate Software Engineer"
//                                 profile_pic={dp}
//                                 status={false}
//                                 // clickHandler={() => onProfileClick(profileIdList[index])}
//                             />
//                         {/* ))} */}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

interface ProfileData {
    profileId: number;
    name: string;
    role: string;
    profile_pic: string;
}

interface ManagerDashboardProps { }

export const ManagerDashboard = ({ }: ManagerDashboardProps) => {
    const [id, setId] = useRecoilState(employeeID);
    const [token, setToken] = useRecoilState(authToken);
    const currentEmpDetails = useRecoilValue(currentEmployeeDetails);
    const [error, setError] = useState<string | null>(null);
    const [profileData, setProfileData] = useState<ProfileData[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployeeDetails();
    }, []);

    const onProfileClick = (profileId: number) => {
        setId(profileId);
        console.log(profileId)
        // navigate(RouteConstants.maindashboard);
    };

    const getEmployeeDetails = async (): Promise<void> => {
        const userIds = currentEmpDetails.menteeIds;

        const headers = {
            Authorization: token,
            "Access-Control-Allow-Origin": "*",
        };

        const apiRequests = userIds.map((userId) => {
            return axios.post(API_ENDPOINT.GET_USER_DETAILS_DEV, { userId }, { headers });
        });

        try {
            const responses = await Promise.all(apiRequests);

            const updatedProfileData = responses.map((res) => {
                const user = res.data.responseData;
                const fullName = `${user.firstName} ${user.lastName}`;
                const role = user.designation.designation;
                const imagePath = user.imagePath;
                const profileId = user.userId;

                return {
                    profileId,
                    name: fullName,
                    role,
                    profile_pic: imagePath,
                };
            });

            setProfileData(updatedProfileData);
            setError(null);
        }
        catch (error) {
            console.error("Fetching employee details failed:", error);
            setError("An error occurred while fetching employee details.");
        }
    };

    return (
        <div className="container-fluid">
            <div className="col-10">
                <div className={`${styles.profileCards}`}>
                    {error ? (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    ) : (
                        profileData.map((profile) => (
                            <ProfileCard
                                key={profile.profileId}
                                name={profile.name}
                                role={profile.role}
                                profile_pic={profile.profile_pic}
                                status={false}
                                clickHandler={() => onProfileClick(profile.profileId)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

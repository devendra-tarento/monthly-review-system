import React from "react";
import styles from "./ProfileCard.module.css"; // Import your CSS module or add custom styles here
// import dp from "../../assets/images/profile_pic.png"
import { MainHeading } from "../headings/HeadingOne.stories";
import { MainSubHeadingOne } from "../headings/SubHeadingOne.stories";
import { MainSubHeadingTwo } from "../headings/SubHeadingTwo.stories";

interface ProfileCardProps {
    name: string;
    role: string;
    profile_pic: string;
    status: boolean;
    clickHandler?: (event: any) => void;

}

export const ProfileCard = ({
    name,
    role,
    profile_pic,
    status,
    clickHandler
}: ProfileCardProps) => {
    return (
        <div className={`card ${styles.profile_card} me-4`} onClick={clickHandler}>
            <div className="col-12 d-flex flex-column align-items-center pb-0">
                <div className={`${styles.dp} mt-4`} >
                    <img
                        src={profile_pic}
                        alt={`${name}'s Profile`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                    />
                </div>
            </div>
            <p className="col-12 mt-1 text-center p-1">
                <MainSubHeadingTwo title={name} /> 
                {role}
            </p>
            {status && (
                <div className="d-flex justify-content-center">
                    <MainSubHeadingOne title={"Status:"} /> <p className="ms-2">Reviewed</p>
                </div>
            )
            }
            {!status && (
                <div className="d-flex justify-content-center">
                    <MainSubHeadingOne title={"Status:"} /> <p className="ms-2">Not Reviewed</p>
                </div>
            )
            }

        </div>

    );
};

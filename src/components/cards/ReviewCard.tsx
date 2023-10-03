import React, { useState } from "react";
import styles from "./ResultCard.module.css";
import InputFieldStories from "../inputs/InputField.stories";
import { InputField } from "../inputs/InputField";

interface ResultCardProps {
    question: string;
    mark?: number;
    description: string;
}

export const ReviewCard = ({
    question,
    mark,
    description,
}: ResultCardProps) => {
    // Create state variables to manage the edited mark and description
    const [editedMark, setEditedMark] = useState(mark);
    const [editedDescription, setEditedDescription] = useState(description);

    // Function to handle changes in the mark input
    const handleMarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedMark(Number(event.target.value));
    };

    // Function to handle changes in the description input
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedDescription(event.target.value);
    };

    return (
        <div className={`${styles.resultCards} col-11 card`}>
            <div className="col-6 ms-3 pt-3" style={{ borderRight: '4px solid #cca' }}>
                <p className={`${styles.questionText}`}>
                    {question}
                </p>
            </div>
            <div className="col-4 ms-3 pt-1">
                <InputField
                    inputType={""}
                    showOptTxt={false}
                    value={editedDescription}
                    placeholder="Enter the description"
                    changeHandler={handleDescriptionChange}
                />
                {/* <textarea
                    className={`${styles.questionText} ps-2`}
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                /> */}
            </div>
            <div className="col-1 pt-1 ms-5 text-center ">
                <InputField
                    inputType={""}
                    showOptTxt={false}
                    value={editedMark}
                    placeholder="Marks"
                   
                    changeHandler={handleMarkChange}
                />
                {/* <input
                    type="number"
                    className={`${styles.questionText}`}
                    value={editedMark}
                    onChange={handleMarkChange}
                /> */}
            </div>
        </div>
    );
};

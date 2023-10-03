import React from "react";
import styles from "./ResultCard.module.css"; 


interface ResultCardProps {
    question: string;
    mark: number;
    description: string;
}

export const ResultCard = ({
    question,
    mark,
    description,
}: ResultCardProps) => {


    return (
        <div className={`${styles.resultCards} col-11 card `}>
            <div className="col-6 ms-3 pt-3" style={{ borderRight: '4px solid #cca' }}>
                <p className={`${styles.questionText}`}>
                    {question}
                </p>
            </div>
            <div className="col-4 ms-3 pt-3">
                <p className={`${styles.questionText} ps-2`} >
                    {description}
                </p>
            </div>
            <div className="col-1 pt-3 ms-5 text-center ">
                <p className={`${styles.questionText} `}>
                    {mark}
                </p>
            </div>
        </div>

    );
};

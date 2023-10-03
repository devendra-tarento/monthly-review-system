import React from 'react';
import styles from "../../components/tabs/MonthTab.module.css"

interface MonthTabProps {
    mark: number,
    months: string[];
    activeMonth: string;
    onMonthClick: (month: string) => void;
}

const MonthTab = ({ months, mark, activeMonth, onMonthClick }: MonthTabProps) => {
    return (
        <div className="row justify-content-center ms-1">
            {months.map((month) => (
                <div
                    key={month}
                    className={` ${activeMonth === month ? 'activeMonth' : ''} ${styles.monthCards}  `}
                    onClick={() => onMonthClick(month)}
                >
                    <p className='m-0 p-0'>{month}</p>
                    {typeof mark === 'number' && mark != 0 && !isNaN(mark) && (
                        <div className="d-flex justify-content-center">
                            <p className={`${styles.avgScoreText}`}> Score:</p>
                            <p className={`${styles.monthMark} `}> {mark}</p>
                        </div>
                    )}
                    {typeof mark != 'number' || isNaN(mark) || mark ===0 && (
                        <div className="d-flex">
                            <p className={`${styles.avgScoreText}`}> Score:</p>
                            <p className={`${styles.monthMark} `}>--</p>
                        </div>
                    )}
                </div>
            ))} 
        </div>
    );
};

export default MonthTab;

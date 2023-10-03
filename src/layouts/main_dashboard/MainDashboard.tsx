import { MainNavBar, MainTab, SideNavBar, SubHeadingOne, SubHeadingTwo } from "../../components"
import Logo from "../../assets/images/data_platform_logo.svg"
import styles from "../main_dashboard/MainDashboardLayout.module.css"
import { ResultCard } from "../../components/cards/ResultCard"
import { SetStateAction, useEffect, useState } from "react"
import axios from "axios"
import { API_ENDPOINT } from "../../constants/ApiConstants"
import { useNavigate } from "react-router-dom"
import { RouteConstants } from "../../constants"
import { employeeID } from "../../components/states/empIdState";
import MonthTab from "../../components/tabs/MonthTab"
import { useRecoilState } from "recoil"
import { ReviewCard } from "../../components/cards/ReviewCard"


interface MainDashboardProps { }



export const MainDashboard = ({ }: MainDashboardProps) => {
    const navigate = useNavigate()
    const [results, setResults] = useState<{ question: string, mark: number, description: string }[]>([]);
    const [averageMark, setAverageMark] = useState(0);

    const [activeMonth, setActiveMonth] = useState("");


    useEffect(() => {
        const getResultsOfMonth = async () => {
            const resultDetails = {
                emp_id: 1,
                month: activeMonth,
            };


            try {
                const res = await axios.post(API_ENDPOINT.RESULT_BY_MONTH_EMP, resultDetails);
                setResults(res.data);
                const totalMarks = res.data.reduce((sum: any, result: any) => sum + result.mark, 0);
                const avgMark = res.data.length === 0 ? 0 : totalMarks / res.data.length;
                setAverageMark(avgMark);

            } catch (err) {
                console.log(err);
            }
        };

        if (activeMonth) {
            getResultsOfMonth();
        }
    }, [activeMonth]);


    const handleMonthClick = (month: any) => {
        setActiveMonth(month);
    };

    return (

        <div className="container-fluid">
            <div className="row">
                <MainNavBar
                    logo={Logo}
                    showSearch={false}
                    showNotifications={false}
                    isCollection={false}
                />
            </div>
            <div className="row justify-content-between">
                <MonthTab
                    months={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                    activeMonth={"January"}
                    onMonthClick={handleMonthClick}
                    mark={averageMark}
                />
            </div>

            <div className="row justify-content-center pt-1">
                <ResultCard
                    // key={}
                    question={"hi"}
                    mark={5}
                    description={"hello"}
                />
                <ResultCard
                    // key={}
                    question={"hi"}
                    mark={5}
                    description={"hello"}
                />
                <ResultCard
                    // key={}
                    question={"hi"}
                    mark={5}
                    description={"hello"}
                />
                <ResultCard
                    // key={}
                    question={"hi"}
                    mark={5}
                    description={"hello"}
                />
                {/* {results.length === 0 ? (
                    <div className="text-center mt-5 ">
                        <SubHeadingOne title={"Select a month to view the results"} />
                    </div>
                ) : (
                    results.map((result, index) => (
                        // <ReviewCard
                        //     key={""}
                        //     question={result.question}
                        //     // mark={""}
                        //     description={""}
                        // />
                        <ResultCard
                            key={index}
                            question={result.question}
                            mark={result.mark}
                            description={result.description}
                        />
                    )))
                } */}
                {/* <div className={`${styles.buttons} mt-3 `}>
                    <button className="btn btn-outline-info btn-sm ">Save</button>
                    <button className="btn btn-outline-primary btn-sm ms-2">Submit</button>

                </div> */}
            </div>
        </div>

    )
}


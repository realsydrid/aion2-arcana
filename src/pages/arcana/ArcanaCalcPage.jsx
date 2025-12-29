import skillsData from "../../data/skills.json";
import './ArcanaCalcPage.css'
import {useState} from "react";

function ArcanaCalcPage() {
    const [selectedJobId, setSelectedJobId] = useState(skillsData.jobs[0].jobId);
    const API="https://aion2.plaync.com/api/character/info?lang=ko&characterId=T9C1YGS3K3WEj78JUbcVzgCqtuwcm8rHDZLb6Z4wZwA%3D&serverId=1007"
    fetch(API).then(r=>r.json()).then(console.log).catch(console.error);


    return (
        <>
            <div>
                아르카나 조합 계산기
            </div>

            {/*직업 선택 UI*/}
            <div className="arcanaCalc-job-list">
                <p>직업</p>
                <ul className="arcanaCalc-job-list-ul">
                    {skillsData.jobs.map((job) => (
                        <li key={job.jobId}>
                            <button
                                type="button"
                                className={job.jobId === selectedJobId ? "arcanaCalc-job-list-btn active" : "arcanaCalc-job-list-btn"}
                                onClick={() => setSelectedJobId(job.jobId)}
                            >
                                {job.jobName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>

            </div>
        </>
);
}

export default ArcanaCalcPage
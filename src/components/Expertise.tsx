import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Docker",
    "K8S",
    "Jenkins",
    "Terraform",
    "Git",
    "ArgoCD",
    "Ansible",
    "OpenShift"
];

const labelsSecond = [
    "Python",
    "Bash",
    "JavaScript",
    "Typescript",
    "Java"
];

const labelsThird = [
    "OpenAI",
    "Llama",
    "Hugging Face",
    "LangChain",
    "Streamlit",
    "Copilot"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Building and automating robust CI/CD pipelines to ensure seamless testing, deployment, and operational efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Coding</h3>
                    <p>Proficient in coding automation and web development, streamlining workflows, building scalable web solutions, and optimizing processes for efficiency and performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Proficient in leveraging Generative AI and Large Language Models (LLMs) to develop innovative solutions, optimize workflows, and drive intelligent automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
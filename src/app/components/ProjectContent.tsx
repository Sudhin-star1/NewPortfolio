import { defaultConfig } from "next/dist/server/config-shared";
import React from "react";
import Image, { StaticImageData } from "next/image";
import {anomaly,email,heart,movie,potato,timeseries} from "../images/im/index"

const projectsData = [
    {
        title: 'HeartDiseaseAnalysis',
        description: 'Data Analytics project for Heart Disease',
        githubLink: 'https://github.com/Sudhin-star1/HeartDiseaseAnalysis/tree/main',
        image: heart
      },
      {
        title: 'Anomaly Detection',
        description: 'A project on anomaly detection.',
        githubLink: 'https://github.com/Sudhin-star1/AnomalyDetection/tree/main',
        image: anomaly

      },
      {
        title: 'Movie Genre Classification',
        description: 'Used TF-IDF Vectorizer, MultinomialNB, LSTM',
        githubLink: 'https://github.com/Sudhin-star1/MovieGenreClassification/tree/main',
        image: movie

      },
      {
        title: 'Potato Leaf Disease Detection',
        description: 'Built CNN from scratch and predicted disease on potato leaf ',
        githubLink: 'https://github.com/Sudhin-star1/PotatoLeafDiseaseDetection/tree/main',
        image: potato

      },
      {
        title: 'Spam Classifier',
        description: ' This project classifies whether an email is spam or ham.',
        githubLink: "https://github.com/Sudhin-star1/SpamClassification/tree/main",
        image: email

      },
      {
        title: 'TimeSeries Analysis',
        description: "Used ARIMA Model for TimeSeries Analysis",
        githubLink: 'https://github.com/Sudhin-star1/TimeSeriesAnalysis/tree/main',
        image: timeseries

      },
    // Add more projects as needed
  ];

const ProjectContent:React.FC = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}

const ProjectCard:React.FC<{key:number;title:string; description:string; githubLink:string, image:StaticImageData}> = ({title, description, githubLink, image}) => {
    return(
        <div className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <div className="h-40 bg-gray-300">
                <Image src={image} alt="photo" className="object-cover w-full h-full"></Image>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="mt-4">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectContent;
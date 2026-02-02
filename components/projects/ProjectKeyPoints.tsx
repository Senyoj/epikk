import React from "react";

interface KeyPoint {
  major: string;
  detail: string;
}

interface Props {
  keyPoints: KeyPoint[];
}

const ProjectKeyPoints = ({ keyPoints }: Props) => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {keyPoints.map((point, index) => (
        <div key={index} className="flex justify-between items-start">
          <div className="flex-1 text-lg font-semibold text-gray-800">{point.major}</div>
          <div className="flex-1 text-right text-gray-600 text-lg">
            {index + 1 < 10 ? `0${index + 1}` : index + 1} – {point.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectKeyPoints;

import React from "react";

interface Props {
  paragraphs: string[];
}

const ProjectDescription = ({ paragraphs }: Props) => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-6">
      {paragraphs.map((para, index) => (
        <p key={index} className="mb-6 text-gray-700 text-lg">
          {para}
        </p>
      ))}
    </div>
  );
};

export default ProjectDescription;

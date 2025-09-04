import React from 'react';
interface ExperienceItemProps {
  title: string;
  position?: string;
  period?: string;
  descriptions: React.ReactNode[];
}
export function ExperienceItem({
  title,
  position,
  period,
  descriptions
}: ExperienceItemProps) {
  return <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
          {position && <span className="text-gray-600 font-normal"> — {position}</span>}
        </h3>
        {period && <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">
            {period}
          </span>}
      </div>
      <ul className="space-y-2 text-gray-700">
        {descriptions.map((desc, index) => <li key={index} className="pl-4 relative whitespace-pre-line">
            <span className="absolute left-0">•</span>
            {desc}
          </li>)}
      </ul>
    </div>;
}

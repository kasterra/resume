import React from 'react';

type DescriptionOptions = {
  content: React.ReactNode;
  bullet?: boolean;
  indent?: "none" | "sm" | "md";
};

type ExperienceDescription =
  | React.ReactNode
  | DescriptionOptions;

function isDescriptionOptions(desc: ExperienceDescription): desc is DescriptionOptions {
  return typeof desc === 'object' && desc !== null && !React.isValidElement(desc) && 'content' in desc;
}

interface ExperienceItemProps {
  title: string;
  position?: string;
  period?: string;
  descriptions: ExperienceDescription[];
}
export function ExperienceItem({
  title,
  position,
  period,
  descriptions
}: ExperienceItemProps) {
  const indentClassMap: Record<NonNullable<DescriptionOptions["indent"]>, string> = {
    none: "",
    sm: "pl-4",
    md: "pl-8"
  };

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
        {descriptions.map((desc, index) => {
        const normalized = isDescriptionOptions(desc) ? {
          content: desc.content,
          bullet: desc.bullet ?? true,
          indent: desc.indent ?? 'none'
        } : {
          content: desc,
          bullet: true,
          indent: 'none' as const
        };
        return <li key={index} className={`${normalized.bullet ? 'pl-4 relative' : indentClassMap[normalized.indent]} whitespace-pre-line`}>
              {normalized.bullet && <span className="absolute left-0">•</span>}
              {normalized.content}
            </li>;
      })}
      </ul>
    </div>;
}

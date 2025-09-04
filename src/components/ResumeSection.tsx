import React from 'react';
interface ResumeSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}
export function ResumeSection({
  title,
  icon,
  children
}: ResumeSectionProps) {
  return <section className="mb-8">
      <div className="flex items-center mb-4">
        {icon && <span className="text-gray-600 mr-2">{icon}</span>}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="pl-1">{children}</div>
    </section>;
}
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/types";
import { ExternalLink } from 'lucide-react'

const ProjectCard: React.FC<Project> = ({ 
  studentName, 
  projectName,
  gradeLevel, 
  year,
  cohort,
  track,
  projectLink, 
  coverImage 
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-md">
      <CardContent className="p-0">
        <div 
            className="h-48 w-full overflow-hidden" 
            style={{ 
                backgroundImage: `url(${coverImage && coverImage[0] ? coverImage[0].url : '/placeholder-image.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        />
        <div className="p-3 space-y-1">
          <h3 className="text-lg font-semibold">{studentName}&apos;s {projectName}</h3>
          <div className="text-xs text-gray-500">
            <p>{gradeLevel} Grade | {track} {cohort} {year}</p>
            <a 
              href={projectLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline flex flex-row gap-1 items-center"
            >
              View Project <ExternalLink className='w-3 h-3'/>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
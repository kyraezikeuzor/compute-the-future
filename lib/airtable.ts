// lib/airtable.ts
import { Project } from '@/types';

interface ProjectRecord {
  id: string,
  fields: {
    project_link: string,
    project_name: string,
    student_name: string,
    cover_image: Array<{
      url: string;
      filename: string;
    }>,
    grade_level: string,
    year: string,
    cohort: string,
    track: string
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      'https://api.airtable.com/v0/app2gyfz7JI7Qteps/tblrdt4ydz7YxcmPf', 
      {
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        next: { revalidate: 3600 } // Optional: cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    
    return data.records.map((record: ProjectRecord) => ({
      id: record.id,
      projectLink: record.fields.project_link,
      projectName: record.fields.project_name,
      studentName: record.fields.student_name,
      coverImage: record.fields.cover_image,
      gradeLevel: record.fields.grade_level,
      year: record.fields.year,
      cohort: record.fields.cohort,
      track: record.fields.track
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
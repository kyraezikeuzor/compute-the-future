import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

export type Project = {
    studentName: string, 
    projectName: string,
    gradeLevel: string, 
    cohort: string, 
    year: string,
    track: string,
    projectLink: string, 
    coverImage?: Array<{
        url: string;
        filename: string;
    }>;
}

import React from 'react';
import { Heading } from '@/components/ui/heading'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Define interfaces
interface Course {
    name: string;
    members: number;
    iconName: string;
    level: Level;
    prerequisites: string[];
}
  
type Level = 'Basic' | 'Intermediate' | 'Advanced';

// Icon map type definition


// Course data with proper typing
const courseData: Course[] = [
  {
    name: "Pre-Algebra",
    members: 62895,
    iconName: "Calculator",
    level: "Basic",
    prerequisites: []
  },
  {
    name: "Algebra 1",
    members: 77998,
    iconName: "Square",
    level: "Intermediate",
    prerequisites: ["Pre-Algebra"]
  },
  {
    name: "Algebra 2 Learning Labs",
    members: 2196,
    iconName: "Grid",
    level: "Advanced",
    prerequisites: ["Algebra 1"]
  },
  {
    name: "Pre-Calculus Learning Labs",
    members: 1256,
    iconName: "Grid",
    level: "Advanced",
    prerequisites: ["Algebra 2"]
  },
  {
    name: "Geometry Fundamentals",
    members: 45678,
    iconName: "Compass",
    level: "Intermediate",
    prerequisites: ["Algebra 1"]
  },
  {
    name: "Trigonometry Basics",
    members: 15432,
    iconName: "Triangle",
    level: "Intermediate",
    prerequisites: ["Geometry Fundamentals"]
  },
  {
    name: "Statistics Introduction",
    members: 28456,
    iconName: "BarChart",
    level: "Intermediate",
    prerequisites: ["Algebra 1"]
  },
  {
    name: "Linear Algebra Essentials",
    members: 3567,
    iconName: "Grid",
    level: "Advanced",
    prerequisites: ["Algebra 2"]
  },
  {
    name: "Mathematical Logic",
    members: 5234,
    iconName: "Binary",
    level: "Intermediate",
    prerequisites: ["Pre-Algebra"]
  },
  {
    name: "Number Theory Basics",
    members: 4321,
    iconName: "Hash",
    level: "Advanced",
    prerequisites: ["Algebra 1"]
  }
];

// Badge component with proper typing
interface LevelBadgeProps {
  level: Level;
}
  
const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  const colorMap: Record<Level, string> = {
    Basic: "bg-green-100 text-green-800",
    Intermediate: "bg-gray-100 text-blue-400",
    Advanced: "bg-purple-100 text-purple-800"
  };

  return (
    <span className={`px-3 py-1 w-fit rounded-full text-xs font-medium ${colorMap[level]}`}>
      {level}
    </span>
  );
};

const BadgeHeader: React.FC<LevelBadgeProps> = ({ level }) => {
  const colorMap: Record<Level, string> = {
    Basic: "bg-green-100",
    Intermediate: "bg-gray-100",
    Advanced: "bg-purple-100"
  };

  return (
    <div className={`rounded-t-full w-full h-[7px] absolute top-0 right-0 ${colorMap[level]}`}/>
  );
};


const CourseGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Coding Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {courseData.map((course:any) => {
          
          return (
            <Card key={course.name} className="relative hover:shadow-md border-2 rounded-xl transition-shadow cursor-pointer">
              <CardHeader className="">
                <BadgeHeader level={course.level}/>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <div className='flex flex-row items-center justify-center gap-1 text-xs'>
                      <div className="p-2 bg-blue-100 rounded-full">
                      </div>
                      by <span>Scott Adler</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div>
                  {course.prerequisites.length > 0 && (
                    <div className="text-xs">
                      <span className="font-medium">Prerequisites: </span>
                      {course.prerequisites.join(", ")}
                    </div>
                  )}
                </div>
                <LevelBadge level={course.level} />
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};



export default function CoursesPage() {
    return (
        <section>
            <Heading as='h6'>Explore Guides</Heading>
            <section>
                <CourseGrid/>
            </section>
        </section>
    )
}
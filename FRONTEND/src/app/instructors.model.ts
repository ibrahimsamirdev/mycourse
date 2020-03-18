export interface InstructorCourses{
    fullName: string;
    courses: Course[];
  }
  
  export interface Course{
    title: string;
    category: string;
    level: string;
    prerequisites: string;
    image: string;
    topic: string;
    description: string;
    published: boolean;
    lectures: [];
  }
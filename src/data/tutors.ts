export interface Tutor {
  id: string;
  name: string;
  subjects: string[];
  grades: string[];
  teachingStyle: string;
  availability: string[];
  bio: string;
  qualification: string;
  yearsExp: number;
  phone: string;
}

export const tutors: Tutor[] = [
  {
    id: "mr-hlabela",
    name: "Mr. Hlabela",
    subjects: ["Mathematics", "Physical Sciences", "Technical Maths"],
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    teachingStyle: "Patient & Thorough",
    availability: ["Mon–Fri 14:00–19:00", "Sat 09:00–15:00"],
    bio: "Experienced maths tutor dedicated to helping students of all grades build confidence and excel. From foundational numeracy to matric exam preparation, every session is tailored to the learner's needs.",
    qualification: "B.Ed (Mathematics)",
    yearsExp: 8,
    phone: "+27773645667",
  },
];

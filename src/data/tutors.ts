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
  image?: string;
}

export const tutors: Tutor[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    subjects: ["Mathematics", "Physical Sciences"],
    grades: ["Grade 10", "Grade 11", "Grade 12"],
    teachingStyle: "Patient & Methodical",
    availability: ["Mon–Fri 14:00–18:00", "Sat 09:00–13:00"],
    bio: "Former head of mathematics with 12 years of classroom experience. Specialises in exam preparation and breaking down complex problems into simple steps.",
    qualification: "B.Ed (Mathematics), PGCE",
    yearsExp: 12,
  },
  {
    id: "james-kruger",
    name: "James Kruger",
    subjects: ["Mathematics", "Accounting", "Economics"],
    grades: ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    teachingStyle: "Engaging & Practical",
    availability: ["Mon–Thu 15:00–19:00", "Sun 10:00–14:00"],
    bio: "Passionate about making maths relevant to real life. Uses practical examples and interactive methods to keep students engaged and motivated.",
    qualification: "B.Com, TEFL Certified",
    yearsExp: 8,
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    subjects: ["Mathematics", "Life Sciences"],
    grades: ["Grade 4", "Grade 5", "Grade 6", "Grade 7"],
    teachingStyle: "Encouraging & Gentle",
    availability: ["Mon–Fri 13:00–17:00", "Sat 10:00–14:00"],
    bio: "Specialises in primary and junior-phase mathematics. Creates a safe, encouraging environment where young learners build confidence and a love for numbers.",
    qualification: "B.Ed (Foundation Phase)",
    yearsExp: 6,
  },
  {
    id: "thabo-ntuli",
    name: "Thabo Ntuli",
    subjects: ["Mathematics", "Physical Sciences", "Technical Maths"],
    grades: ["Grade 10", "Grade 11", "Grade 12"],
    teachingStyle: "Structured & Results-Driven",
    availability: ["Mon–Fri 16:00–20:00", "Sat 08:00–12:00"],
    bio: "Engineering graduate who transitioned to teaching. Focuses on conceptual understanding and exam technique. Has a 95% pass rate for matric maths.",
    qualification: "B.Sc Engineering, PGCE",
    yearsExp: 10,
  },
  {
    id: "emma-williams",
    name: "Emma Williams",
    subjects: ["Mathematics", "English", "Afrikaans"],
    grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"],
    teachingStyle: "Creative & Fun",
    availability: ["Mon–Fri 14:00–17:00", "Sat 09:00–15:00"],
    bio: "Primary school specialist who uses games, songs, and hands-on activities to make learning fun. Particularly skilled at supporting students with learning difficulties.",
    qualification: "B.Ed (Intermediate Phase)",
    yearsExp: 7,
  },
];

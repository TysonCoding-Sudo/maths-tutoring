export interface Level {
  grade: string;
  curriculum: string[];
  subjects: string[];
  description: string;
  age?: string;
}

export const levels: Level[] = [
  {
    grade: "Grade 1",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Number sense", "Addition & Subtraction", "Shapes & Space", "Measurement"],
    description: "Building foundational numeracy skills through fun, hands-on activities.",
    age: "6–7 years",
  },
  {
    grade: "Grade 2",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Place value", "Multiplication basics", "Fractions intro", "Data handling"],
    description: "Strengthening number concepts and introducing new mathematical ideas.",
    age: "7–8 years",
  },
  {
    grade: "Grade 3",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Multiplication & Division", "Fractions", "Time & Money", "Geometry"],
    description: "Mastering core operations and applying maths to real-world problems.",
    age: "8–9 years",
  },
  {
    grade: "Grade 4",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Whole numbers", "Number sentences", "Patterns", "Area & Perimeter"],
    description: "Transitioning to abstract thinking with more complex problem-solving.",
    age: "9–10 years",
  },
  {
    grade: "Grade 5",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Common fractions", "Decimal fractions", "Data & graphs", "3D objects"],
    description: "Building confidence with fractions, decimals, and data interpretation.",
    age: "10–11 years",
  },
  {
    grade: "Grade 6",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Ratios & Rates", "Percentages", "Algebraic expressions", "Transformations"],
    description: "Preparing for high school with advanced numeracy and pre-algebra.",
    age: "11–12 years",
  },
  {
    grade: "Grade 7",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Integers", "Algebraic equations", "Probability", "Surface area & Volume"],
    description: "Solidifying foundation for senior phase mathematics.",
    age: "12–13 years",
  },
  {
    grade: "Grade 8",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Algebra", "Exponents", "Functions & Relationships", "Geometry of lines"],
    description: "Navigating the jump to high school maths with confidence.",
    age: "13–14 years",
  },
  {
    grade: "Grade 9",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Algebraic fractions", "Linear equations", "Pythagoras", "Statistics"],
    description: "Building strong algebraic skills for senior phase electives.",
    age: "14–15 years",
  },
  {
    grade: "Grade 10",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Number patterns", "Functions", "Trigonometry intro", "Analytical geometry"],
    description: "Laying the groundwork for Matric-level mathematics.",
    age: "15–16 years",
  },
  {
    grade: "Grade 11",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Trig functions", "Sequences & Series", "Probability", "Differential Calculus"],
    description: "Deepening understanding of advanced mathematical concepts.",
    age: "16–17 years",
  },
  {
    grade: "Grade 12 / Matric",
    curriculum: ["CAPS", "IEB"],
    subjects: ["Calculus", "Finance & Growth", "Probability & Statistics", "Paper 1 & 2 Revision"],
    description: "Comprehensive exam preparation with past papers and targeted revision.",
    age: "17–18 years",
  },
];

export const curriculumOptions = ["CAPS", "IEB"];
export const gradeBands = [
  { label: "Foundation (Gr 1–3)", range: ["Grade 1", "Grade 2", "Grade 3"] },
  { label: "Intermediate (Gr 4–6)", range: ["Grade 4", "Grade 5", "Grade 6"] },
  { label: "Senior (Gr 7–9)", range: ["Grade 7", "Grade 8", "Grade 9"] },
  { label: "FET (Gr 10–12)", range: ["Grade 10", "Grade 11", "Grade 12 / Matric"] },
];

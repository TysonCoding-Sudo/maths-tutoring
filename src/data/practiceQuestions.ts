export interface PracticeQuestion {
  id: number;
  topic: string;
  grade: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 1,
    topic: "Algebra",
    grade: "Grade 10",
    difficulty: "Easy",
    question: "Solve for x: 2x + 5 = 13",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    correctAnswer: "x = 4",
    explanation: "2x + 5 = 13 → 2x = 8 → x = 4",
  },
  {
    id: 2,
    topic: "Algebra",
    grade: "Grade 11",
    difficulty: "Medium",
    question: "Solve for x: x² − 5x + 6 = 0",
    options: ["x = 2 or x = 3", "x = −2 or x = −3", "x = 1 or x = 6", "x = −1 or x = −6"],
    correctAnswer: "x = 2 or x = 3",
    explanation: "x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3",
  },
  {
    id: 3,
    topic: "Trigonometry",
    grade: "Grade 12",
    difficulty: "Hard",
    question: "If sin θ = 3/5 and θ is acute, what is cos θ?",
    options: ["3/4", "4/5", "5/4", "3/5"],
    correctAnswer: "4/5",
    explanation: "Using sin²θ + cos²θ = 1: cos²θ = 1 − (3/5)² = 16/25, so cos θ = 4/5",
  },
  {
    id: 4,
    topic: "Number Patterns",
    grade: "Grade 10",
    difficulty: "Medium",
    question: "What is the next number in the sequence: 3, 7, 11, 15, ...?",
    options: ["17", "18", "19", "21"],
    correctAnswer: "19",
    explanation: "The common difference is 4. Next term: 15 + 4 = 19",
  },
  {
    id: 5,
    topic: "Geometry",
    grade: "Grade 8",
    difficulty: "Easy",
    question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
    options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
    correctAnswer: "40 cm²",
    explanation: "Area = length × width = 8 × 5 = 40 cm²",
  },
  {
    id: 6,
    topic: "Probability",
    grade: "Grade 11",
    difficulty: "Medium",
    question: "A bag has 3 red balls and 5 blue balls. What is the probability of drawing a red ball?",
    options: ["1/8", "3/8", "5/8", "3/5"],
    correctAnswer: "3/8",
    explanation: "Total balls = 3 + 5 = 8. Red balls = 3. Probability = 3/8",
  },
  {
    id: 7,
    topic: "Calculus",
    grade: "Grade 12",
    difficulty: "Hard",
    question: "What is the derivative of f(x) = 3x² + 2x − 5?",
    options: ["6x + 2", "3x + 2", "6x − 5", "3x² + 2"],
    correctAnswer: "6x + 2",
    explanation: "f'(x) = 2 × 3x + 2 = 6x + 2",
  },
  {
    id: 8,
    topic: "Fractions",
    grade: "Grade 6",
    difficulty: "Easy",
    question: "What is 3/4 + 1/2?",
    options: ["4/6", "4/4", "5/4", "3/6"],
    correctAnswer: "5/4",
    explanation: "3/4 + 1/2 = 3/4 + 2/4 = 5/4",
  },
];

export const topics = ["Algebra", "Trigonometry", "Number Patterns", "Geometry", "Probability", "Calculus", "Fractions"];

export interface QuizQuestion {
  id: number;
  topic: string;
  grade: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // === FOUNDATION PHASE (Grade 1-3) ===
  { id: 1, topic: "Addition", grade: "Grade 1", difficulty: "Easy", question: "What is 2 + 3?", options: ["4", "5", "6", "7"], correctAnswer: "5", explanation: "2 + 3 = 5" },
  { id: 2, topic: "Addition", grade: "Grade 1", difficulty: "Easy", question: "What is 7 + 2?", options: ["8", "9", "10", "11"], correctAnswer: "9", explanation: "7 + 2 = 9" },
  { id: 3, topic: "Subtraction", grade: "Grade 1", difficulty: "Easy", question: "What is 8 − 3?", options: ["3", "4", "5", "6"], correctAnswer: "5", explanation: "8 − 3 = 5" },
  { id: 4, topic: "Shapes", grade: "Grade 1", difficulty: "Easy", question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], correctAnswer: "3", explanation: "A triangle has 3 sides." },
  { id: 5, topic: "Counting", grade: "Grade 2", difficulty: "Easy", question: "What is 10 + 15?", options: ["20", "25", "30", "35"], correctAnswer: "25", explanation: "10 + 15 = 25" },
  { id: 6, topic: "Multiplication", grade: "Grade 2", difficulty: "Easy", question: "What is 3 × 4?", options: ["7", "10", "12", "14"], correctAnswer: "12", explanation: "3 × 4 = 12" },
  { id: 7, topic: "Division", grade: "Grade 3", difficulty: "Easy", question: "What is 20 ÷ 4?", options: ["3", "4", "5", "6"], correctAnswer: "5", explanation: "20 ÷ 4 = 5" },
  { id: 8, topic: "Fractions", grade: "Grade 3", difficulty: "Easy", question: "What is 1/4 of 12?", options: ["2", "3", "4", "6"], correctAnswer: "3", explanation: "1/4 × 12 = 3" },
  { id: 9, topic: "Addition", grade: "Grade 2", difficulty: "Medium", question: "What is 47 + 28?", options: ["65", "75", "85", "95"], correctAnswer: "75", explanation: "47 + 28 = 75" },
  { id: 10, topic: "Subtraction", grade: "Grade 3", difficulty: "Medium", question: "What is 100 − 37?", options: ["63", "73", "53", "67"], correctAnswer: "63", explanation: "100 − 37 = 63" },

  // === INTERMEDIATE PHASE (Grade 4-6) ===
  { id: 11, topic: "Fractions", grade: "Grade 4", difficulty: "Easy", question: "What is 1/2 + 1/4?", options: ["3/4", "2/6", "1/6", "2/4"], correctAnswer: "3/4", explanation: "1/2 = 2/4, so 2/4 + 1/4 = 3/4" },
  { id: 12, topic: "Decimals", grade: "Grade 4", difficulty: "Easy", question: "What is 0.5 + 0.3?", options: ["0.8", "0.53", "0.08", "8.0"], correctAnswer: "0.8", explanation: "0.5 + 0.3 = 0.8" },
  { id: 13, topic: "Multiplication", grade: "Grade 5", difficulty: "Easy", question: "What is 12 × 6?", options: ["62", "72", "82", "66"], correctAnswer: "72", explanation: "12 × 6 = 72" },
  { id: 14, topic: "Division", grade: "Grade 5", difficulty: "Medium", question: "What is 144 ÷ 12?", options: ["10", "11", "12", "14"], correctAnswer: "12", explanation: "144 ÷ 12 = 12" },
  { id: 15, topic: "Fractions", grade: "Grade 5", difficulty: "Medium", question: "What is 3/5 as a decimal?", options: ["0.35", "0.6", "0.5", "0.65"], correctAnswer: "0.6", explanation: "3 ÷ 5 = 0.6" },
  { id: 16, topic: "Percentages", grade: "Grade 6", difficulty: "Easy", question: "What is 50% of 200?", options: ["50", "100", "150", "25"], correctAnswer: "100", explanation: "50% = 1/2, and 1/2 of 200 = 100" },
  { id: 17, topic: "Decimals", grade: "Grade 6", difficulty: "Medium", question: "What is 0.75 × 4?", options: ["2", "3", "4", "3.5"], correctAnswer: "3", explanation: "0.75 × 4 = 3" },
  { id: 18, topic: "Area", grade: "Grade 5", difficulty: "Easy", question: "What is the area of a rectangle with length 8 cm and width 5 cm?", options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"], correctAnswer: "40 cm²", explanation: "Area = length × width = 8 × 5 = 40 cm²" },
  { id: 19, topic: "Ratios", grade: "Grade 6", difficulty: "Medium", question: "If the ratio of boys to girls is 3:2 and there are 30 children, how many are boys?", options: ["12", "15", "18", "20"], correctAnswer: "18", explanation: "3 + 2 = 5 parts. 30 ÷ 5 = 6 per part. Boys = 3 × 6 = 18" },
  { id: 20, topic: "Data", grade: "Grade 6", difficulty: "Hard", question: "The mean of 4, 8, 12, and x is 10. What is x?", options: ["10", "14", "16", "20"], correctAnswer: "16", explanation: "(4 + 8 + 12 + x) ÷ 4 = 10 → 24 + x = 40 → x = 16" },

  // === SENIOR PHASE (Grade 7-9) ===
  { id: 21, topic: "Algebra", grade: "Grade 8", difficulty: "Easy", question: "Solve for x: x + 7 = 15", options: ["x = 7", "x = 8", "x = 22", "x = 15"], correctAnswer: "x = 8", explanation: "x = 15 − 7 = 8" },
  { id: 22, topic: "Algebra", grade: "Grade 8", difficulty: "Easy", question: "Solve for x: 3x = 21", options: ["x = 7", "x = 18", "x = 24", "x = 63"], correctAnswer: "x = 7", explanation: "x = 21 ÷ 3 = 7" },
  { id: 23, topic: "Integers", grade: "Grade 7", difficulty: "Easy", question: "What is (−5) + (+8)?", options: ["3", "−3", "13", "−13"], correctAnswer: "3", explanation: "Start at −5, move 8 steps up → 3" },
  { id: 24, topic: "Exponents", grade: "Grade 8", difficulty: "Medium", question: "What is 2³?", options: ["4", "6", "8", "16"], correctAnswer: "8", explanation: "2³ = 2 × 2 × 2 = 8" },
  { id: 25, topic: "Geometry", grade: "Grade 7", difficulty: "Easy", question: "What is the perimeter of a square with side 6 cm?", options: ["12 cm", "24 cm", "36 cm", "18 cm"], correctAnswer: "24 cm", explanation: "Perimeter = 4 × 6 = 24 cm" },
  { id: 26, topic: "Algebra", grade: "Grade 9", difficulty: "Medium", question: "Solve for x: 2x − 5 = 9", options: ["x = 3", "x = 4", "x = 7", "x = 5"], correctAnswer: "x = 7", explanation: "2x = 14 → x = 7" },
  { id: 27, topic: "Pythagoras", grade: "Grade 9", difficulty: "Medium", question: "In a right triangle with legs 3 and 4, what is the hypotenuse?", options: ["5", "6", "7", "8"], correctAnswer: "5", explanation: "3² + 4² = 9 + 16 = 25, √25 = 5" },
  { id: 28, topic: "Algebra", grade: "Grade 9", difficulty: "Hard", question: "Solve for x: x² − 9 = 0", options: ["x = 3 only", "x = ±3", "x = 9", "x = ±9"], correctAnswer: "x = ±3", explanation: "x² = 9 → x = −3 or x = 3" },
  { id: 29, topic: "Graphs", grade: "Grade 8", difficulty: "Medium", question: "What is the gradient of the line y = 3x + 2?", options: ["2", "3", "−3", "−2"], correctAnswer: "3", explanation: "In y = mx + c, m is the gradient. Here m = 3" },
  { id: 30, topic: "Probability", grade: "Grade 8", difficulty: "Medium", question: "What is the probability of rolling an even number on a fair 6-sided die?", options: ["1/2", "1/3", "1/6", "2/3"], correctAnswer: "1/2", explanation: "Even numbers: 2, 4, 6 → 3 out of 6 = 1/2" },

  // === FET PHASE (Grade 10-12) ===
  { id: 31, topic: "Algebra", grade: "Grade 10", difficulty: "Easy", question: "Solve for x: 2x + 5 = 13", options: ["x = 3", "x = 4", "x = 5", "x = 6"], correctAnswer: "x = 4", explanation: "2x + 5 = 13 → 2x = 8 → x = 4" },
  { id: 32, topic: "Exponents", grade: "Grade 10", difficulty: "Medium", question: "What is (2³)²?", options: ["2⁵", "2⁶", "4⁶", "8²"], correctAnswer: "2⁶", explanation: "(aᵐ)ⁿ = aᵐⁿ, so (2³)² = 2⁶" },
  { id: 33, topic: "Number Patterns", grade: "Grade 10", difficulty: "Medium", question: "What is the next term: 3, 7, 11, 15, ...?", options: ["17", "18", "19", "21"], correctAnswer: "19", explanation: "Common difference is 4. 15 + 4 = 19" },
  { id: 34, topic: "Finance", grade: "Grade 10", difficulty: "Medium", question: "Simple interest on R1000 at 10% for 2 years is?", options: ["R100", "R200", "R300", "R1200"], correctAnswer: "R200", explanation: "SI = P × r × t = 1000 × 0.10 × 2 = R200" },
  { id: 35, topic: "Algebra", grade: "Grade 11", difficulty: "Medium", question: "Solve for x: x² − 5x + 6 = 0", options: ["x = 2 or x = 3", "x = −2 or x = −3", "x = 1 or x = 6", "x = −1 or x = −6"], correctAnswer: "x = 2 or x = 3", explanation: "x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3" },
  { id: 36, topic: "Trigonometry", grade: "Grade 11", difficulty: "Medium", question: "What is sin(30°)?", options: ["0", "1/2", "√3/2", "1"], correctAnswer: "1/2", explanation: "sin(30°) = 1/2" },
  { id: 37, topic: "Probability", grade: "Grade 11", difficulty: "Medium", question: "A bag has 3 red and 5 blue balls. Probability of drawing a red?", options: ["1/8", "3/8", "5/8", "3/5"], correctAnswer: "3/8", explanation: "Total = 8. Red = 3. P(red) = 3/8" },
  { id: 38, topic: "Sequences", grade: "Grade 11", difficulty: "Hard", question: "The 5th term of an arithmetic sequence with T₁ = 4 and d = 3 is?", options: ["12", "16", "19", "15"], correctAnswer: "16", explanation: "T₅ = 4 + (5−1)×3 = 4 + 12 = 16" },
  { id: 39, topic: "Calculus", grade: "Grade 12", difficulty: "Hard", question: "What is the derivative of f(x) = 3x² + 2x − 5?", options: ["6x + 2", "3x + 2", "6x − 5", "3x² + 2"], correctAnswer: "6x + 2", explanation: "f'(x) = 2×3x + 2 = 6x + 2" },
  { id: 40, topic: "Trigonometry", grade: "Grade 12", difficulty: "Hard", question: "If sin θ = 3/5 and θ is acute, what is cos θ?", options: ["3/4", "4/5", "5/4", "3/5"], correctAnswer: "4/5", explanation: "sin²θ + cos²θ = 1 → cos²θ = 1 − 9/25 = 16/25 → cos θ = 4/5" },
  { id: 41, topic: "Calculus", grade: "Grade 12", difficulty: "Hard", question: "What is ∫(2x) dx?", options: ["x² + C", "2x² + C", "x + C", "x²/2 + C"], correctAnswer: "x² + C", explanation: "∫2x dx = x² + C" },
  { id: 42, topic: "Finance", grade: "Grade 12", difficulty: "Hard", question: "If R5000 is invested at 8% compounded annually, what is the value after 3 years?", options: ["R6200", "R6298.56", "R6240", "R6800"], correctAnswer: "R6298.56", explanation: "A = P(1+r)ⁿ = 5000(1.08)³ = R6298.56" },
  { id: 43, topic: "Geometry", grade: "Grade 11", difficulty: "Medium", question: "The angle subtended by a diameter of a circle is?", options: ["60°", "90°", "180°", "360°"], correctAnswer: "90°", explanation: "The angle in a semicircle is always 90°." },
  { id: 44, topic: "Statistics", grade: "Grade 10", difficulty: "Medium", question: "What is the median of: 3, 7, 9, 12, 15?", options: ["7", "9", "12", "3"], correctAnswer: "9", explanation: "Ordered: 3, 7, 9, 12, 15. Middle value = 9" },
  { id: 45, topic: "Algebra", grade: "Grade 12", difficulty: "Hard", question: "Solve for x: 2ˣ = 32", options: ["x = 4", "x = 5", "x = 6", "x = 16"], correctAnswer: "x = 5", explanation: "2⁵ = 32, so x = 5" },

  // === ADDITIONAL QUESTIONS ===
  { id: 46, topic: "Fractions", grade: "Grade 6", difficulty: "Easy", question: "What is 3/4 + 1/2?", options: ["4/6", "4/4", "5/4", "3/6"], correctAnswer: "5/4", explanation: "3/4 + 1/2 = 3/4 + 2/4 = 5/4" },
  { id: 47, topic: "Measurement", grade: "Grade 5", difficulty: "Easy", question: "How many centimeters in 2 meters?", options: ["20", "200", "2000", "2"], correctAnswer: "200", explanation: "1 m = 100 cm, so 2 m = 200 cm" },
  { id: 48, topic: "Algebra", grade: "Grade 9", difficulty: "Medium", question: "Factorise: x² − 16", options: ["(x−4)(x+4)", "(x−8)(x+2)", "(x−4)²", "(x+4)²"], correctAnswer: "(x−4)(x+4)", explanation: "x² − 16 = (x−4)(x+4) — difference of squares" },
  { id: 49, topic: "Trigonometry", grade: "Grade 10", difficulty: "Medium", question: "What is tan(45°)?", options: ["0", "1", "√3", "Undefined"], correctAnswer: "1", explanation: "tan(45°) = sin(45°)/cos(45°) = 1" },
  { id: 50, topic: "Probability", grade: "Grade 12", difficulty: "Hard", question: "Two coins are tossed. What is P(at least one head)?", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: "3/4", explanation: "Possible: HH, HT, TH, TT. 3 have at least one head. P = 3/4" },
];

export const topics = [...new Set(quizQuestions.map((q) => q.topic))].sort();
export const gradeOptions = [...new Set(quizQuestions.map((q) => q.grade))].sort((a, b) => {
  const numA = parseInt(a.replace(/\D/g, ""));
  const numB = parseInt(b.replace(/\D/g, ""));
  return numA - numB;
});

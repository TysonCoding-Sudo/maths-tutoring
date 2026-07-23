export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

export interface QuizResult {
  recommendedService: string;
  recommendedTutor: string;
  matchReason: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What grade is the student in?",
    options: [
      { label: "Grade 1–3 (Foundation Phase)", value: "foundation" },
      { label: "Grade 4–6 (Intermediate Phase)", value: "intermediate" },
      { label: "Grade 7–9 (Senior Phase)", value: "senior" },
      { label: "Grade 10–12 (FET / Matric)", value: "fet" },
    ],
  },
  {
    id: 2,
    question: "What is the student currently struggling with most?",
    options: [
      { label: "Understanding basic concepts", value: "concepts" },
      { label: "Applying knowledge to problems", value: "application" },
      { label: "Exam technique & time management", value: "exam-tech" },
      { label: "Staying motivated and engaged", value: "motivation" },
    ],
  },
  {
    id: 3,
    question: "What is the main goal for tutoring?",
    options: [
      { label: "Catching up & building confidence", value: "catch-up" },
      { label: "Exam preparation & past papers", value: "exam-prep" },
      { label: "Ongoing support throughout the year", value: "ongoing" },
      { label: "Homework & assignment help", value: "homework" },
    ],
  },
  {
    id: 4,
    question: "What session format do you prefer?",
    options: [
      { label: "One-on-one (most focused)", value: "one-on-one" },
      { label: "Small group (more affordable)", value: "group" },
      { label: "Online resources (self-paced)", value: "online" },
      { label: "Flexible — any format works", value: "flexible" },
    ],
  },
];

export function calculateQuizResult(answers: Record<number, string>): QuizResult {
  const grade = answers[1] || "";
  const struggle = answers[2] || "";
  const goal = answers[3] || "";
  const format = answers[4] || "";

  if (goal === "exam-prep" || struggle === "exam-tech") {
    return {
      recommendedService: "Exam Preparation & Past Papers",
      recommendedTutor: "Thabo Ntuli",
      matchReason:
        "Your focus on exam preparation aligns perfectly with our structured exam prep program. Thabo specialises in exam technique and has a 95% matric pass rate.",
    };
  }

  if (goal === "homework" || struggle === "application") {
    return {
      recommendedService: "Homework Help & Assignment Support",
      recommendedTutor: "James Kruger",
      matchReason:
        "You need flexible support with assignments and application. James excels at helping students connect concepts to practical problems.",
    };
  }

  if (goal === "ongoing" || format === "one-on-one") {
    return {
      recommendedService: "One-on-One Tutoring",
      recommendedTutor: "Sarah Mitchell",
      matchReason:
        "Ongoing one-on-one support is ideal for consistent progress. Sarah's methodical approach ensures strong foundations and steady improvement.",
    };
  }

  if (format === "group") {
    return {
      recommendedService: "Group Classes & Study Sessions",
      recommendedTutor: "James Kruger",
      matchReason:
        "Group sessions are a fantastic way to learn collaboratively. James's engaging style keeps groups motivated and learning from each other.",
    };
  }

  if (format === "online" || grade === "foundation") {
    return {
      recommendedService: "Online Lessons & Downloadable Resources",
      recommendedTutor: "Emma Williams",
      matchReason:
        "Self-paced online resources with the option of tutor support. Emma's creative approach is perfect for younger learners building confidence.",
    };
  }

  return {
    recommendedService: "One-on-One Tutoring",
    recommendedTutor: "Sarah Mitchell",
    matchReason:
      "Based on your responses, we recommend starting with personalised one-on-one tutoring to address your specific needs.",
  };
}

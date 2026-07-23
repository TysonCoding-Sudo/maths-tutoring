import { tutors } from "./tutors";

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

const tutorName = tutors[0]?.name || "Mr. Hlabela";

export function calculateQuizResult(answers: Record<number, string>): QuizResult {
  const goal = answers[3] || "";
  const format = answers[4] || "";

  if (goal === "exam-prep") {
    return {
      recommendedService: "Exam Preparation & Past Papers",
      recommendedTutor: tutorName,
      matchReason: `Your focus on exam preparation is exactly what we specialise in. ${tutorName} will guide you through past papers, exam technique, and topic-specific revision.`,
    };
  }

  if (goal === "homework") {
    return {
      recommendedService: "Homework Help & Assignment Support",
      recommendedTutor: tutorName,
      matchReason: `Need help with assignments? ${tutorName} provides flexible homework support to make sure you never get stuck.`,
    };
  }

  if (format === "group") {
    return {
      recommendedService: "Group Classes & Study Sessions",
      recommendedTutor: tutorName,
      matchReason: `Group sessions are a great way to learn collaboratively with ${tutorName}'s guidance.`,
    };
  }

  return {
    recommendedService: "One-on-One Tutoring",
    recommendedTutor: tutorName,
    matchReason: `Based on your responses, personalised one-on-one tutoring with ${tutorName} is the best fit. Every session is tailored to your pace and goals.`,
  };
}

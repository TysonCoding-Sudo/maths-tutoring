export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
  targetGrades: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "one-on-one",
    title: "One-on-One Tutoring",
    shortDesc: "Personalized learning plans tailored to each student",
    description:
      "Our one-on-one tutoring sessions are designed around each student's unique needs, learning pace, and goals. We assess strengths and weaknesses to create a customized plan that builds confidence and delivers results.",
    icon: "UserRound",
    features: [
      "Personalized learning plans",
      "Flexible scheduling",
      "Progress tracking & reports",
      "All subjects & grades",
      "Online & in-person options",
    ],
    targetGrades: "Grade 1–12",
  },
  {
    id: "group-classes",
    title: "Group Classes & Study Sessions",
    shortDesc: "Collaborative learning in small groups",
    description:
      "Small group classes (max 6 students) provide a social learning environment where students can collaborate, discuss concepts, and learn from peers while still getting individual attention.",
    icon: "Users",
    features: [
      "Max 6 students per group",
      "Weekly scheduled sessions",
      "Peer discussion & collaboration",
      "Lower cost per session",
      "Same curriculum coverage",
    ],
    targetGrades: "Grade 4–12",
  },
  {
    id: "homework-help",
    title: "Homework Help & Assignment Support",
    shortDesc: "Drop-in or scheduled homework assistance",
    description:
      "Whether it's a tough assignment due tomorrow or ongoing homework support, our tutors are available for both scheduled sessions and drop-in help to ensure students never get stuck.",
    icon: "BookOpen",
    features: [
      "Drop-in & scheduled options",
      "Same-day turnaround available",
      "Assignment review & feedback",
      "Study skills coaching",
      "All subjects covered",
    ],
    targetGrades: "Grade 1–12",
  },
  {
    id: "exam-prep",
    title: "Exam Preparation & Past Papers",
    shortDesc: "Targeted exam practice with past papers",
    description:
      "Our exam prep program focuses on past paper practice, time management strategies, and topic-specific revision. Students gain confidence by working through real exam questions under timed conditions.",
    icon: "FileCheck",
    features: [
      "Interactive past-paper practice tool",
      "Topic-by-topic breakdown",
      "Time management strategies",
      "Grade 12/Matric focus",
      "Marking guide analysis",
    ],
    targetGrades: "Grade 10–12",
  },
  {
    id: "online-resources",
    title: "Online Lessons & Downloadable Resources",
    shortDesc: "Access lessons and resources anytime",
    description:
      "Our online resource library includes recorded lessons, worksheets, cheat sheets, and study guides. Download sample materials or subscribe for full access to our complete library.",
    icon: "Monitor",
    features: [
      "Recorded video lessons",
      "Downloadable worksheets",
      "Cheat sheets & study guides",
      "Sample downloads free",
      "Full library with subscription",
    ],
    targetGrades: "Grade 1–12",
  },
];

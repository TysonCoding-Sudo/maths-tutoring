export interface Testimonial {
  id: string;
  name: string;
  role: "Student" | "Parent";
  grade?: string;
  subject?: string;
  quote: string;
  rating: number;
  improvement?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mia van der Merwe",
    role: "Student",
    grade: "Grade 12",
    subject: "Mathematics",
    quote: "I went from failing my June exams to getting a distinction in matric. Sarah's exam prep sessions were a game-changer — she taught me how to approach each question type systematically.",
    rating: 5,
    improvement: "38% → 82%",
  },
  {
    id: "t2",
    name: "David & Lisa Chen",
    role: "Parent",
    grade: "Grade 7",
    subject: "Mathematics",
    quote: "Our son used to cry before maths tests. After just three months with Priya, he's actually asking for extra worksheets. The change in his confidence is incredible.",
    rating: 5,
    improvement: "Confidence transformed",
  },
  {
    id: "t3",
    name: "Sipho Nkosi",
    role: "Student",
    grade: "Grade 11",
    subject: "Physical Sciences",
    quote: "Thabo breaks down physics problems so they actually make sense. I used to memorise formulas — now I understand the concepts. My marks went up by 25%.",
    rating: 5,
    improvement: "55% → 80%",
  },
  {
    id: "t4",
    name: "Karen Williams",
    role: "Parent",
    grade: "Grade 4",
    subject: "Mathematics",
    quote: "Emma has a gift for making maths fun. Our daughter looks forward to her sessions and her teacher has noticed a huge improvement in class participation.",
    rating: 5,
    improvement: "Active participation",
  },
  {
    id: "t5",
    name: "Ryan Botha",
    role: "Student",
    grade: "Grade 9",
    subject: "Mathematics",
    quote: "James makes maths relevant. He showed me how algebra applies to video game design and now I actually enjoy it. Group sessions are great because we learn from each other too.",
    rating: 4,
    improvement: "62% → 78%",
  },
  {
    id: "t6",
    name: "Nomsa Dlamini",
    role: "Parent",
    grade: "Grade 12",
    subject: "Mathematics",
    quote: "The exam prep program was exactly what my daughter needed. The past paper practice and marking guide analysis helped her understand exactly what examiners look for.",
    rating: 5,
    improvement: "68% → 91%",
  },
  {
    id: "t7",
    name: "Liam O'Connor",
    role: "Student",
    grade: "Grade 10",
    subject: "Mathematics",
    quote: "Homework help sessions saved me. When I'm stuck on a problem, I can just drop in and get help right away. No more spending hours frustrated on one question.",
    rating: 4,
    improvement: "Consistent 70%+",
  },
  {
    id: "t8",
    name: "Fatima Essack",
    role: "Student",
    grade: "Grade 6",
    subject: "Mathematics",
    quote: "I used to think I was bad at maths. Priya showed me that I just needed to learn at my own pace. Now maths is my favourite subject!",
    rating: 5,
    improvement: "Love for maths",
  },
];

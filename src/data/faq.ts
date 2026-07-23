export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How do I schedule a tutoring session?",
    answer:
      "You can book a session through our online booking system on the 'Book a Lesson' page. Select your preferred tutor, choose a date and time slot, and confirm your booking. You'll receive a confirmation email with session details.",
    category: "Scheduling",
  },
  {
    question: "What are your rates for one-on-one tutoring?",
    answer:
      "Our rates vary depending on the type of session. One-on-one tutoring starts at R350/hour (online) and R450/hour (in-person). Group classes start at R200/hour per student. Visit our Pricing page for a detailed breakdown or use our interactive calculator.",
    category: "Pricing",
  },
  {
    question: "Do you offer a free trial lesson?",
    answer:
      "Yes! We offer a free 30-minute trial lesson so you can meet your tutor, see if it's a good fit, and experience our teaching approach first-hand with no obligation.",
    category: "Pricing",
  },
  {
    question: "What online platform do you use for lessons?",
    answer:
      "We use Zoom and Google Meet for online sessions. Both platforms are secure, easy to use, and support screen sharing, digital whiteboards, and real-time collaboration. We'll send you the link before each session.",
    category: "Online Tools",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require at least 24 hours' notice for cancellations. Cancellations made with less than 24 hours' notice will be charged at the full session rate. Emergency cancellations are handled on a case-by-case basis.",
    category: "Cancellation",
  },
  {
    question: "Do you cover all school curriculums?",
    answer:
      "Yes, our tutors are experienced with both CAPS and IEB curriculums, as well as Cambridge International. When you book, let us know your curriculum so we can match you with the best-suited tutor.",
    category: "Curriculum",
  },
  {
    question: "Can I switch tutors if it's not a good fit?",
    answer:
      "Absolutely. We want every student to have the best learning experience possible. If you feel your current tutor isn't the right match, we'll help you switch to another tutor at no extra cost.",
    category: "Scheduling",
  },
  {
    question: "Do you offer packages or discounts?",
    answer:
      "Yes! We offer a 10-session package at a 10% discount and a 20-session package at a 15% discount. Weekly session bundles also come with discounted rates. Check our Pricing page for all options.",
    category: "Pricing",
  },
  {
    question: "Is homework help available on the same day?",
    answer:
      "Yes, our drop-in homework help service offers same-day assistance when available. Simply check the 'Homework Help' section on the booking page to see current availability.",
    category: "Scheduling",
  },
  {
    question: "What if my child has learning difficulties or special needs?",
    answer:
      "Several of our tutors have experience working with students who have learning difficulties including ADHD, dyslexia, and dyscalculia. Please mention any specific needs when booking so we can match you with the most suitable tutor.",
    category: "Curriculum",
  },
];

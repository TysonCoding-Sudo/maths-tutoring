export interface StudyExample {
  problem: string;
  solution: string;
}

export interface StudySection {
  title: string;
  content: string;
  examples?: StudyExample[];
}

export interface StudyGuide {
  id: string;
  topic: string;
  gradeBand: string;
  grades: string;
  icon: string;
  description: string;
  sections: StudySection[];
  tips: string[];
  commonMistakes: { mistake: string; correction: string }[];
}

export const studyGuides: StudyGuide[] = [
  // ========================
  // ALGEBRA
  // ========================
  {
    id: "algebra-gr1-3",
    topic: "Algebra",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "Calculator",
    description: "Finding the missing number and understanding patterns",
    sections: [
      {
        title: "What is Algebra?",
        content:
          "Algebra is like solving a puzzle. In maths, we sometimes have a missing number, and we need to figure out what it is. We use a box ☐ or a blank ___ to show the missing number. For example: 3 + ☐ = 7. What goes in the box?",
      },
      {
        title: "Finding Missing Numbers",
        content:
          "When you see 5 + ☐ = 9, ask yourself: 'What number added to 5 gives me 9?' You can count up from 5 to 9 on your fingers: 6, 7, 8, 9. That's 4 steps. So ☐ = 4.",
        examples: [
          { problem: "7 + ☐ = 10", solution: "Count up from 7 to 10: 8, 9, 10 → 3 steps. ☐ = 3" },
          { problem: "☐ + 2 = 8", solution: "Think: what plus 2 equals 8? 6 + 2 = 8. ☐ = 6" },
          { problem: "9 − ☐ = 4", solution: "Start at 9, count down to 4: 8, 7, 6, 5, 4 → 5 steps. ☐ = 5" },
        ],
      },
      {
        title: "Balancing Scales",
        content:
          "Imagine a balance scale. Both sides must have the same total weight. If one side has 5 + 3 and the other side has ☐ + 4, then ☐ must be 4 because 5+3=8 and 4+4=8. Both sides balance!",
      },
    ],
    tips: [
      "Draw pictures or use your fingers to count up or down",
      "Check your answer by putting it back in the original problem",
      "Practice with real objects like buttons or blocks",
    ],
    commonMistakes: [
      { mistake: "Adding instead of subtracting for missing numbers in subtraction", correction: "If you see 8 − ☐ = 3, don't add. Start at 8 and count down until you reach 3." },
      { mistake: "Forgetting to check the answer", correction: "Always put your answer back: 8 − 5 = 3 ✓" },
    ],
  },
  {
    id: "algebra-gr4-6",
    topic: "Algebra",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "Calculator",
    description: "Using variables, solving equations, and input-output tables",
    sections: [
      {
        title: "What is a Variable?",
        content:
          "A variable is a letter that stands for an unknown number. Instead of a box ☐, we use letters like x, y, or a. For example: x + 5 = 12 means 'some number plus 5 equals 12'. That number is x = 7.",
      },
      {
        title: "Solving Simple Equations",
        content:
          "To find the value of the variable, we need to get it alone on one side. Whatever we do to one side, we must do to the other. For x + 7 = 15, subtract 7 from both sides: x + 7 − 7 = 15 − 7 → x = 8.",
        examples: [
          { problem: "x + 9 = 20", solution: "Subtract 9: x = 20 − 9 = 11" },
          { problem: "y − 4 = 10", solution: "Add 4: y = 10 + 4 = 14" },
          { problem: "3x = 18", solution: "Divide by 3: x = 18 ÷ 3 = 6" },
          { problem: "x ÷ 2 = 7", solution: "Multiply by 2: x = 7 × 2 = 14" },
        ],
      },
      {
        title: "Input-Output Tables",
        content:
          "An input-output table shows what happens when we apply a rule to a number. If the rule is '× 2 + 1', then input 3 gives output 7 (3×2+1=7). We can work backwards too: if output is 11, what was the input? 11−1=10, 10÷2=5.",
      },
    ],
    tips: [
      "Always do the opposite operation to undo (add ↔ subtract, multiply ↔ divide)",
      "Check your answer by plugging it back into the original equation",
      "Draw a balance scale to visualise equations",
    ],
    commonMistakes: [
      { mistake: "Forgetting to do the same operation to both sides", correction: "If you add 5 to the left, you MUST add 5 to the right too." },
      { mistake: "Confusing 3x with x+3", correction: "3x means 3 × x (multiply), not 3 + x (add)." },
    ],
  },

  // ========================
  // TRIGONOMETRY (simplified intro)
  // ========================
  {
    id: "trigonometry-gr1-3",
    topic: "Trigonometry",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "Triangle",
    description: "Learning about angles and triangles",
    sections: [
      {
        title: "What is Trigonometry?",
        content:
          "Trigonometry (or 'trig' for short) is all about triangles and angles. An angle is where two lines meet at a point. Think of the corner of a book or a slice of pizza — those are angles!",
      },
      {
        title: "Types of Angles",
        content:
          "There are three main types of angles: Right angles (like the corner of a square — 90°), Acute angles (smaller than a right angle — think of a pizza slice), and Obtuse angles (bigger than a right angle — think of a wide-open door).",
        examples: [
          { problem: "What angle is the corner of a book?", solution: "A right angle (90°)" },
          { problem: "Is a 30° angle acute or obtuse?", solution: "Acute, because it's smaller than 90°" },
        ],
      },
      {
        title: "Triangles Have Three Angles",
        content:
          "Every triangle has three angles that always add up to 180°. If a triangle has angles of 60° and 60°, the third angle must be 60° too (60+60+60=180). That's called an equilateral triangle!",
      },
    ],
    tips: [
      "Look for angles all around you — doors, books, roofs, clocks",
      "Use the corner of a piece of paper to check for right angles",
      "Remember: acute = small (a cute little angle)",
    ],
    commonMistakes: [
      { mistake: "Thinking bigger numbers always mean bigger angles", correction: "An angle of 175° is still less than 180° (a straight line). Big doesn't always mean obtuse!" },
      { mistake: "Confusing acute with obtuse", correction: "Acute = small (like a cute kitten). Obtuse = big and wide." },
    ],
  },
  {
    id: "trigonometry-gr4-6",
    topic: "Trigonometry",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "Triangle",
    description: "Naming triangle sides and an introduction to SOH CAH TOA",
    sections: [
      {
        title: "Parts of a Right Triangle",
        content:
          "A right triangle has one 90° angle. The three sides have special names: Hypotenuse (the longest side, opposite the right angle), Opposite (the side across from the angle we are looking at), and Adjacent (the side next to the angle, not the hypotenuse).",
      },
      {
        title: "Introduction to SOH CAH TOA",
        content:
          "SOH CAH TOA is a fun way to remember three important ratios: SOH: Sine = Opposite ÷ Hypotenuse, CAH: Cosine = Adjacent ÷ Hypotenuse, TOA: Tangent = Opposite ÷ Adjacent. These ratios help us find missing sides or angles in right triangles.",
        examples: [
          { problem: "In a right triangle, the opposite side is 3 and the hypotenuse is 5. What is sin(angle)?", solution: "sin = opposite ÷ hypotenuse = 3 ÷ 5 = 0.6" },
          { problem: "If the adjacent side is 4 and hypotenuse is 5, what is cos(angle)?", solution: "cos = adjacent ÷ hypotenuse = 4 ÷ 5 = 0.8" },
        ],
      },
      {
        title: "Angles in a Triangle",
        content:
          "The three angles in any triangle always add up to 180°. In a right triangle, one angle is 90°, so the other two must add up to 90°. If one is 30°, the other must be 60°.",
      },
    ],
    tips: [
      "Draw and label the triangle before using SOH CAH TOA",
      "Remember SOH CAH TOA: Some Old Horses Can Always Hear Their Owners Approach",
      "The hypotenuse is always opposite the right angle and is the longest side",
    ],
    commonMistakes: [
      { mistake: "Putting the wrong sides as opposite vs adjacent", correction: "The opposite side is across from your chosen angle. The adjacent is next to it (but not the hypotenuse)." },
      { mistake: "Forgetting the triangle angles sum to 180°", correction: "Always check: if you know two angles, subtract from 180 to find the third." },
    ],
  },

  // ========================
  // NUMBER PATTERNS
  // ========================
  {
    id: "number-patterns-gr1-3",
    topic: "Number Patterns",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "ListOrdered",
    description: "Recognising and continuing patterns in numbers",
    sections: [
      {
        title: "What is a Number Pattern?",
        content:
          "A number pattern is a sequence of numbers that follows a rule. For example: 2, 4, 6, 8, 10... The rule is 'add 2 each time'. Patterns help us predict what comes next and understand how numbers work.",
      },
      {
        title: "Skip Counting",
        content:
          "Skip counting is counting by a number other than 1. Count by 2s: 2, 4, 6, 8, 10. Count by 5s: 5, 10, 15, 20, 25. Count by 10s: 10, 20, 30, 40, 50. This is the foundation of multiplication!",
        examples: [
          { problem: "Continue the pattern: 5, 10, 15, __, __", solution: "Rule: add 5. Next: 20, 25" },
          { problem: "What comes next: 30, 27, 24, 21, __?", solution: "Rule: subtract 3. Next: 18" },
          { problem: "Fill in the missing: 4, 8, __, 16, 20", solution: "Rule: add 4. Missing: 12" },
        ],
      },
      {
        title: "Growing and Repeating Patterns",
        content:
          "Growing patterns get bigger each time (like 1, 3, 5, 7...). Repeating patterns repeat the same group (like red, blue, red, blue...). Look for what stays the same and what changes!",
      },
    ],
    tips: [
      "Say the pattern out loud to hear the rhythm",
      "Look at the difference between each number",
      "Draw the pattern with dots or pictures to see it grow",
    ],
    commonMistakes: [
      { mistake: "Adding when you should be subtracting", correction: "Check if the numbers are getting bigger or smaller. If smaller, you're subtracting." },
      { mistake: "Counting the starting number as the first step", correction: "The starting number is already there. Count how many steps to the next number." },
    ],
  },
  {
    id: "number-patterns-gr4-6",
    topic: "Number Patterns",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "ListOrdered",
    description: "Arithmetic sequences, finding rules, and flow diagrams",
    sections: [
      {
        title: "Arithmetic Sequences",
        content:
          "An arithmetic sequence is a pattern where the same number is added (or subtracted) each time. That number is called the common difference. For 3, 7, 11, 15..., the common difference is 4.",
      },
      {
        title: "Finding the Rule (Tn)",
        content:
          "We can write a formula for any arithmetic sequence. Tn = first term + (n−1) × difference. For 5, 8, 11, 14...: Tn = 5 + (n−1)×3 = 3n + 2. So the 10th term is 3×10+2 = 32.",
        examples: [
          { problem: "Find the 8th term of: 2, 5, 8, 11...", solution: "Difference = 3. Tn = 3n − 1. T8 = 3×8−1 = 23" },
          { problem: "What is the rule for: 10, 7, 4, 1...?", solution: "Difference = −3. Tn = 13 − 3n" },
          { problem: "Which term is 31 in: 1, 4, 7, 10...?", solution: "Tn = 3n−2. 31 = 3n−2 → 3n=33 → n=11. The 11th term." },
        ],
      },
      {
        title: "Flow Diagrams",
        content:
          "A flow diagram shows what happens to an input number. If the rule is '× 2 + 1', the flow is: input → ×2 → +1 → output. Flow diagrams help us understand functions and relationships between numbers.",
      },
    ],
    tips: [
      "Find the common difference first — it's the key to the pattern",
      "Write Tn = dn + c and solve for c using the first term",
      "Check your formula by testing the second term",
    ],
    commonMistakes: [
      { mistake: "Using n instead of (n−1) for the number of steps", correction: "The first term uses 0 steps, so steps = (n−1). T1 = first term + 0×d." },
      { mistake: "Forgetting negative differences", correction: "If numbers decrease, the difference is negative (e.g., d = −3)." },
    ],
  },

  // ========================
  // GEOMETRY
  // ========================
  {
    id: "geometry-gr1-3",
    topic: "Geometry",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "Square",
    description: "Shapes, symmetry, and space",
    sections: [
      {
        title: "2D Shapes",
        content:
          "2D shapes are flat. They have sides and corners (vertices). A circle has 0 sides, a triangle has 3 sides, a square has 4 equal sides, and a rectangle has 4 sides with opposite sides equal.",
      },
      {
        title: "3D Objects",
        content:
          "3D objects are solid — they take up space. A cube (like a dice) has 6 square faces, a sphere (like a ball) is completely round, a cylinder (like a can) has two circular ends, and a cone (like an ice cream cone) has one circular base.",
        examples: [
          { problem: "What 3D shape is a soccer ball?", solution: "A sphere" },
          { problem: "How many faces does a cube have?", solution: "6 faces" },
          { problem: "What shape is a tin of beans?", solution: "A cylinder" },
        ],
      },
      {
        title: "Symmetry",
        content:
          "A shape is symmetrical if you can fold it in half and both sides match perfectly. The fold line is called the line of symmetry. A butterfly has symmetry. A square has 4 lines of symmetry. Draw half and flip it to make the other half!",
      },
    ],
    tips: [
      "Look for shapes in your everyday environment — signs, windows, furniture",
      "Trace shapes with your finger to feel the sides and corners",
      "Try folding paper to test for symmetry",
    ],
    commonMistakes: [
      { mistake: "Calling a rectangle a square", correction: "A square has all four sides equal. A rectangle has opposite sides equal (but not all four)." },
      { mistake: "Saying a circle has one side", correction: "A circle has zero straight sides and no corners. It has one continuous curved edge." },
    ],
  },
  {
    id: "geometry-gr4-6",
    topic: "Geometry",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "Square",
    description: "Area, perimeter, angles, nets, and transformations",
    sections: [
      {
        title: "Area and Perimeter",
        content:
          "Perimeter is the distance around a shape. Add all the sides. Area is the space inside a shape, measured in square units. For a rectangle: Area = length × width. For a square: Area = side × side.",
        examples: [
          { problem: "Find the perimeter of a rectangle 8 cm by 5 cm", solution: "P = 2 × (8+5) = 2 × 13 = 26 cm" },
          { problem: "Find the area of a square with side 6 cm", solution: "A = 6 × 6 = 36 cm²" },
          { problem: "A rectangle has area 40 cm² and length 8 cm. What is the width?", solution: "Width = 40 ÷ 8 = 5 cm" },
        ],
      },
      {
        title: "Angles",
        content:
          "Angles are measured in degrees (°). A full circle is 360°. A right angle is 90°. A straight line is 180°. We use a protractor to measure angles. Angles can be acute (<90°), right (90°), obtuse (90–180°), straight (180°), or reflex (>180°).",
      },
      {
        title: "Nets of 3D Objects",
        content:
          "A net is a flat shape that can be folded to make a 3D object. A cube has 11 different nets — all made of 6 squares connected in a pattern. A cylinder's net is two circles and a rectangle. Nets help us understand surface area.",
      },
      {
        title: "Transformations",
        content:
          "Transformations are ways to move a shape: Translation (slide it without rotating), Reflection (flip it like a mirror), Rotation (turn it around a point). Congruent shapes are identical after transformation. Similar shapes are the same shape but a different size.",
      },
    ],
    tips: [
      "Draw a diagram for every geometry problem",
      "Label all measurements on your diagram",
      "Remember: area is 'inside' (square units), perimeter is 'around' (linear units)",
    ],
    commonMistakes: [
      { mistake: "Forgetting to include units (cm, cm², etc.)", correction: "Always write the unit. Area is always 'square' units (cm², m²)." },
      { mistake: "Confusing area and perimeter formulas", correction: "Perimeter adds lengths. Area multiplies two lengths." },
    ],
  },

  // ========================
  // PROBABILITY
  // ========================
  {
    id: "probability-gr1-3",
    topic: "Probability",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "Dices",
    description: "Chance, likelihood, and simple probability language",
    sections: [
      {
        title: "What is Probability?",
        content:
          "Probability is about chance — how likely something is to happen. We use words like: Certain (will definitely happen — the sun will rise), Impossible (will never happen — a pig flying), Likely (probably will happen), and Unlikely (probably won't happen).",
      },
      {
        title: "Using Probability Words",
        content:
          "When you roll a dice, is it certain you'll get a number? Yes — it will always be 1, 2, 3, 4, 5, or 6. Is it certain you'll get a 7? No — that's impossible. Is getting a 3 likely or unlikely? There are 6 possible numbers, so it's unlikely (only 1 out of 6).",
        examples: [
          { problem: "You flip a coin. How likely is heads?", solution: "It's equally likely as tails — 1 out of 2 chances." },
          { problem: "You pick a card from a regular deck. How likely is a red card?", solution: "Half the cards are red, so it's likely (26 out of 52)." },
        ],
      },
      {
        title: "Simple Experiments",
        content:
          "Try this: Put 3 red buttons and 1 blue button in a bag. Without looking, pick one. What colour are you most likely to get? Red, because there are more red buttons! Probability helps us make smart guesses.",
      },
    ],
    tips: [
      "Use words: certain, likely, unlikely, impossible to describe chance",
      "The more chances something has, the more likely it is",
      "Try experiments with coins, dice, or coloured buttons",
    ],
    commonMistakes: [
      { mistake: "Thinking unlikely means impossible", correction: "Unlikely means it could still happen, just not very often. Impossible means it can NEVER happen." },
      { mistake: "Not counting all possible outcomes", correction: "Always count every possible result first, then count how many match what you want." },
    ],
  },
  {
    id: "probability-gr4-6",
    topic: "Probability",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "Dices",
    description: "Probability as fractions, tree diagrams, and data",
    sections: [
      {
        title: "Probability as a Fraction",
        content:
          "Probability can be written as a fraction: number of favourable outcomes ÷ total number of possible outcomes. For rolling a 4 on a dice: favourable = 1 (only one 4), total = 6 (1,2,3,4,5,6). Probability = 1/6.",
        examples: [
          { problem: "A bag has 3 red and 5 blue marbles. P(red)?", solution: "Total = 8. Red = 3. P(red) = 3/8" },
          { problem: "What is P(even) on a dice?", solution: "Even numbers: 2,4,6 = 3. Total = 6. P(even) = 3/6 = 1/2" },
          { problem: "A spinner has 4 equal colours. P(blue)?", solution: "Blue = 1 section. Total = 4. P(blue) = 1/4" },
        ],
      },
      {
        title: "Tree Diagrams",
        content:
          "A tree diagram shows all possible outcomes of two or more events. For flipping two coins: first branch Heads or Tails, second branch Heads or Tails for each. Outcomes: HH, HT, TH, TT. We can count probabilities from the tree.",
      },
      {
        title: "Experimental vs Theoretical Probability",
        content:
          "Theoretical probability is what should happen (P(heads) = 1/2). Experimental probability is what actually happens when you try it. If you flip a coin 100 times, you might get 48 heads. The more times you try, the closer the results get to the theory.",
      },
    ],
    tips: [
      "Write probability as a fraction and simplify it",
      "Tree diagrams help organise multi-step problems",
      "More trials = more accurate experimental probability",
    ],
    commonMistakes: [
      { mistake: "Writing probability as a number greater than 1", correction: "Probability is always between 0 (impossible) and 1 (certain)." },
      { mistake: "Counting outcomes incorrectly in tree diagrams", correction: "Multiply the number of branches: 2 coins × 2 = 4 outcomes. 3 coins = 2×2×2 = 8." },
    ],
  },

  // ========================
  // CALCULUS (simplified intro)
  // ========================
  {
    id: "calculus-gr1-3",
    topic: "Calculus",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "TrendingUp",
    description: "Understanding change and growth",
    sections: [
      {
        title: "What is Calculus?",
        content:
          "Calculus is the maths of change — how things grow, move, and change over time. Even in Grade 1, you already do calculus thinking! When you count how fast your plant grows each week, that's calculus.",
      },
      {
        title: "Things That Change",
        content:
          "Many things change: your height gets taller, a candle gets shorter, water heats up. We can ask: how much did it change? Did it change quickly or slowly? A plant that grows 1 cm per week grows 'slowly'. A balloon that pops changes 'quickly'!",
        examples: [
          { problem: "A plant is 5 cm tall on Monday and 8 cm tall on Friday. How much did it grow?", solution: "Change = 8 − 5 = 3 cm in 4 days" },
          { problem: "You have 10 sweets and eat 3. How many left?", solution: "Change = −3 (decrease). Left = 10 − 3 = 7" },
        ],
      },
      {
        title: "Growing Patterns and Change",
        content:
          "Growing patterns show change! In the pattern 2, 4, 6, 8..., the numbers change by +2 each time. That's the 'rate of change' — how fast the pattern grows. Each step adds 2.",
      },
    ],
    tips: [
      "Think of calculus as 'the maths of how things change'",
      "Look for things that grow, shrink, speed up, or slow down",
      "Change = new amount − old amount",
    ],
    commonMistakes: [
      { mistake: "Thinking change is always an increase", correction: "Change can be negative too. A decrease is still a change (just negative)." },
      { mistake: "Confusing the amount with the rate of change", correction: "The amount is how many. The rate is how fast it changes (e.g., 2 per day)." },
    ],
  },
  {
    id: "calculus-gr4-6",
    topic: "Calculus",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "TrendingUp",
    description: "Rate of change, gradient, and an introduction to limits",
    sections: [
      {
        title: "Rate of Change",
        content:
          "Rate of change tells us how fast something is changing. If a car travels 60 km in 1 hour, its speed (rate of change of distance) is 60 km/h. Rate = change in one thing ÷ change in time. A steeper graph means a faster rate of change.",
        examples: [
          { problem: "A tap fills 10 litres of water every 2 minutes. What is the rate?", solution: "Rate = 10 ÷ 2 = 5 litres per minute" },
          { problem: "Temperature rises from 20°C to 30°C in 2 hours. Rate?", solution: "Change = 10°C. Rate = 10 ÷ 2 = 5°C per hour" },
        ],
      },
      {
        title: "Gradient (Steepness)",
        content:
          "The gradient of a line tells us how steep it is. Gradient = rise ÷ run (how much it goes up divided by how much it goes across). A flat line has gradient 0. A line going up steeply has a large positive gradient. A line going down has a negative gradient.",
      },
      {
        title: "Introduction to Limits",
        content:
          "A limit is about 'what happens when we get closer and closer'. Walk halfway to a wall, then halfway again, then again — you get closer but never quite touch it. The limit of your distance to the wall is 0. Limits help us understand patterns that approach a number.",
      },
    ],
    tips: [
      "Rate = change ÷ time. Find the change first, then divide.",
      "Gradient = rise ÷ run. Count squares on a graph: up then across.",
      "A steeper line = a bigger gradient = faster change.",
    ],
    commonMistakes: [
      { mistake: "Forgetting to divide by time for rate", correction: "Rate isn't just the change — it's change per unit time. Always divide by time." },
      { mistake: "Mixing up rise and run", correction: "Rise is vertical (up/down). Run is horizontal (left/right). Rise over run." },
    ],
  },

  // ========================
  // FRACTIONS
  // ========================
  {
    id: "fractions-gr1-3",
    topic: "Fractions",
    gradeBand: "Grade 1–3",
    grades: "Grade 1, 2, 3",
    icon: "PieChart",
    description: "Equal parts, halves, quarters, and shading fractions",
    sections: [
      {
        title: "What is a Fraction?",
        content:
          "A fraction is a part of a whole. If you cut a pizza into 4 equal slices and take 1 slice, you have 1/4 (one quarter) of the pizza. The top number (numerator) tells how many parts you have. The bottom number (denominator) tells how many equal parts make the whole.",
      },
      {
        title: "Halves and Quarters",
        content:
          "One half (1/2) is one of two equal parts. One quarter (1/4) is one of four equal parts. Two quarters (2/4) make one half (1/2). Three quarters (3/4) is more than half but less than the whole.",
        examples: [
          { problem: "Shade 1/2 of a shape split into 2 equal parts", solution: "Colour 1 out of 2 parts" },
          { problem: "If 4 friends share a pizza equally, what fraction does each get?", solution: "Each gets 1/4 (one quarter)" },
          { problem: "Which is bigger: 1/2 or 1/4?", solution: "1/2 is bigger. The bigger the bottom number, the smaller the pieces." },
        ],
      },
      {
        title: "Equal Parts",
        content:
          "Fractions only work if the parts are equal. If you cut a sandwich into two pieces of different sizes, you can't call one piece 1/2. Always make sure the whole is divided into equal parts before talking about fractions.",
      },
    ],
    tips: [
      "Think of sharing food — pizza, cake, or sandwiches",
      "The denominator (bottom) tells how many pieces — it's the 'down' number",
      "The larger the denominator, the smaller each piece",
    ],
    commonMistakes: [
      { mistake: "Thinking 1/4 is bigger than 1/2", correction: "1/4 means one of 4 pieces. 1/2 means one of 2 pieces. Bigger pieces = bigger fraction." },
      { mistake: "Drawing unequal parts and calling them fractions", correction: "All parts MUST be the same size. Cut carefully!" },
    ],
  },
  {
    id: "fractions-gr4-6",
    topic: "Fractions",
    gradeBand: "Grade 4–6",
    grades: "Grade 4, 5, 6",
    icon: "PieChart",
    description: "Equivalent fractions, operations, decimals, and percentages",
    sections: [
      {
        title: "Equivalent Fractions",
        content:
          "Equivalent fractions are different fractions that represent the same amount. 1/2 = 2/4 = 3/6 = 4/8. To find an equivalent fraction, multiply or divide both numerator and denominator by the same number. Simplify by dividing both by the largest common factor.",
        examples: [
          { problem: "Find a fraction equivalent to 2/3 with denominator 12", solution: "3 × 4 = 12, so 2 × 4 = 8. 2/3 = 8/12" },
          { problem: "Simplify 8/12", solution: "Divide both by 4: 8÷4=2, 12÷4=3. 8/12 = 2/3" },
          { problem: "Which is bigger: 3/4 or 5/8?", solution: "3/4 = 6/8. 6/8 > 5/8, so 3/4 is bigger." },
        ],
      },
      {
        title: "Adding and Subtracting Fractions",
        content:
          "To add or subtract fractions with the same denominator, just add or subtract the numerators. The denominator stays the same. 3/7 + 2/7 = 5/7. If denominators are different, find a common denominator first.",
        examples: [
          { problem: "1/4 + 2/4 = ?", solution: "1 + 2 = 3, so 3/4" },
          { problem: "1/2 + 1/4 = ?", solution: "1/2 = 2/4. 2/4 + 1/4 = 3/4" },
          { problem: "5/6 − 1/6 = ?", solution: "5 − 1 = 4, so 4/6 = 2/3" },
        ],
      },
      {
        title: "Fractions, Decimals and Percentages",
        content:
          "Fractions, decimals, and percentages are different ways to show the same thing. 1/2 = 0.5 = 50%. To convert a fraction to a decimal, divide numerator by denominator. To convert a decimal to a percentage, multiply by 100.",
      },
    ],
    tips: [
      "To compare fractions, convert them to the same denominator first",
      "Always simplify your final answer",
      "Remember: percent means 'out of 100' — so 50% = 50/100 = 1/2",
    ],
    commonMistakes: [
      { mistake: "Adding denominators (e.g., 1/3 + 1/3 = 2/6)", correction: "NEVER add denominators. Only add numerators: 1/3 + 1/3 = 2/3." },
      { mistake: "Forgetting to simplify the answer", correction: "Always check: can both numbers be divided by the same number? 4/8 = 1/2." },
    ],
  },
];

export const topics = [...new Set(studyGuides.map((g) => g.topic))];
export const gradeBands = [...new Set(studyGuides.map((g) => g.gradeBand))];

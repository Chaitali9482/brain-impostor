import { Question } from '@brain-impostor/types';

export const questions: Question[] = [
  {
    "id": 1,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Photosynthesis occurs in the chloroplast.",
      "Humans have 206 bones in their body.",
      "The Earth has one natural satellite.",
      "The heart is located on the right side of the chest."
    ],
    "answerIndex": 3,
    "explanation": "The human heart is located slightly to the LEFT of the chest center, not the right."
  },
  {
    "id": 2,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Newton's first law is called the law of inertia.",
      "The atomic number of carbon is 6.",
      "Mitosis results in two genetically identical daughter cells.",
      "The speed of light in vacuum is approximately 2x10^8 m/s."
    ],
    "answerIndex": 3,
    "explanation": "The speed of light in vacuum is approximately 3x10^8 m/s (299,792,458 m/s), not 2x10^8."
  },
  {
    "id": 3,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "DNA replication occurs during the S phase of the cell cycle.",
      "The enzyme responsible for DNA replication is DNA polymerase.",
      "Adenine pairs with Thymine in DNA via three hydrogen bonds.",
      "Guanine pairs with Cytosine in DNA."
    ],
    "answerIndex": 2,
    "explanation": "Adenine pairs with Thymine via TWO hydrogen bonds, not three. Guanine-Cytosine pairs have three hydrogen bonds."
  },
  {
    "id": 11,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "The sum of angles in a triangle is 180 degrees.",
      "A square has 4 equal sides.",
      "Pi is approximately 3.14.",
      "The square root of 144 is 14."
    ],
    "answerIndex": 3,
    "explanation": "The square root of 144 is 12, not 14. 12 x 12 = 144."
  },
  {
    "id": 12,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "A prime number has exactly two factors.",
      "The LCM of 4 and 6 is 12.",
      "The probability of an impossible event is 0.",
      "The HCF of 18 and 24 is 8."
    ],
    "answerIndex": 3,
    "explanation": "The HCF of 18 and 24 is 6, not 8. Factors of 18: 1,2,3,6,9,18. Factors of 24: 1,2,3,4,6,8,12,24. Highest common factor = 6."
  },
  {
    "id": 13,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "The derivative of sin(x) is cos(x).",
      "log(ab) = log(a) + log(b).",
      "The sum of first n natural numbers is n(n+1)/2.",
      "The derivative of ln(x) is 1/x squared."
    ],
    "answerIndex": 3,
    "explanation": "The derivative of ln(x) is 1/x, not 1/x squared. d/dx[ln(x)] = 1/x."
  },
  {
    "id": 21,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The capital of India is New Delhi.",
      "The Nile is the longest river in the world.",
      "The Great Wall of China is in China.",
      "Mount Everest is located in the Alps."
    ],
    "answerIndex": 3,
    "explanation": "Mount Everest is in the Himalayas on the Nepal-Tibet border, not the Alps. The Alps are a mountain range in Europe."
  },
  {
    "id": 22,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "World War II ended in 1945.",
      "The United Nations was founded in 1945.",
      "India gained independence in 1947.",
      "The first Moon landing was in 1971."
    ],
    "answerIndex": 3,
    "explanation": "The first Moon landing was on July 20, 1969 (Apollo 11), not 1971."
  },
  {
    "id": 23,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The Magna Carta was signed in 1215.",
      "Nelson Mandela served as South Africa's president from 1994 to 1999.",
      "The Berlin Wall fell in November 1989.",
      "The French Revolution began with the storming of the Bastille on July 4."
    ],
    "answerIndex": 3,
    "explanation": "The Bastille was stormed on July 14, 1789, not July 4. July 14 is celebrated as Bastille Day in France."
  },
  {
    "id": 31,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Oranges are a good source of Vitamin C.",
      "Milk contains calcium.",
      "Bananas are a good source of potassium.",
      "Carrots are rich in Vitamin B12."
    ],
    "answerIndex": 3,
    "explanation": "Carrots are rich in beta-carotene (Vitamin A precursor), not Vitamin B12. B12 is found primarily in animal products."
  },
  {
    "id": 32,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Yeast is used in bread making for fermentation.",
      "Olive oil is extracted from olives.",
      "Vinegar is produced through fermentation of alcohol.",
      "Butter is made by churning cream and has about 60% fat content."
    ],
    "answerIndex": 3,
    "explanation": "Butter typically contains around 80% fat, not 60%. The remaining 20% is water and milk solids."
  },
  {
    "id": 33,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "The Maillard reaction is responsible for browning of bread crust.",
      "Capsaicin in chillies binds to TRPV1 receptors causing heat sensation.",
      "Umami is the fifth basic taste triggered by glutamates.",
      "Dark chocolate has a lower cocoa content than milk chocolate."
    ],
    "answerIndex": 3,
    "explanation": "Dark chocolate has a HIGHER cocoa content (50-90%) than milk chocolate (10-50%). That higher cocoa content makes it darker and more bitter."
  },
  {
    "id": 4,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Venus is the hottest planet in the solar system.",
      "Jupiter is the largest planet.",
      "The Sun is a star.",
      "Mars is the closest planet to the Sun."
    ],
    "answerIndex": 3,
    "explanation": "Mercury is the closest planet to the Sun, not Mars."
  },
  {
    "id": 5,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Trees produce oxygen.",
      "Sound cannot travel through a vacuum.",
      "Light travels faster than sound.",
      "Humans breathe in carbon dioxide to survive."
    ],
    "answerIndex": 3,
    "explanation": "Humans breathe in oxygen to survive and exhale carbon dioxide."
  },
  {
    "id": 6,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "The boiling point of water is 100\u00b0C.",
      "Ice is lighter than water.",
      "Gravity pulls objects toward the Earth.",
      "The moon produces its own light."
    ],
    "answerIndex": 3,
    "explanation": "The moon reflects light from the sun; it does not produce its own light."
  },
  {
    "id": 7,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Insects have six legs.",
      "Spiders are insects.",
      "Fish breathe through gills.",
      "Mammals give birth to live young."
    ],
    "answerIndex": 1,
    "explanation": "Spiders are arachnids, not insects. Insects have six legs, while spiders have eight."
  },
  {
    "id": 8,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "A skeleton supports the body.",
      "The brain controls the body.",
      "Lungs help us breathe.",
      "The liver is responsible for pumping blood."
    ],
    "answerIndex": 3,
    "explanation": "The heart pumps blood, not the liver. The liver filters blood and produces bile."
  },
  {
    "id": 9,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "The ocean is made of saltwater.",
      "Clouds are made of water droplets.",
      "Rain is part of the water cycle.",
      "Freshwater is found in the ocean."
    ],
    "answerIndex": 3,
    "explanation": "Oceans consist of saltwater. Freshwater is found in lakes, rivers, and glaciers."
  },
  {
    "id": 10,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Diamonds are the hardest natural substance.",
      "Gold is a metal.",
      "Iron can rust.",
      "Aluminum is magnetic under normal conditions."
    ],
    "answerIndex": 3,
    "explanation": "Pure aluminum is not magnetic under normal conditions. Iron, nickel, and cobalt are magnetic metals."
  },
  {
    "id": 14,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "Plants need sunlight to grow.",
      "Oil is a renewable energy source.",
      "Wind can be used to generate electricity.",
      "Coal is a fossil fuel."
    ],
    "answerIndex": 1,
    "explanation": "Oil is a non-renewable fossil fuel, not a renewable source."
  },
  {
    "id": 15,
    "category": "Science",
    "difficulty": "easy",
    "statements": [
      "A caterpillar turns into a butterfly.",
      "Tadpoles grow into frogs.",
      "Birds lay eggs.",
      "Whale sharks are mammals."
    ],
    "answerIndex": 3,
    "explanation": "Whale sharks are fish (the largest sharks), not mammals. Whales and dolphins are mammals."
  },
  {
    "id": 204,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Protons have a positive charge.",
      "Electrons have a negative charge.",
      "Neutrons have a neutral charge.",
      "The nucleus of an atom contains only protons."
    ],
    "answerIndex": 3,
    "explanation": "The nucleus contains both protons and neutrons (except for hydrogen-1)."
  },
  {
    "id": 205,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "The velocity of an object includes its speed and direction.",
      "Force equals mass times acceleration.",
      "Energy cannot be created or destroyed.",
      "Friction only occurs between two solids."
    ],
    "answerIndex": 3,
    "explanation": "Friction (fluid friction or drag) also occurs between solids and liquids/gases."
  },
  {
    "id": 206,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Red blood cells carry oxygen.",
      "White blood cells fight infections.",
      "Platelets help in blood clotting.",
      "Plasma is the solid part of the blood."
    ],
    "answerIndex": 3,
    "explanation": "Plasma is the liquid component of blood, making up about 55% of its volume."
  },
  {
    "id": 207,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Sound waves are longitudinal waves.",
      "Light waves are transverse waves.",
      "Electromagnetic waves require a medium to travel.",
      "The frequency of a wave determines its pitch."
    ],
    "answerIndex": 2,
    "explanation": "Electromagnetic waves (like light) can travel through a vacuum and do not require a medium."
  },
  {
    "id": 208,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "The pH of pure water is 7.",
      "Acids have a pH less than 7.",
      "Bases have a pH greater than 7.",
      "Ammonia is a strong acid."
    ],
    "answerIndex": 3,
    "explanation": "Ammonia (NH3) is a weak base, not an acid."
  },
  {
    "id": 209,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Refraction is the bending of light as it passes through different media.",
      "Reflection is the bouncing of light off a surface.",
      "Dispersion is the separation of white light into its component colors.",
      "Convex lenses always form virtual images."
    ],
    "answerIndex": 3,
    "explanation": "Convex lenses can form both real and virtual images depending on the object's position."
  },
  {
    "id": 210,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Mitochondria are the powerhouse of the cell.",
      "Ribosomes are responsible for protein synthesis.",
      "The cell wall is found in animal cells.",
      "The cell membrane controls what enters and exits the cell."
    ],
    "answerIndex": 2,
    "explanation": "Cell walls are found in plant cells, fungi, and some bacteria, but NOT in animal cells."
  },
  {
    "id": 211,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "Insulin is a hormone produced by the pancreas.",
      "Adrenaline is produced during stress.",
      "Thyroxine controls metabolism.",
      "Testosterone is the primary female sex hormone."
    ],
    "answerIndex": 3,
    "explanation": "Estrogen and progesterone are primary female sex hormones. Testosterone is the primary male sex hormone."
  },
  {
    "id": 212,
    "category": "Science",
    "difficulty": "medium",
    "statements": [
      "The troposphere is the lowest layer of the atmosphere.",
      "The ozone layer protects us from UV radiation.",
      "Nitrogen makes up 21% of the Earth's atmosphere.",
      "Global warming is caused by greenhouse gases."
    ],
    "answerIndex": 2,
    "explanation": "Nitrogen makes up approximately 78% of the atmosphere. Oxygen makes up about 21%."
  },
  {
    "id": 404,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Heisenberg's uncertainty principle states we cannot know position and momentum simultaneously.",
      "The Schrodinger equation describes the wave function of a quantum system.",
      "Quantum entanglement allows for faster-than-light communication of information.",
      "The Pauli exclusion principle states two fermions cannot occupy the same state."
    ],
    "answerIndex": 2,
    "explanation": "Entanglement correlates states, but it cannot be used to transmit classical information faster than light (no-communication theorem)."
  },
  {
    "id": 405,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "The Krebs cycle occurs in the mitochondrial matrix.",
      "Glycolysis occurs in the cytoplasm and requires oxygen.",
      "The electron transport chain produces the most ATP.",
      "Fermentation occurs under anaerobic conditions."
    ],
    "answerIndex": 1,
    "explanation": "Glycolysis is an anaerobic process; it does not require oxygen to function."
  },
  {
    "id": 406,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Enzymes lower the activation energy of a reaction.",
      "Competitive inhibitors bind to the active site of an enzyme.",
      "Allosteric inhibitors bind to a site other than the active site.",
      "Enzymes are consumed during the chemical reactions they catalyze."
    ],
    "answerIndex": 3,
    "explanation": "Enzymes are catalysts; they are not consumed or changed during the reaction."
  },
  {
    "id": 407,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Transcription occurs in the nucleus of eukaryotic cells.",
      "Translation occurs at the ribosomes.",
      "Introns are the coding regions of a gene.",
      "Exons are joined together to form the final mRNA."
    ],
    "answerIndex": 2,
    "explanation": "EXONS are coding regions; INTRONS are non-coding regions that are spliced out during processing."
  },
  {
    "id": 408,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Special relativity states the speed of light is constant for all observers.",
      "General relativity describes gravity as the curvature of spacetime.",
      "Time dilation occurs as an object approaches the speed of light.",
      "Mass increases to infinity as an object approaches the speed of light."
    ],
    "answerIndex": 3,
    "explanation": "In modern physics, 'invariant mass' is constant. Relativistic mass is an older concept; it's the total energy/c^2 that increases."
  },
  {
    "id": 409,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Ohm's Law states V = IR.",
      "Kirchhoff's Current Law states the sum of currents at a junction is zero.",
      "Lenz's Law describes the direction of an induced current.",
      "The total resistance in a parallel circuit is the sum of individual resistances."
    ],
    "answerIndex": 3,
    "explanation": "In parallel, the reciprocal of total resistance is the sum of the reciprocals of individual resistances (1/Rt = 1/R1 + 1/R2...)."
  },
  {
    "id": 410,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "A buffer solution resists changes in pH.",
      "The equivalence point in a titration is where moles of acid equal moles of base.",
      "Entropy is a measure of the disorder of a system.",
      "Exothermic reactions absorb heat from the surroundings."
    ],
    "answerIndex": 3,
    "explanation": "EXOthermic reactions RELEASE heat. ENDOthermic reactions absorb heat."
  },
  {
    "id": 411,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "Apoptosis is programmed cell death.",
      "Necrosis is accidental cell death due to injury.",
      "Stem cells can differentiate into various cell types.",
      "Meiosis results in two diploid daughter cells."
    ],
    "answerIndex": 3,
    "explanation": "Meiosis results in FOUR HAPLOID daughter cells (gametes). Mitosis results in two diploid cells."
  },
  {
    "id": 412,
    "category": "Science",
    "difficulty": "hard",
    "statements": [
      "The primary structure of a protein is the sequence of amino acids.",
      "Secondary structure includes alpha helices and beta sheets.",
      "Tertiary structure is the 3D folding of a single polypeptide.",
      "Quaternary structure is the sequence of nucleotides in DNA."
    ],
    "answerIndex": 3,
    "explanation": "Quaternary structure refers to the arrangement of MULTIPLE polypeptide subunits in a protein complex."
  },
  {
    "id": 16,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "A triangle has 3 sides.",
      "A pentagon has 5 sides.",
      "A hexagon has 6 sides.",
      "An octagon has 10 sides."
    ],
    "answerIndex": 3,
    "explanation": "An octagon has 8 sides, not 10. A decagon has 10 sides."
  },
  {
    "id": 17,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "10 + 20 = 30",
      "50 - 25 = 25",
      "12 x 3 = 36",
      "100 / 4 = 20"
    ],
    "answerIndex": 3,
    "explanation": "100 divided by 4 is 25, not 20."
  },
  {
    "id": 18,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "A right angle is 90 degrees.",
      "An acute angle is less than 90 degrees.",
      "An obtuse angle is between 90 and 180 degrees.",
      "A straight line is 360 degrees."
    ],
    "answerIndex": 3,
    "explanation": "A straight line (angle) is 180 degrees. A full circle is 360 degrees."
  },
  {
    "id": 19,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "The diameter is twice the radius.",
      "The perimeter of a square is 4 times the side.",
      "Area of a rectangle is length times width.",
      "The circumference of a circle is Pi times radius."
    ],
    "answerIndex": 3,
    "explanation": "Circumference is 2 * Pi * radius (or Pi * diameter)."
  },
  {
    "id": 20,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "2 is the only even prime number.",
      "1 is a prime number.",
      "Prime numbers are only divisible by 1 and themselves.",
      "9 is a composite number."
    ],
    "answerIndex": 1,
    "explanation": "1 is neither prime nor composite. Prime numbers must be greater than 1."
  },
  {
    "id": 24,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "1/2 is equal to 0.5",
      "1/4 is equal to 0.25",
      "3/4 is equal to 0.75",
      "1/5 is equal to 0.15"
    ],
    "answerIndex": 3,
    "explanation": "1/5 is equal to 0.2, not 0.15."
  },
  {
    "id": 25,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "A cube has 6 faces.",
      "A sphere has no vertices.",
      "A cylinder has two circular bases.",
      "A pyramid always has a square base."
    ],
    "answerIndex": 3,
    "explanation": "A pyramid can have any polygon as its base, such as a triangle (tetrahedron)."
  },
  {
    "id": 26,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "The median is the middle value in a set.",
      "The mode is the most frequent value.",
      "The mean is the average value.",
      "The range is the sum of all values in a set."
    ],
    "answerIndex": 3,
    "explanation": "The range is the difference between the highest and lowest values, not the sum."
  },
  {
    "id": 27,
    "category": "Maths",
    "difficulty": "easy",
    "statements": [
      "-5 is greater than -10",
      "0 is a whole number.",
      "Natural numbers start from 0.",
      "Integers include negative numbers."
    ],
    "answerIndex": 2,
    "explanation": "Natural numbers typically start from 1. Whole numbers start from 0."
  },
  {
    "id": 214,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "The sum of angles in a quadrilateral is 360 degrees.",
      "A rhombus has 4 equal sides.",
      "Opposite angles in a parallelogram are equal.",
      "A trapezoid always has two pairs of parallel sides."
    ],
    "answerIndex": 3,
    "explanation": "A trapezoid (US) or trapezium (UK) has at least ONE pair of parallel sides, not necessarily two."
  },
  {
    "id": 215,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "(a + b)^2 = a^2 + 2ab + b^2",
      "a^2 - b^2 = (a - b)(a + b)",
      "(a - b)^2 = a^2 - 2ab + b^2",
      "(a + b)(a - b) = a^2 + b^2"
    ],
    "answerIndex": 3,
    "explanation": "(a + b)(a - b) equals a^2 - b^2, not a^2 + b^2."
  },
  {
    "id": 216,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "The slope of a horizontal line is 0.",
      "The slope of a vertical line is undefined.",
      "Parallel lines have the same slope.",
      "The product of slopes of perpendicular lines is 1."
    ],
    "answerIndex": 3,
    "explanation": "The product of the slopes of two perpendicular lines is -1 (assuming neither is vertical)."
  },
  {
    "id": 217,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "tan(x) = sin(x) / cos(x)",
      "sin^2(x) + cos^2(x) = 1",
      "sec(x) = 1 / cos(x)",
      "cot(x) = 1 / sin(x)"
    ],
    "answerIndex": 3,
    "explanation": "cot(x) is 1/tan(x) or cos(x)/sin(x). 1/sin(x) is cosec(x)."
  },
  {
    "id": 218,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "The discriminant of ax^2 + bx + c is b^2 - 4ac.",
      "If the discriminant is 0, there is one real root.",
      "If the discriminant is positive, there are two real roots.",
      "If the discriminant is negative, there are two real roots."
    ],
    "answerIndex": 3,
    "explanation": "If the discriminant is negative, there are two complex (imaginary) roots, no real roots."
  },
  {
    "id": 219,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "The volume of a cylinder is Pi * r^2 * h.",
      "The volume of a cone is 1/3 * Pi * r^2 * h.",
      "The surface area of a sphere is 4 * Pi * r^2.",
      "The volume of a sphere is 4/3 * Pi * r^2."
    ],
    "answerIndex": 3,
    "explanation": "The volume of a sphere is 4/3 * Pi * r^3, not r^2."
  },
  {
    "id": 220,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "The factorial of 5 is 120.",
      "The number of ways to arrange n items is n!.",
      "nCr = n! / (r!(n-r)!)",
      "nPr = n! / r!"
    ],
    "answerIndex": 3,
    "explanation": "nPr (permutations) is n! / (n-r)!. n! / r! is not the correct formula."
  },
  {
    "id": 221,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "A linear equation has a degree of 1.",
      "A quadratic equation has a degree of 2.",
      "A cubic equation has a degree of 3.",
      "A polynomial of degree n always has exactly n real roots."
    ],
    "answerIndex": 3,
    "explanation": "A polynomial of degree n has exactly n COMPLEX roots (Fundamental Theorem of Algebra), but not necessarily n real roots."
  },
  {
    "id": 222,
    "category": "Maths",
    "difficulty": "medium",
    "statements": [
      "In a right triangle, a^2 + b^2 = c^2.",
      "The sine of 30 degrees is 0.5",
      "The cosine of 60 degrees is 0.5",
      "The tangent of 45 degrees is 0.5"
    ],
    "answerIndex": 3,
    "explanation": "The tangent of 45 degrees is 1, not 0.5."
  },
  {
    "id": 414,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "The limit of (sin x)/x as x approaches 0 is 1.",
      "The derivative of e^x is e^x.",
      "The integral of 1/x is ln|x| + C.",
      "The derivative of tan(x) is sec(x)."
    ],
    "answerIndex": 3,
    "explanation": "The derivative of tan(x) is sec^2(x), not just sec(x)."
  },
  {
    "id": 415,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "A matrix is invertible if its determinant is non-zero.",
      "The product of a matrix and its inverse is the identity matrix.",
      "The transpose of a product $(AB)^T = A^T B^T$.",
      "The trace of a matrix is the sum of its diagonal elements."
    ],
    "answerIndex": 2,
    "explanation": "The transpose of a product follows the order $(AB)^T = B^T A^T$."
  },
  {
    "id": 416,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "The series 1/n diverges (harmonic series).",
      "The series 1/n^2 converges.",
      "A geometric series converges if |r| < 1.",
      "The Taylor series for e^x is sum of x^n / n."
    ],
    "answerIndex": 3,
    "explanation": "The Taylor series for e^x is the sum of x^n / n!, not just n."
  },
  {
    "id": 417,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "Euler's identity is e^(i*pi) + 1 = 0.",
      "The complex conjugate of a+bi is a-bi.",
      "i squared is equal to -1.",
      "The magnitude of 3+4i is 25."
    ],
    "answerIndex": 3,
    "explanation": "The magnitude (absolute value) of 3+4i is sqrt(3^2 + 4^2) = sqrt(25) = 5, not 25."
  },
  {
    "id": 418,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "Integration by parts is based on the product rule.",
      "The Chain Rule is used for differentiating composite functions.",
      "L'Hopital's Rule is used for indeterminate limits.",
      "The Power Rule for integration of x^n is n*x^(n-1)."
    ],
    "answerIndex": 3,
    "explanation": "n*x^(n-1) is the Power Rule for DIFFERENTIATION. Integration of x^n is (x^(n+1))/(n+1) + C."
  },
  {
    "id": 419,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "A vector is defined by magnitude and direction.",
      "The dot product of two perpendicular vectors is 0.",
      "The cross product of two parallel vectors is 0.",
      "The dot product of two vectors is a vector."
    ],
    "answerIndex": 3,
    "explanation": "The dot product (scalar product) of two vectors results in a scalar, not a vector."
  },
  {
    "id": 420,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "A function is continuous if the limit equals the value.",
      "The Mean Value Theorem requires the function to be differentiable.",
      "A local maximum occurs where f'(x) = 0 and f''(x) > 0.",
      "Rolle's Theorem is a special case of the Mean Value Theorem."
    ],
    "answerIndex": 2,
    "explanation": "A local maximum occurs where f'(x)=0 and f''(x) < 0 (concave down). f''(x) > 0 indicates a local minimum."
  },
  {
    "id": 421,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "The order of a differential equation is the highest derivative.",
      "A linear differential equation only has powers of y of 1.",
      "Integrating factor is used for first-order linear ODEs.",
      "The solution to dy/dx = y is y = ce^(-x)."
    ],
    "answerIndex": 3,
    "explanation": "The solution to dy/dx = y is y = ce^x, not e^(-x)."
  },
  {
    "id": 422,
    "category": "Maths",
    "difficulty": "hard",
    "statements": [
      "The set of real numbers is uncountable.",
      "The set of rational numbers is countable.",
      "The power set of a set A has 2^n elements.",
      "Prime numbers are evenly distributed among all integers."
    ],
    "answerIndex": 3,
    "explanation": "Prime numbers are not evenly distributed; they become less frequent as numbers get larger (Prime Number Theorem)."
  },
  {
    "id": 28,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The currency of the USA is the Dollar.",
      "The capital of France is Paris.",
      "The Statue of Liberty is in New York.",
      "The Eiffel Tower is in London."
    ],
    "answerIndex": 3,
    "explanation": "The Eiffel Tower is in Paris, France, not London."
  },
  {
    "id": 29,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The sun rises in the east.",
      "A year has 365 days (non-leap).",
      "The Earth is the third planet from the sun.",
      "A leap year has 364 days."
    ],
    "answerIndex": 3,
    "explanation": "A leap year has 366 days, not 364. An extra day is added to February."
  },
  {
    "id": 30,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The largest ocean is the Pacific.",
      "Mount Everest is the highest peak above sea level.",
      "The Amazon is a large rainforest.",
      "The Sahara is a cold desert in Antarctica."
    ],
    "answerIndex": 3,
    "explanation": "The Sahara is a hot desert in Africa. Antarctica is a cold desert."
  },
  {
    "id": 34,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "Barack Obama was a US President.",
      "Nelson Mandela was from South Africa.",
      "Queen Elizabeth II was the UK monarch.",
      "Donald Trump is the current King of England."
    ],
    "answerIndex": 3,
    "explanation": "Donald Trump was a US President, not the King of England. King Charles III is the current UK monarch."
  },
  {
    "id": 35,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The Olympic Games are held every 4 years.",
      "Basketball is played with a ball.",
      "Soccer is also known as football in many countries.",
      "A cricket match only lasts for 10 minutes."
    ],
    "answerIndex": 3,
    "explanation": "Cricket matches last much longer, from a few hours (T20) to five days (Test)."
  },
  {
    "id": 36,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "There are 7 continents on Earth.",
      "Asia is the largest continent.",
      "Australia is both a country and a continent.",
      "The North Pole is located in Antarctica."
    ],
    "answerIndex": 3,
    "explanation": "The North Pole is in the Arctic Ocean. The South Pole is in Antarctica."
  },
  {
    "id": 37,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "Leonardo da Vinci painted the Mona Lisa.",
      "William Shakespeare wrote Romeo and Juliet.",
      "J.K. Rowling wrote Harry Potter.",
      "Albert Einstein discovered the Americas."
    ],
    "answerIndex": 3,
    "explanation": "Christopher Columbus is credited with discovering the Americas for Europe. Einstein was a physicist."
  },
  {
    "id": 38,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The Human body has two lungs.",
      "The Capital of Japan is Tokyo.",
      "Water freezes at 0 degrees Celsius.",
      "The Great Wall of China is visible from Mars with the naked eye."
    ],
    "answerIndex": 3,
    "explanation": "The Great Wall is barely visible from low Earth orbit and certainly not from Mars with the naked eye."
  },
  {
    "id": 39,
    "category": "GK",
    "difficulty": "easy",
    "statements": [
      "The Pacific Ocean is on the west coast of the USA.",
      "Canada is north of the USA.",
      "Mexico is south of the USA.",
      "Brazil is a country in Europe."
    ],
    "answerIndex": 3,
    "explanation": "Brazil is the largest country in South America, not Europe."
  },
  {
    "id": 224,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Magna Carta was signed in 1215.",
      "The Industrial Revolution began in Great Britain.",
      "The Russian Revolution occurred in 1917.",
      "The American Civil War was fought in the 1920s."
    ],
    "answerIndex": 3,
    "explanation": "The American Civil War was fought from 1861 to 1865."
  },
  {
    "id": 225,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Suez Canal connects the Mediterranean and Red Seas.",
      "The Panama Canal connects the Atlantic and Pacific Oceans.",
      "The Bering Strait separates Asia and North America.",
      "The Strait of Gibraltar separates Africa and South America."
    ],
    "answerIndex": 3,
    "explanation": "The Strait of Gibraltar separates Africa (Morocco) and Europe (Spain)."
  },
  {
    "id": 226,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Renaissance began in Italy.",
      "The French Revolution motto was Liberty, Equality, Fraternity.",
      "The Ottoman Empire collapsed after World War I.",
      "The Roman Empire fell in the 18th century."
    ],
    "answerIndex": 3,
    "explanation": "The Western Roman Empire fell in 476 AD (5th century). The Eastern Roman Empire (Byzantium) fell in 1453."
  },
  {
    "id": 227,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Nobel Prize was established by Alfred Nobel.",
      "The Oscars are for achievements in film.",
      "The Grammy Awards are for music.",
      "The Pulitzer Prize is for excellence in professional sports."
    ],
    "answerIndex": 3,
    "explanation": "The Pulitzer Prize is for achievements in journalism, literature, and musical composition, not sports."
  },
  {
    "id": 228,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The largest country by land area is Russia.",
      "The smallest country in the world is Vatican City.",
      "The most populous country was China (now surpassed by India).",
      "Greece is the country with the most islands in the world."
    ],
    "answerIndex": 3,
    "explanation": "Sweden has the most islands (over 200,000). Greece has about 6,000."
  },
  {
    "id": 229,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "DNA structure was discovered by Watson and Crick.",
      "Penicillin was discovered by Alexander Fleming.",
      "The telephone was patented by Alexander Graham Bell.",
      "The light bulb was invented by Nikola Tesla."
    ],
    "answerIndex": 3,
    "explanation": "Thomas Edison is most famous for perfecting the incandescent light bulb. Tesla worked on AC power."
  },
  {
    "id": 230,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Cold War was between the USA and the Soviet Union.",
      "The Berlin Wall was torn down in 1989.",
      "Apartheid was a system of segregation in South Africa.",
      "The Vietnam War ended in 1990."
    ],
    "answerIndex": 3,
    "explanation": "The Vietnam War ended in 1975 with the fall of Saigon."
  },
  {
    "id": 231,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "Giza is home to the Great Pyramids.",
      "The Parthenon is in Athens, Greece.",
      "Machu Picchu is in Peru.",
      "Petra is an ancient city in Egypt."
    ],
    "answerIndex": 3,
    "explanation": "Petra is an ancient city located in Jordan, not Egypt."
  },
  {
    "id": 232,
    "category": "GK",
    "difficulty": "medium",
    "statements": [
      "The Euro is used in many European countries.",
      "The Yen is the currency of Japan.",
      "The Yuan is the currency of China.",
      "The Peso is the currency of Russia."
    ],
    "answerIndex": 3,
    "explanation": "The Ruble is the currency of Russia. The Peso is used in countries like Mexico, Argentina, and Philippines."
  },
  {
    "id": 424,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The Treaty of Versailles formally ended World War I.",
      "The Meiji Restoration happened in Japan.",
      "The Byzantine Empire's capital was Constantinople.",
      "The Peloponnesian War was between Athens and Rome."
    ],
    "answerIndex": 3,
    "explanation": "The Peloponnesian War (431\u2013404 BC) was fought between Athens and Sparta, not Rome."
  },
  {
    "id": 425,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The deep-sea trench 'Challenger Deep' is in the Mariana Trench.",
      "The Andes is the longest continental mountain range.",
      "The Caspian Sea is the largest enclosed inland body of water.",
      "Island nations like Japan and UK have no land borders."
    ],
    "answerIndex": 3,
    "explanation": "The UK shares a land border with Ireland (Northern Ireland border)."
  },
  {
    "id": 426,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The 'Silk Road' connected China with the Mediterranean world.",
      "The Hanseatic League was a medieval commercial alliance.",
      "The Dutch East India Company was the first to issue stock.",
      "The Crusades were a series of wars between 1500 and 1700."
    ],
    "answerIndex": 3,
    "explanation": "The major Crusades took place between 1095 and 1291 (medieval period), not 1500-1700."
  },
  {
    "id": 427,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The philosopher Socrates was the teacher of Plato.",
      "Aristotle was a student of Plato and tutor to Alexander the Great.",
      "Immanuel Kant wrote the 'Critique of Pure Reason'.",
      "Friedrich Nietzsche is the author of 'The Republic'."
    ],
    "answerIndex": 3,
    "explanation": "Plato is the author of 'The Republic'. Nietzsche wrote 'Thus Spoke Zarathustra'."
  },
  {
    "id": 428,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The first artificial satellite, Sputnik 1, was launched in 1957.",
      "Yuri Gagarin was the first human in space.",
      "The Hubble Space Telescope was launched in 1990.",
      "The International Space Station began construction in the 1970s."
    ],
    "answerIndex": 3,
    "explanation": "Construction of the ISS began in 1998. The 1970s saw the launch of Skylab and Salyut stations."
  },
  {
    "id": 429,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The League of Nations was the predecessor to the UN.",
      "The Geneva Conventions govern the treatment of war victims.",
      "The IMF and World Bank were created at the Bretton Woods Conference.",
      "The European Union was founded immediately after WWI."
    ],
    "answerIndex": 3,
    "explanation": "The EU (in its earlier form as ECSC) was founded after WWII (1951), and the modern EU was established by the Maastricht Treaty in 1993."
  },
  {
    "id": 430,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The 'Communist Manifesto' was written by Marx and Engels.",
      "Adam Smith wrote 'The Wealth of Nations'.",
      "John Maynard Keynes is known for macroeconomics.",
      "Thomas Malthus argued that population grows linearly."
    ],
    "answerIndex": 3,
    "explanation": "Malthus argued that population grows GEOMETRICALLY (exponentially) while food supply grows arithmetically (linearly)."
  },
  {
    "id": 431,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "The 'Scramble for Africa' occurred in the late 19th century.",
      "The Boxer Rebellion happened in China.",
      "The Sepoy Mutiny (1857) occurred in India.",
      "The Spanish Armada was defeated in 1788."
    ],
    "answerIndex": 3,
    "explanation": "The Spanish Armada was defeated in 1588, not 1788."
  },
  {
    "id": 432,
    "category": "GK",
    "difficulty": "hard",
    "statements": [
      "Lake Baikal is the deepest lake in the world.",
      "The Dead Sea is the lowest point on the Earth's surface.",
      "The Atacama Desert is one of the driest places on Earth.",
      "Angel Falls, the world's tallest waterfall, is in Brazil."
    ],
    "answerIndex": 3,
    "explanation": "Angel Falls is located in Venezuela, not Brazil."
  },
  {
    "id": 40,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Apples can be red, green, or yellow.",
      "Eggs are a good source of protein.",
      "Coffee contains caffeine.",
      "Strawberries are a type of citrus fruit."
    ],
    "answerIndex": 3,
    "explanation": "Strawberries are berries (botanically not even berries, but aggregate fruits), not citrus. Oranges and lemons are citrus."
  },
  {
    "id": 41,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Sushi is a Japanese dish.",
      "Pizza originated in Italy.",
      "Tacos are a Mexican food.",
      "Burgers were invented in China."
    ],
    "answerIndex": 3,
    "explanation": "Burgers (Hamburgers) are named after Hamburg, Germany, and popularized in the USA."
  },
  {
    "id": 42,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Sugar is sweet.",
      "Lemons are sour.",
      "Salt is used as a seasoning.",
      "Butter is a type of vegetable."
    ],
    "answerIndex": 3,
    "explanation": "Butter is a dairy product made from milk or cream, not a vegetable."
  },
  {
    "id": 43,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Broccoli is a green vegetable.",
      "Potatoes grow underground.",
      "Tomatoes are technically fruits.",
      "Rice grows on trees."
    ],
    "answerIndex": 3,
    "explanation": "Rice grows in water-soaked fields called paddies, not on trees."
  },
  {
    "id": 44,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Chocolate comes from cocoa beans.",
      "Bread is made from flour.",
      "Honey is made by bees.",
      "Peanuts grow on large oak trees."
    ],
    "answerIndex": 3,
    "explanation": "Peanuts are legumes that grow underground; they do not grow on trees."
  },
  {
    "id": 45,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Ice cream must be kept frozen.",
      "Popcorn is made from corn kernels.",
      "Pasta is often made from wheat.",
      "Wine is made from fermented potatoes."
    ],
    "answerIndex": 3,
    "explanation": "Wine is made from fermented grapes. Vodka can be made from potatoes."
  },
  {
    "id": 46,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Carrots are orange.",
      "Spinach is a leafy green.",
      "Onions can make you cry when cut.",
      "Cucumbers are a type of root vegetable."
    ],
    "answerIndex": 3,
    "explanation": "Cucumbers are the fruit of a vine, often treated as a vegetable. Carrots and radishes are root vegetables."
  },
  {
    "id": 47,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Tea is made by soaking leaves in water.",
      "Soup is a liquid food.",
      "Cheese is made from milk.",
      "Bread always contains eggs."
    ],
    "answerIndex": 3,
    "explanation": "Basic bread (flour, water, yeast, salt) does not contain eggs. Brioche or challah does."
  },
  {
    "id": 48,
    "category": "Food",
    "difficulty": "easy",
    "statements": [
      "Water is essential for life.",
      "Fruit contains natural sugar.",
      "Spices add flavor to food.",
      "Mayonnaise is made mostly of milk."
    ],
    "answerIndex": 3,
    "explanation": "Mayonnaise is made primarily of oil, egg yolks, and vinegar/lemon juice. It does not contain milk."
  },
  {
    "id": 234,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Saffron is the world's most expensive spice.",
      "Vanilla comes from an orchid plant.",
      "Cinnamon is the inner bark of a tree.",
      "Black pepper is a type of root."
    ],
    "answerIndex": 3,
    "explanation": "Black pepper comes from the dried berries (peppercorns) of a vine, not a root."
  },
  {
    "id": 235,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Tofu is made from soy milk.",
      "Tempeh is a fermented soy product.",
      "Seitan is made from wheat gluten.",
      "Quinoa is a type of cereal grain."
    ],
    "answerIndex": 3,
    "explanation": "Quinoa is a 'pseudocereal' (a seed), not a true cereal grain like wheat or rice."
  },
  {
    "id": 236,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Espresso has more caffeine per ounce than drip coffee.",
      "Green tea is unoxidized.",
      "Oolong tea is partially oxidized.",
      "Decaf coffee contains zero caffeine."
    ],
    "answerIndex": 3,
    "explanation": "Decaf coffee still contains small amounts of caffeine (usually 2-5mg per cup)."
  },
  {
    "id": 237,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Baking soda requires an acid to activate.",
      "Baking powder contains both an acid and a base.",
      "Yeast produces carbon dioxide to make bread rise.",
      "Gluten is a type of sugar found in wheat."
    ],
    "answerIndex": 3,
    "explanation": "Gluten is a protein found in wheat and related grains, not a sugar."
  },
  {
    "id": 238,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Casein is a protein found in milk.",
      "Lactose is the primary sugar in milk.",
      "Whey is a byproduct of cheese making.",
      "Homogenization is the process of heating milk to kill bacteria."
    ],
    "answerIndex": 3,
    "explanation": "PASTEURIZATION is heating milk to kill bacteria. Homogenization breaks down fat molecules so they don't separate."
  },
  {
    "id": 239,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "The Scoville scale measures the heat of peppers.",
      "Habaneros are hotter than Jalapenos.",
      "Pure capsaicin is the hottest substance on the scale.",
      "Bell peppers have a Scoville rating of 100."
    ],
    "answerIndex": 3,
    "explanation": "Bell peppers have a Scoville rating of 0 because they contain no capsaicin."
  },
  {
    "id": 240,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "Extra virgin olive oil is cold-pressed.",
      "Canola oil is derived from the rapeseed plant.",
      "Coconut oil is high in saturated fat.",
      "Lard is fat derived from beef."
    ],
    "answerIndex": 3,
    "explanation": "Lard is fat from pigs. Tallow is fat derived from beef or mutton."
  },
  {
    "id": 241,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "MSG stands for Monosodium Glutamate.",
      "Umami is the taste of glutamate.",
      "Aspartame is an artificial sweetener.",
      "Stevia is a synthetic chemical sweetener."
    ],
    "answerIndex": 3,
    "explanation": "Stevia is a natural sweetener derived from the leaves of the Stevia rebaudiana plant."
  },
  {
    "id": 242,
    "category": "Food",
    "difficulty": "medium",
    "statements": [
      "A reduction is a sauce thickened by evaporation.",
      "Blanching involves plunging food into boiling then ice water.",
      "Sous-vide is cooking food in a vacuum-sealed bag at a precise temperature.",
      "Braising is a quick, high-heat dry cooking method."
    ],
    "answerIndex": 3,
    "explanation": "Braising is a slow, low-heat MOIST cooking method using a small amount of liquid."
  },
  {
    "id": 434,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "The 'mother sauces' include Hollandaise, B\u00e9chamel, and Velout\u00e9.",
      "Espagnole and Tomato are also mother sauces.",
      "Mornay sauce is a B\u00e9chamel with added cheese.",
      "Bearnaise sauce is a Hollandaise made with lemon juice instead of vinegar."
    ],
    "answerIndex": 3,
    "explanation": "Bearnaise is a Hollandaise variation made with a reduction of vinegar, shallots, and tarragon. Hollandaise uses lemon juice."
  },
  {
    "id": 435,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Pectin is a structural heteropolysaccharide found in fruits.",
      "Gelatin is derived from collagen in animal skin and bones.",
      "Agar-agar is a gelatin substitute derived from red algae.",
      "Xanthan gum is a natural thickening agent extracted from tree bark."
    ],
    "answerIndex": 3,
    "explanation": "Xanthan gum is produced by the fermentation of glucose/sucrose by the bacterium Xanthomonas campestris, not tree bark."
  },
  {
    "id": 436,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Tempering chocolate involves controlled melting and cooling for shine.",
      "The fat bloom on chocolate is due to fat crystals rising to the surface.",
      "Couverture chocolate has a higher cocoa butter percentage.",
      "White chocolate must contain at least 10% cocoa solids."
    ],
    "answerIndex": 3,
    "explanation": "White chocolate contains cocoa butter, sugar, and milk, but ZERO cocoa solids (which give chocolate its brown color)."
  },
  {
    "id": 437,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Ceviche is 'cooked' by the citric acid in lime or lemon juice.",
      "The process of ceviche 'cooking' is called denaturation of proteins.",
      "Sashimi refers specifically to raw fish served with rice.",
      "Tartare is a dish made from raw minced meat or fish."
    ],
    "answerIndex": 2,
    "explanation": "Sashimi is thinly sliced raw meat (usually fish) served alone. Sushi is what includes vinegared rice."
  },
  {
    "id": 438,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Anthocyanins are pigments that give blueberries their color.",
      "Carotenoids give carrots and tomatoes their orange/red color.",
      "Chlorophyll turns brown in an acidic environment.",
      "Flavonoids are only found in citrus fruits."
    ],
    "answerIndex": 3,
    "explanation": "Flavonoids are a diverse group of phytonutrients found in almost all fruits and vegetables."
  },
  {
    "id": 439,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "A mirepoix consists of onions, carrots, and celery.",
      "A Holy Trinity (Cajun) consists of onions, bell peppers, and celery.",
      "Sofrito is a base used in Spanish and Latin American cooking.",
      "Gremolata is a French herb sauce made with parsley, basil, and garlic."
    ],
    "answerIndex": 3,
    "explanation": "Gremolata is an ITALIAN condiment made with parsley, lemon zest, and garlic. It usually doesn't have basil."
  },
  {
    "id": 440,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Kopi Luwak coffee is processed using Asian palm civets.",
      "Geisha is a highly prized variety of Arabica coffee.",
      "Robusta coffee generally has more caffeine than Arabica.",
      "Light roast coffee has significantly less caffeine than dark roast."
    ],
    "answerIndex": 3,
    "explanation": "Light roast actually has slightly MORE caffeine by volume because the beans are denser. Dark roast beans lose more caffeine during the longer roasting."
  },
  {
    "id": 441,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "The habanero pepper originated in the Amazon basin.",
      "Carolina Reaper currently holds the record for world's hottest pepper.",
      "Capsaicin is concentrated primarily in the seeds of a pepper.",
      "The burn of capsaicin can be neutralized by casein in milk."
    ],
    "answerIndex": 2,
    "explanation": "Capsaicin is primarily found in the placental tissue (the white pith) of the pepper, not the seeds themselves."
  },
  {
    "id": 442,
    "category": "Food",
    "difficulty": "hard",
    "statements": [
      "Rennet is an enzyme complex used to curdle milk for cheese.",
      "Roquefort cheese is made from sheep's milk.",
      "Mozzarella di Bufala is made from water buffalo milk.",
      "Parmesan (Parmigiano-Reggiano) must be aged for at least 6 months."
    ],
    "answerIndex": 3,
    "explanation": "Parmigiano-Reggiano must be aged for a minimum of 12 months, not 6."
  }
];

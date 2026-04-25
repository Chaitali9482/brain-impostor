================================================================
README.txt — Brain Impostor (NX Monorepo)
================================================================
Project      : Brain Impostor
Type         : Frontend-only Quiz Game
Audience     : Students Grade 12 and below
Stack        : Next.js (App Router) + TypeScript + Tailwind CSS
Monorepo     : NX Workspace
Deployment   : Vercel
================================================================


WHAT IS BRAIN IMPOSTOR?
------------------------
A fast-paced deduction game where players identify the ONE false
statement hidden among four. Inspired by the game card concept:

  "3 true, 1 subtly false. The false statement contains exactly
   one wrong detail — wrong number, wrong relationship, wrong
   sequence. The lie gets harder to spot each round. Streak
   bonus for 3+ consecutive correct catches."

Players select a Category and Difficulty, then race against a
10-second timer to spot the lie. Score, streak, and high score
are tracked throughout the session.


TECH STACK
-----------
Framework   : Next.js 14 (App Router)
Language    : TypeScript (strict, no any)
Styling     : Tailwind CSS
State       : React useState + useEffect
Persistence : localStorage (high score only)
Monorepo    : NX Workspace (Integrated)
Deployment  : Vercel

NOT USED (Hard Restrictions):
  x  No backend
  x  No database
  x  No external APIs
  x  No Firebase
  x  No authentication
  x  No dynamic AI question generation
  x  No external state libraries (Redux, Zustand, etc.)


NX MONOREPO STRUCTURE
----------------------
brain-impostor/
├── apps/
│   └── web/                        ← Next.js application
│       └── app/
│           ├── layout.tsx
│           └── page.tsx            ← main game page
│
├── libs/
│   ├── types/                      ← all TypeScript interfaces + types
│   │   └── src/
│   │       ├── lib/question.ts
│   │       └── index.ts
│   │
│   ├── data/                       ← static question bank (no logic)
│   │   └── src/
│   │       ├── lib/questions.ts
│   │       └── index.ts
│   │
│   ├── game/                       ← pure game logic functions
│   │   └── src/
│   │       ├── lib/game.ts
│   │       └── index.ts
│   │
│   └── ui/                         ← reusable React components
│       └── src/
│           ├── lib/
│           │   ├── GameCard.tsx
│           │   ├── ScoreBoard.tsx
│           │   ├── DifficultySelect.tsx
│           │   ├── CategorySelect.tsx
│           │   ├── ResultModal.tsx
│           │   └── ProgressBar.tsx
│           └── index.ts
│
├── nx.json
├── package.json
└── tsconfig.base.json


NX PATH ALIASES
----------------
@brain-impostor/types   → libs/types/src/index.ts
@brain-impostor/data    → libs/data/src/index.ts
@brain-impostor/game    → libs/game/src/index.ts
@brain-impostor/ui      → libs/ui/src/index.ts


GETTING STARTED
----------------
1. Install NX CLI globally:
   npm install -g nx

2. Create workspace:
   npx create-nx-workspace@latest brain-impostor
   (Select: Integrated monorepo → Next.js → app name: web)

3. Add Tailwind:
   nx g @nx/next:setup-tailwind web

4. Generate libraries:
   nx g @nx/js:lib ui
   nx g @nx/js:lib game
   nx g @nx/js:lib data
   nx g @nx/js:lib types

5. Run development server:
   nx serve web
   Open: http://localhost:3000

6. Production build:
   nx build web


HOW TO PLAY
------------
1. Select a Category  : Science / Maths / GK / Food
2. Select a Difficulty: Easy / Medium / Hard
3. Read all 4 statements carefully
4. Click the ONE you think is FALSE
5. See instant feedback — green (correct) or red (wrong)
6. Read the explanation to learn why
7. Hit Next to continue — beat your high score!


SCORING
--------
Correct answer  : +10 points
Wrong answer    :  +0 points
Timer timeout   :  +0 points (treated as wrong)

Streak:
  Correct → streak +1
  Wrong   → streak reset to 0
  3+ streak in a row → fire indicator shown


DIFFICULTY LEVELS
------------------
Easy   : Obvious wrong fact — clearly different from truth
Medium : Slightly tricky wording — close but off
Hard   : Subtle detail wrong — wrong number, sequence, or relationship


CATEGORIES
-----------
Science : Biology, Physics, Chemistry — Class 10-12 level
Maths   : Numbers, formulas, geometry, algebra facts
GK      : History, geography, general world knowledge
Food    : Food science, nutrition, cooking facts (fun category)


TIMER
------
Each question   : 10 seconds
On select       : Timer stops immediately
On timeout (0s) : Auto-marked wrong, streak resets


LOCAL STORAGE
--------------
Key stored: brainImpostor_highScore
Only ONE key ever written. No user data. No tracking.


DEPLOYMENT
-----------
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
No environment variables required.


OPTIONAL ENHANCEMENTS (Post-MVP)
----------------------------------
[ ] Sound effects on correct / wrong
[ ] Animated card transitions
[ ] Visual progress bar (timer)
[ ] Daily Challenge mode (static, date-seeded)
[ ] Share score button


LICENSE
--------
MIT — Educational use. Build, fork, learn.

================================================================
END OF README.txt
================================================================

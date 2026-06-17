export const meta = {
  name: 'bootcamp-lore-design',
  description: 'Design the bootcamp container: chronobiology-based daily/weekly scheduling around a real city life, real course-calendar pacing, military-bootcamp escalation structure, and serious-but-fun wizard/apprentice lore',
  phases: [
    { title: 'Design' },
    { title: 'Synthesize' },
  ],
}

phase('Design')

const chrono = agent(
  `You are a chronobiology and cognitive-performance researcher. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then run web searches and cite real science. Design an evidence-based daily and weekly schedule for someone doing an intense year-long self-study bootcamp in algorithms/math ON TOP OF a full-time software engineering job.\n\nCover, with sources (Matthew Walker "Why We Sleep", Andrew Huberman, chronotype research, ultradian rhythm / 90-min focus cycles, caffeine pharmacokinetics ~5-6h half-life, exercise-and-cognition, sleep-and-memory-consolidation, spacing across the day):\n- Best time-of-day for each activity: novel hard theory, problem-solving, proof-writing, spaced-repetition review, passive reading, exercise, creative/incubation.\n- Caffeine timing (when coffee helps vs wrecks sleep; the 90-min-after-waking idea; afternoon cutoff).\n- Sleep as the non-negotiable consolidation engine; naps; what to do the day AFTER a late club night (recovery, light review, no hard new theory).\n- How to fit deep work into mornings/evenings around a 9-5 job, with the person also going out for coffee/food in the city regularly and clubbing once a week.\n\nDeliver a concrete, copyable WEEKLY TEMPLATE (hour blocks for each day, including one club night and its recovery day) plus the reasoning. Be specific and realistic, not idealized.`,
  { label: 'chrono', phase: 'Design' }
)

const calendars = agent(
  `You are mining real university course calendars to extract realistic PACING. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools. Find and fetch the week-by-week schedule/calendar pages for these courses and extract how they pace the material: MIT 6.006 Intro to Algorithms, MIT 6.046J Design and Analysis of Algorithms, MIT 6.851 Advanced Data Structures, MIT 6.042J Math for CS, and UC Berkeley CS61B.\n\nFor each, report: how many weeks, topics per week, lecture cadence, problem-set/exam cadence, and any natural "units/modules". Then SYNTHESIZE a realistic week-by-week tempo a self-learner could adopt (noting these were full-time-student paced, so suggest how to stretch them for ~12-15 hrs/week part-time). The goal is real pacing data, not guesses.`,
  { label: 'calendars', phase: 'Design' }
)

const bootcamp = agent(
  `You are designing the STRUCTURE of an intense "bootcamp for the mind." First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools and research: how elite intensive learning programs structure escalation (military basic training phases, olympiad/IMO & competitive-programming training camps, music conservatory practice regimens, deliberate-practice drill design). \n\nExtract the transferable structural principles: progressive overload, daily drills vs weekly missions, the role of testing/trials/gates between phases, building from fundamentals before specialization, rest cycles to avoid overtraining, and how the hardest programs use "operations" like reading and reproducing original research papers as advanced missions. Deliver a phase/escalation framework (with named tiers, gates between them, daily-drill vs weekly-mission split, and rest cadence) that could wrap an algorithms curriculum. Cite where ideas come from.`,
  { label: 'bootcamp', phase: 'Design' }
)

const lore = agent(
  `You are a worldbuilder and narrative designer. Create SERIOUS-BUT-FUN wizard/apprentice lore to wrap a year-long, brutally rigorous algorithms-and-mathematics bootcamp. The learner is the apprentice; frame the mentor as a wizard/master. It should feel epic and motivating, NOT cheesy — think a real order with real trials.\n\nDesign:\n- The name of the order/guild and its creed (mastery through derivation, not memorization).\n- Apprentice RANKS/TITLES that map onto the curriculum phases (e.g. foundations -> core -> advanced -> research), with a name and a "trial/gate" to ascend each rank.\n- "Grimoires" = the canonical books; "the old masters' scrolls" = original research papers (Tarjan, Dijkstra, Knuth, van Emde Boas, Fredman-Willard, etc.) framed as ancient spells to be deciphered and re-cast (reproduced).\n- Rituals: the daily drill, the weekly trial, the proof-duel, the simulation as "summoning/conjuring" a structure to life.\n- A short, genuinely cool opening "induction" passage written to the apprentice.\nKeep it tight, evocative, and reusable as section headers for a study plan. Map every lore element to a concrete real-study activity so it stays serious.`,
  { label: 'lore', phase: 'Design' }
)

const [chronoR, calendarsR, bootcampR, loreR] = await Promise.all([chrono, calendars, bootcamp, lore])

phase('Synthesize')
const design = await agent(
  `Synthesize four design documents into one cohesive "Bootcamp Container" spec that will wrap an algorithms/math study plan. Inputs:\n\n=== CHRONOBIOLOGY / SCHEDULE ===\n${chronoR}\n\n=== COURSE-CALENDAR PACING ===\n${calendarsR}\n\n=== BOOTCAMP ESCALATION STRUCTURE ===\n${bootcampR}\n\n=== WIZARD/APPRENTICE LORE ===\n${loreR}\n\nProduce a single markdown spec with:\n1. The lore frame (order, creed, ranks, trials, induction passage) used as the skeleton.\n2. The bootcamp escalation: phases/tiers as apprentice ranks, gates between them, daily-drill vs weekly-mission vs original-paper-op split.\n3. The realistic weekly tempo (from the course-calendar pacing) for ~12-15 hrs/week.\n4. The chronobiology schedule: a concrete weekly hour-block template that accounts for a full-time job, coffee/food outings in the city, and ONE club night + its recovery day.\nMake it serious, motivating, and immediately usable. This feeds a final tracked study plan.`,
  { label: 'synthesis', phase: 'Synthesize' }
)
return design

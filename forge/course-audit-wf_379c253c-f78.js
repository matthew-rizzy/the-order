export const meta = {
  name: 'course-audit',
  description: 'Audit every course in the DS&A curriculum: verify live links, best version, prereqs, real workload, public problem sets/autograders, strengths/gaps, and correct sequencing',
  phases: [
    { title: 'Audit' },
    { title: 'Sequence' },
  ],
}

const AUDIT_SCHEMA = {
  type: 'object',
  required: ['course', 'available', 'strengths', 'weaknesses'],
  properties: {
    course: { type: 'string' },
    available: { type: 'boolean', description: 'is it free & publicly accessible right now' },
    canonicalUrl: { type: 'string', description: 'the best current live URL (verified by fetching)' },
    bestVersion: { type: 'string', description: 'which year/iteration to actually use, and why' },
    prerequisites: { type: 'array', items: { type: 'string' } },
    topics: { type: 'array', items: { type: 'string' } },
    estimatedHours: { type: 'string' },
    problemSets: { type: 'string', description: 'are psets/exams public? graded? solutions available?' },
    autograder: { type: 'string', description: 'is there a public autograder or projects you can actually run' },
    strengths: { type: 'array', items: { type: 'string' } },
    weaknesses: { type: 'array', items: { type: 'string' } },
    bestFor: { type: 'string' },
    sequencePosition: { type: 'string', description: 'where in a learning path this belongs and what it pairs with' },
    notes: { type: 'string' },
  },
}

const COURSES = [
  'MIT 6.042J — Mathematics for Computer Science (Lehman/Leighton/Meyer)',
  'MIT 6.006 — Introduction to Algorithms (compare Fall 2011 vs Spring 2020)',
  'MIT 6.046J — Design and Analysis of Algorithms (Spring 2015, Demaine/Devadas)',
  'MIT 6.851 — Advanced Data Structures (Demaine)',
  'MIT 6.854 — Advanced Algorithms (Karger)',
  'MIT 18.404J / 6.840J — Theory of Computation (Sipser)',
  'MIT 6.890 — Algorithmic Lower Bounds: Fun with Hardness Proofs (Demaine)',
  'UC Berkeley CS61B — Data Structures (compare recent public offerings)',
  'UC Berkeley CS170 — Efficient Algorithms and Intractable Problems',
  'Princeton Algorithms I & II — Sedgewick/Wayne (Coursera + booksite)',
  'Stanford CS161 / Tim Roughgarden Algorithms Illuminated (book + lectures)',
  'CMU 15-451 — Algorithm Design and Analysis',
]

const BOOKS = [
  'CLRS — Introduction to Algorithms (4th ed)',
  'Concrete Mathematics — Graham, Knuth, Patashnik',
  'The Algorithm Design Manual — Skiena',
  'Algorithms Illuminated — Roughgarden',
]

phase('Audit')
const courseAudits = (await parallel(COURSES.map(c => () =>
  agent(
    `You are auditing an online course for a self-study DS&A curriculum. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools. Then research and VERIFY (by actually fetching the page) the current state of this course:\n\n"${c}"\n\nFind the canonical live URL (OCW / course website / Coursera), confirm it's publicly accessible, determine the best version/year to use and why, prerequisites, topic list, realistic time commitment, whether problem sets/exams/solutions are public, whether there's a runnable autograder or real projects, honest strengths and weaknesses/gaps, who it's best for, and where it fits in a sequence. Be honest about quality and accessibility — flag if a course is hard to follow without enrollment, has no psets, or is outdated.`,
    { label: c.split('—')[0].trim(), phase: 'Audit', schema: AUDIT_SCHEMA }
  )
))).filter(Boolean)

const bookAudits = (await parallel(BOOKS.map(b => () =>
  agent(
    `First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools. Briefly research this book for a self-study DS&A curriculum: "${b}". Cover: what it's best for, difficulty, whether a free/legal PDF exists, whether to read cover-to-cover or use as reference, and which courses it pairs with. Be concise.`,
    { label: b.split('—')[0].trim(), phase: 'Audit', schema: AUDIT_SCHEMA }
  )
))).filter(Boolean)

phase('Sequence')
const sequenced = await agent(
  `You are an expert curriculum designer. Here are verified audits of courses and books for a scientist-level data-structures-and-algorithms self-study path (JSON):\n\nCOURSES:\n${JSON.stringify(courseAudits)}\n\nBOOKS:\n${JSON.stringify(bookAudits)}\n\nProduce a markdown report:\n1. A verified, sequenced learning path in phases (Foundations -> Core -> Advanced -> Research), with each course's live link, best version, and realistic hours.\n2. For each phase, name the primary courses, the companion book(s), and what to skip.\n3. A "verified links table" so the learner never chases a dead URL.\n4. Honest call-outs: which courses are essential vs optional, which lack psets/autograders, which overlap, and the single best pick where two courses compete.\n5. Total realistic time estimate for the whole path at ~15 hrs/week.\nGround everything in the audit data. Mark anything you could NOT verify as available.`,
  { label: 'sequence', phase: 'Sequence' }
)
return sequenced

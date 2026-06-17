export const meta = {
  name: 'how-to-learn-research',
  description: 'Research the best ways to learn hard technical CS/math material: cognitive science of learning, psychology of motivation, anecdotes from elite competitive programmers and scientists, and what professors actually do',
  phases: [
    { title: 'Research' },
    { title: 'Synthesize' },
  ],
}

const DIGEST_SCHEMA = {
  type: 'object',
  required: ['topic', 'keyPoints', 'actionable'],
  properties: {
    topic: { type: 'string' },
    keyPoints: {
      type: 'array',
      items: {
        type: 'object',
        required: ['point', 'evidenceOrSource'],
        properties: {
          point: { type: 'string' },
          evidenceOrSource: { type: 'string', description: 'study, book, person, or URL backing this' },
          howToApply: { type: 'string' },
        },
      },
    },
    anecdotes: {
      type: 'array',
      description: 'concrete human stories — named people, reddit threads, blog posts. NOT generic advice.',
      items: {
        type: 'object',
        required: ['who', 'story', 'takeaway'],
        properties: {
          who: { type: 'string' },
          story: { type: 'string' },
          takeaway: { type: 'string' },
          source: { type: 'string' },
        },
      },
    },
    pitfalls: { type: 'array', items: { type: 'string' } },
  },
}

const TOPICS = [
  {
    key: 'cog-sci',
    prompt: `Research the EVIDENCE-BASED cognitive science of learning hard technical material. Cover: retrieval practice / testing effect, spaced repetition, interleaving, elaboration, dual coding, desirable difficulties (Bjork), generation effect. Cite the real research and books: Dunlosky et al. 2013 meta-analysis, "Make It Stick" (Brown/Roediger/McDaniel), Barbara Oakley's "Learning How to Learn", Bjork's desirable-difficulties lab. For each technique give the mechanism, the evidence, and EXACTLY how to apply it to learning algorithms/data structures and proofs.`,
  },
  {
    key: 'deliberate-practice',
    prompt: `Research deliberate practice and expertise development. Cover Anders Ericsson's actual research (not the pop "10000 hours" myth — get the nuance), what "deliberate practice" precisely means (focused, at-the-edge, immediate feedback, repetition of weak sub-skills), and how it maps onto an abstract domain like algorithms/competitive programming/math where feedback is less obvious. How do you build tight feedback loops for proof-writing and problem-solving?`,
  },
  {
    key: 'motivation-psych',
    prompt: `Research the psychology of sustained effort: growth mindset (Carol Dweck), grit (Angela Duckworth), flow (Csikszentmihalyi), self-determination theory (autonomy/competence/relatedness), and habit formation (BJ Fogg, James Clear "Atomic Habits"). Focus on what ACTUALLY sustains months/years of hard grinding without burning out: consistency systems, identity-based habits, managing motivation troughs, and the role of sleep/exercise. Cite the researchers and key findings.`,
  },
  {
    key: 'competitive-programming',
    prompt: `Research how GOD-TIER competitive programmers actually trained — this is anecdotal/lore, go find real human accounts. Look at: Codeforces grandmaster/legendary-grandmaster training blogs, tourist (Gennady Korotkevich), Errichto, Petr, Um_nik; USACO guide; r/competitiveprogramming and Codeforces blog threads titled things like "how I got to X rating", "how to practice", "road to red". Extract the concrete regimen: problem volume, upsolving, virtual contests, reading editorials, topic ladders (CSES, Codeforces problemset by rating), how long it took, what they'd do differently. Quote specific people and threads.`,
  },
  {
    key: 'scientists-mathematicians',
    prompt: `Research how mathematicians and research scientists learn deeply and actually do research. Cover: George Polya "How to Solve It", Terence Tao's career advice blog posts, the Feynman technique, how grad students learn (reading papers actively, reproducing results, advisor relationships, lab/group dynamics), what professors actually spend their days doing (and how junior researchers grow). Also find anecdotal accounts: "PhD advice" threads, mathematicians describing their study habits, Thurston's "On proof and progress in mathematics". Extract what separates deep understanding (derive-from-scratch) from surface learning.`,
  },
  {
    key: 'self-taught-anecdotes',
    prompt: `Find anecdotal success stories from ALL walks of life — people who became excellent at CS/algorithms/science through self-study or non-traditional paths. Look at reddit (r/learnprogramming, r/cscareerquestions, r/competitiveprogramming, r/math), blog posts ("how I taught myself X"), career-changers, late bloomers, people who went from average to god-tier. Capture the messy real details: how long, how many hours/day, what their week looked like, what almost made them quit, what finally clicked. Quote specific stories and link sources. Prioritize concrete, named, sourced anecdotes over generic advice.`,
  },
  {
    key: 'anti-patterns',
    prompt: `Research learning ANTI-PATTERNS and pitfalls for hard technical material. Cover: illusions of competence (Oakley), "tutorial hell", passive re-reading/highlighting (proven ineffective by Dunlosky), copying solutions without struggling, the plateau problem, overlearning trivia vs underlearning fundamentals, the danger of only doing easy problems, neglecting proofs, neglecting sleep, comparison/impostor spirals. For each, give the failure mode and the fix. Cite research and real accounts where possible.`,
  },
  {
    key: 'systems-routines',
    prompt: `Research concrete LEARNING SYSTEMS and daily/weekly routines for mastering algorithms and math. Cover: using Anki/spaced-repetition for CS and proofs (what to put on cards, what not to), keeping a problem-solving log / error log, Zettelkasten / note-taking for technical understanding, structuring a study day around peak focus, deep-work blocking (Cal Newport), accountability (study groups, public logs, streaks), and how elite learners schedule rest. Give specific, copyable routines with rationale and sources.`,
  },
]

phase('Research')
const findings = (await parallel(TOPICS.map(t => () =>
  agent(
    `You are a research agent. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then run 4-8 web searches and fetch the most credible/relevant pages. ${t.prompt}\n\nReturn a rigorous, well-sourced digest. Prefer primary sources, named people, and real quotes/threads over generic advice. Every key point needs a real source.`,
    { label: t.key, phase: 'Research', schema: DIGEST_SCHEMA }
  )
))).filter(Boolean)

phase('Synthesize')
const synthesis = await agent(
  `You are synthesizing research into a "How To Learn Algorithms & Data Structures at a Scientist Level" playbook. Here is the raw research from 8 specialist agents (JSON):\n\n${JSON.stringify(findings)}\n\nProduce a dense, practical, well-organized markdown playbook with these sections:\n1. The core operating principles (the 5-7 highest-leverage, evidence-backed learning methods, each with the why and the how).\n2. The daily/weekly system (concrete, copyable routine).\n3. The competitive-programmer regimen (what the god-tier people actually did — volume, upsolving, ladders, with named examples).\n4. The scientist/researcher mindset (derive-don't-memorize, proofs, reading papers, what profs do).\n5. Anecdotes worth internalizing (the best 6-10 real human stories, attributed).\n6. Anti-patterns to avoid (failure mode -> fix).\n7. Motivation & sustainability (how to grind for a year+ without burning out).\nKeep every claim grounded in the research. Cite sources inline. This will feed into a tracked study plan, so make the actionable parts crisp.`,
  { label: 'synthesis', phase: 'Synthesize' }
)
return synthesis

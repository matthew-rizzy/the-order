export const meta = {
  name: 'sicp-audit',
  description: 'Rigorous multi-agent, web-verified audit of the SICP / Rank-0 path — resources & versions, Scheme environment & tooling gotchas, chapter map + gates, project bank, the formal case for SICP-as-prerequisite-to-DSA, and self-study pitfalls — to give the Council audited SICP coverage',
  phases: [
    { title: 'Audit' },
    { title: 'Synthesize' },
  ],
}

const FINDING_SCHEMA = {
  type: 'object',
  required: ['dimension', 'findings'],
  properties: {
    dimension: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        required: ['point', 'detail'],
        properties: {
          point: { type: 'string' },
          detail: { type: 'string' },
          source: { type: 'string', description: 'verified URL or primary source backing this' },
          caveat: { type: 'string', description: 'gotcha / version trap / what to skip' },
        },
      },
    },
    verifiedLinks: {
      type: 'array',
      items: {
        type: 'object',
        required: ['label', 'url'],
        properties: { label: { type: 'string' }, url: { type: 'string' }, note: { type: 'string' } },
      },
    },
  },
}

const DIMENSIONS = [
  {
    key: 'resources',
    prompt: `Audit the canonical SICP resources and pin EXACT versions. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then research and VERIFY (fetch) live links for: (1) the 1986 MIT 6.001 video lectures (Abelson & Sussman, the HP-produced set) — canonical hosts (MIT OCW, Internet Archive, YouTube) and a lecture→topic map (1A,1B,2A,2B,...); (2) the SICP TEXT — 1st ed (1985) vs 2nd ed (1996), and the best FREE legal HTML editions (e.g. the sarabander HTML5 edition, the official MIT Press full-text, the SICP-in-JS / sourceacademy adaptation) — which to use and why; (3) MIT 6.001 OCW problem sets/exams; (4) exercise SOLUTIONS for self-checking (community sets — SchemeWiki/"SICP solutions", well-known GitHub solution repos). Flag version traps (the lectures follow the 1st ed; the text people read is usually 2nd ed). Verify every URL by fetching.`,
  },
  {
    key: 'environment',
    prompt: `Audit the Scheme ENVIRONMENT and tooling for SICP self-study, capturing real setup gotchas. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools. Cover: DrRacket + the 'sicp' Racket package (#lang sicp, by Neil Van Dyke / sarabander) — how to install (raco pkg install sicp); the critical DrRacket setting "The Racket Language / Determine language from source" vs the TEACHING languages (Beginning Student) trap that ignores #lang and forbids first-class function references; the definitions-pane vs interactions-pane (REPL) distinction; #lang sicp vs #lang racket tradeoffs (when each is needed — nil/cons-stream/true-false vs plain code); tracing (racket/trace's (trace f) needs #lang racket, fails under #lang sicp / Beginning Student). Also: MIT/GNU Scheme as an alternative, and zero-install online REPLs. Give exact install steps + the precise menu path to set the language. Verify links.`,
  },
  {
    key: 'chapter-map',
    prompt: `Map SICP's STRUCTURE and the natural gates. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools to confirm section titles/numbers. Produce: a chapter-by-chapter map (Ch1 Building Abstractions with Procedures; Ch2 Building Abstractions with Data; Ch3 Modularity, Objects, and State [incl. streams]; Ch4 Metalinguistic Abstraction [evaluators]; Ch5 Computing with Register Machines) — for each: what conceptual machinery it installs, the milestone/must-do sections, and the natural GATE (e.g. §1.2 orders of growth; the metacircular evaluator §4.1; the register-machine/explicit-control evaluator §5). Then recommend a realistic pacing for someone using SICP AS A PREREQUISITE to a data-structures-and-algorithms track: which sections are ESSENTIAL for that goal, which are enrichment/skippable, and a ~4-8 week plan. Note the difficulty walls (Ch3 environment model/state, Ch4 evaluators).`,
  },
  {
    key: 'project-bank',
    prompt: `Build a PROJECT/EXERCISE BANK for SICP — multiple cool builds per theme, with wow factor, mirroring a "more reps than average" philosophy. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools to confirm sections. Cover the great SICP builds with their section refs: the picture language / Escher (§2.2.4), symbolic differentiation (§2.3.2), Huffman encoding (§2.3.4), generic operations & symbolic algebra (§2.5), the digital-circuit simulator (§3.3.4), constraint propagation networks (§3.3.5), streams / infinite sequences / prime sieve (§3.5), the METACIRCULAR EVALUATOR (§4.1), lazy evaluator (§4.2), the amb nondeterministic evaluator (§4.3), the logic/query interpreter (§4.4), the register-machine simulator (§5.2), the explicit-control evaluator (§5.4), the compiler (§5.5). Plus classic warmup exercises (counting change, Ackermann, Pascal's triangle, Newton's method, ex 1.9-1.11 process shapes). For each: what you build, what it drills, difficulty (warmup->capstone), and why it's genuinely cool. Mark the flagship per theme.`,
  },
  {
    key: 'why-prereq',
    prompt: `Make the rigorous case for SICP as a FORMAL PREREQUISITE to a data-structures-and-algorithms mastery track, with specific section-to-topic mappings. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools if useful. Argue concretely: which SICP machinery directly UNLOCKS DSA topics — e.g. §1.2 "Orders of Growth" IS the Big-O/Θ/Ω foundation; recursive vs iterative PROCESSES (§1.2.1) → recurrence relations & space complexity & the call stack; tree recursion (§1.2.2) → divide-and-conquer & exponential blowup; data abstraction (§2.1-2.2) → ADTs/interfaces; higher-order procedures (§1.3) → generic algorithms/comparators; the environment & evaluation model (Ch3-4) → understanding what code actually costs; sequences as conventional interfaces (§2.2.3) → map/filter/reduce thinking. Produce a clean mapping table (SICP section -> DSA capability it grants) and a 2-3 sentence thesis on why deriving-from-scratch in SICP makes the DSA ranks land harder. Cite SICP's own framing where possible.`,
  },
  {
    key: 'pitfalls',
    prompt: `Audit SICP self-study PITFALLS and where people quit. First call ToolSearch with query "select:WebSearch,WebFetch" to load web tools (search blogs, reddit r/learnlisp / r/sicp, "why I quit SICP", "SICP too hard"). Capture: syntax-fighting (Lisp prefix/paren shock for imperative-language devs; the f(x) vs (f x) trip; the Beginning-Student/#lang trap); passively watching lectures without doing exercises; the difficulty walls (Ch3 state & environment model, Ch4 metacircular evaluator, Ch5 register machines) and the dropout cliffs; time-sink sections; over-perfectionism on every exercise vs strategic selection; realistic time estimates; and for someone whose END GOAL is DSA, what to skip vs not skip. For each pitfall: the failure mode and the fix. Cite real accounts.`,
  },
]

phase('Audit')
const findings = (await parallel(DIMENSIONS.map(d => () =>
  agent(
    `You are auditing one dimension of the SICP self-study path for a rigorous council knowledge base. ${d.prompt}\n\nBe exact, cite primary/verified sources, and NEVER fabricate a URL — fetch to confirm it resolves. Flag version traps and gotchas explicitly.`,
    { label: d.key, phase: 'Audit', schema: FINDING_SCHEMA }
  )
))).filter(Boolean)

phase('Synthesize')
const doc = await agent(
  `You are the Scribe of the Order. Synthesize these six web-verified SICP audits into ONE authoritative council doc, "The SICP / Rank-0 Path", in clean markdown. Raw audits (JSON):\n\n${JSON.stringify(findings)}\n\nProduce the doc with these sections:\n1. **What this is & why it's the prerequisite** — short thesis: SICP installs the conceptual machinery the DS&A ranks depend on. Include the SICP-section -> DSA-capability mapping TABLE (from the why-prereq audit).\n2. **Verified resources** — a links table (lectures, text editions, OCW psets, solutions) with the best pick flagged and version traps noted. Real URLs only.\n3. **Environment setup (read this FIRST)** — DrRacket + #lang sicp install; THE setting: "The Racket Language / Determine language from source" (NOT Beginning Student — which ignores #lang and forbids bare function refs); definitions pane vs interactions REPL; #lang sicp vs #lang racket (and that tracing via racket/trace needs #lang racket); exact menu path. Capture the gotchas a beginner actually hits.\n4. **Chapter map & gates** — per-chapter machinery + the gate to pass; mark essential-for-DSA vs enrichment.\n5. **Project & exercise bank** — multiple builds per theme with section refs, difficulty, and the flagship per theme (metacircular evaluator as the crown).\n6. **Pitfalls -> fixes** — the dropout cliffs and how to not quit.\n7. **Rank-0 pacing as a prereq** — a realistic ~4-8 week plan, essential sections only, ending at a gate.\nGround everything in the audit data; keep verified links intact; be rigorous and motivating. This becomes council/sicp-path.md.`,
  { label: 'synthesis', phase: 'Synthesize' }
)
return doc

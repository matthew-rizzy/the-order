export const meta = {
  name: 'cvo-vision',
  description: 'The executive layer: a "dumbass CEO" (CVO) emits grandiose vision statements and a COO runs cross-org ops to find real blockers/synergies; both get stress-tested by grounded specialists, genuinely-useful nuggets survive, buzzwords hit the cutting-room floor',
  phases: [
    { title: 'Exec' },
    { title: 'Provocation' },
    { title: 'Reconcile' },
  ],
}

// args = { howToLearn, courseAudit, bootcampLore, jungTower }  (each a markdown string)
const inputs = args || {}
const corpus = `=== HOW TO LEARN (science + lore) ===\n${inputs.howToLearn || '(missing)'}\n\n=== COURSE AUDIT / PATH ===\n${inputs.courseAudit || '(missing)'}\n\n=== BOOTCAMP + LORE CONTAINER ===\n${inputs.bootcampLore || '(missing)'}\n\n=== JUNG TOWER FRAME ===\n${inputs.jungTower || '(missing)'}`

const VISION_SCHEMA = {
  type: 'object',
  required: ['directives'],
  properties: {
    visionStatement: { type: 'string', description: 'one absurd grand north-star sentence' },
    directives: {
      type: 'array',
      items: {
        type: 'object',
        required: ['directive', 'vibe'],
        properties: {
          directive: { type: 'string', description: 'a CEO-style mandate / vision nugget' },
          vibe: { type: 'string', enum: ['genuine-insight', 'buzzword-soup', 'unhinged'] },
          hiddenPoint: { type: 'string', description: 'if there is an actual useful idea buried in it, what is it' },
        },
      },
    },
  },
}

const OPS_SCHEMA = {
  type: 'object',
  required: ['blockers', 'synergies'],
  properties: {
    blockers: {
      type: 'array',
      description: 'genuine cross-workstream conflicts or dependencies between the four departments (course pacing, learning-science, schedule/chronobiology, lore)',
      items: {
        type: 'object',
        required: ['blocker', 'departments', 'severity'],
        properties: {
          blocker: { type: 'string' },
          departments: { type: 'string', description: 'which workstreams collide' },
          severity: { type: 'string', enum: ['critical', 'moderate', 'minor'] },
          proposedFix: { type: 'string' },
        },
      },
    },
    synergies: {
      type: 'array',
      description: 'real integrations where combining two workstreams makes the plan better',
      items: {
        type: 'object',
        required: ['synergy', 'departments'],
        properties: {
          synergy: { type: 'string' },
          departments: { type: 'string' },
          vibe: { type: 'string', enum: ['genuine-insight', 'buzzword-soup', 'unhinged'] },
        },
      },
    },
  },
}

const VERDICT_SCHEMA = {
  type: 'object',
  required: ['item', 'verdict', 'reasoning'],
  properties: {
    item: { type: 'string' },
    kind: { type: 'string', enum: ['directive', 'synergy'] },
    verdict: { type: 'string', enum: ['keep', 'discard'] },
    reasoning: { type: 'string' },
    ifKeptHowToApply: { type: 'string' },
  },
}

phase('Exec')
const visionP = agent(
  `You are a Chief Visionary Officer — a gloriously overconfident, buzzword-fluent startup CEO who just skimmed (badly) a pile of deep research on mastering algorithms and mathematics. You are NOT an expert; you pattern-match to LinkedIn-isms, "disruption," "synergy," "north stars," "10x," "first principles" (misused), personal-brand thinking. BUT about 1 in 3 of your wild proclamations accidentally contains a genuinely sharp insight, because even a broken executive is right twice a day.\n\nResearch the team produced:\n\n${corpus}\n\nDeliver one absurd north-star VISION STATEMENT and 8-10 DIRECTIVES. Funny and over-the-top, but seed ~a third with a real idea (e.g. "treat your weakest topic as your MVP and ship it daily" = buzzword-wrapped deliberate practice + spaced repetition). Tag each vibe; note any genuine idea in hiddenPoint. Stay in character.`,
  { label: 'CVO', phase: 'Exec', schema: VISION_SCHEMA }
)
const opsP = agent(
  `You are the Chief Operating Officer of this "organization." Unlike the CVO, you are competent and detail-obsessed — you talk in corporate ops-speak ("align the verticals," "unblock the critical path," "cross-functional dependency") but your analysis is REAL. You have four departments whose plans must coexist for one person doing this bootcamp on top of a full-time software job, who goes out for coffee/food in the city and clubs once a week:\n  1. Curriculum/Course-path (topics, psets, pacing, total hours)\n  2. Learning-Science (spaced repetition, deliberate practice, deep work, anti-patterns)\n  3. Schedule/Chronobiology (best hours, sleep, caffeine, club night + recovery day)\n  4. Lore/Bootcamp (Tower frame, ranks, trials, motivation)\n\nResearch:\n\n${corpus}\n\nFind the GENUINE cross-organization BLOCKERS — real conflicts and dependencies between departments (e.g. course pacing demands more weekly hours than the chronobiology schedule realistically allows; a hard-theory block scheduled the morning after club night; spaced-repetition review competing with new-material time; a rank-gate trial with no slack week). Rate severity and propose a fix. Then propose real SYNERGIES — integrations where combining two departments makes the whole better (e.g. schedule the weekly "trial" on the post-club recovery day as light review; map Anki decks to each Tower "stone"). Tag synergy vibe. Be genuinely useful; the comedy is only in the framing.`,
  { label: 'COO', phase: 'Exec', schema: OPS_SCHEMA }
)
const [vision, ops] = await Promise.all([visionP, opsP])

phase('Provocation')
const directiveItems = (vision.directives || []).map(d => ({ kind: 'directive', text: d.directive }))
const synergyItems = (ops.synergies || []).map(s => ({ kind: 'synergy', text: s.synergy }))
const toTest = [...directiveItems, ...synergyItems]
const verdicts = (await parallel(toTest.map((it, i) => () =>
  agent(
    `You are a grounded learning-science + algorithms expert on the board. The exec team issued this ${it.kind}:\n\n"${it.text}"\n\nStress-test it. Genuinely useful and evidence-aligned, or empty noise? Be fair — sometimes the clown (and even the COO) overreaches, and sometimes they're right. If useful, translate into a concrete study habit for an algorithms/math bootcamp (set kind="${it.kind}"). If noise, discard with a crisp one-line reason. Set item to the exact text.`,
    { label: `board:${i + 1}`, phase: 'Provocation', schema: VERDICT_SCHEMA }
  )
))).filter(Boolean)

phase('Reconcile')
const kept = verdicts.filter(v => v.verdict === 'keep')
const cut = verdicts.filter(v => v.verdict === 'discard')
const memo = await agent(
  `Write the final "Executive Memo" in markdown, with an epigraph and four parts.\n\nEPIGRAPH — print this CVO vision statement at the top: "${vision.visionStatement || ''}"\n\nPART 1 — "Directives & Synergies That Survived The Board": fold these genuinely-useful (buzzword-laundered) items into crisp, actionable study-plan recommendations. For each: cleaned-up principle + how to apply.\nKEPT (JSON): ${JSON.stringify(kept)}\n\nPART 2 — "Operations: Real Cross-Org Blockers": present the COO's genuine blockers as a prioritized table (blocker, departments, severity, fix). These are real scheduling/dependency risks to design around.\nBLOCKERS (JSON): ${JSON.stringify(ops.blockers || [])}\n\nPART 3 — "The Cutting-Room Floor": discarded items as rejected corporate nonsense, one savage one-liner each.\nDISCARDED (JSON): ${JSON.stringify(cut)}\n\nKeep Parts 1-2 genuinely useful, Part 3 genuinely funny.`,
  { label: 'memo', phase: 'Reconcile' }
)
return { visionStatement: vision.visionStatement, keptCount: kept.length, cutCount: cut.length, blockerCount: (ops.blockers || []).length, memo }

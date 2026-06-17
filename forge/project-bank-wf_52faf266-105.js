export const meta = {
  name: 'project-bank',
  description: 'Build a deep bank of multiple cool, distinct projects + simulations per algorithms/DS concept — mining famous course projects (6.851 Rubiks cube, CS61B Gitlet/BYoW, Berkeley Pac-Man) and designing original ones, so the learner gets far more practice than average without re-reading theory',
  phases: [
    { title: 'Mine' },
    { title: 'Organize' },
  ],
}

const PROJECT_SCHEMA = {
  type: 'object',
  required: ['concept', 'projects'],
  properties: {
    concept: { type: 'string' },
    projects: {
      type: 'array',
      description: '3-5 distinct projects of escalating difficulty, each reinforcing the concept a different way',
      items: {
        type: 'object',
        required: ['title', 'whatYouBuild', 'reinforces', 'difficulty'],
        properties: {
          title: { type: 'string' },
          whatYouBuild: { type: 'string' },
          reinforces: { type: 'string', description: 'the exact sub-skill / invariant / bound it drills' },
          difficulty: { type: 'string', enum: ['warmup', 'core', 'stretch', 'research-grade'] },
          isSimulation: { type: 'boolean', description: 'true if it is a benchmark/visualization/simulation that makes asymptotics or behavior visible' },
          famousSource: { type: 'string', description: 'if this is a real famous course project, name the course + link; else "original"' },
          wowFactor: { type: 'string', description: 'why this one is genuinely cool, not a toy' },
        },
      },
    },
  },
}

const CONCEPTS = [
  'Sorting & divide-and-conquer (mergesort, quicksort, selection, recurrences)',
  'Hashing & hash tables (collision strategies, load factor, universal/perfect hashing, Bloom filters)',
  'Binary search trees & balanced trees (BST, AVL, red-black, treaps, splay trees, B-trees)',
  'Heaps & priority queues (binary, binomial, Fibonacci, applications)',
  'Graphs I — traversal & shortest paths (BFS, DFS, Dijkstra, Bellman-Ford, A*)',
  'Graphs II — MST, network flow, matching (Kruskal/Prim, Ford-Fulkerson, bipartite matching)',
  'Dynamic programming (knapsack, edit distance, sequence/interval DP, DP on trees)',
  'Greedy algorithms & amortized analysis (exchange arguments, union-find, potential method)',
  'Randomized & streaming algorithms (skip lists, treaps, Count-Min/HyperLogLog, reservoir sampling)',
  'Advanced data structures (van Emde Boas, fusion trees, persistence, retroactivity, cache-oblivious, succinct)',
  'String algorithms (tries, suffix arrays/trees, KMP, Aho-Corasick, rolling hash)',
  'Computational geometry & spatial DS (convex hull, k-d trees, segment/range trees, sweep line)',
  'Complexity, NP-completeness & lower bounds (reductions, hardness-of-puzzles, approximation)',
]

phase('Mine')
const banks = (await parallel(CONCEPTS.map(c => () =>
  agent(
    `You are building a PROJECT BANK for one concept in an algorithms/data-structures mastery bootcamp. The learner refuses to re-read theory but WANTS far more hands-on practice than average — multiple distinct, genuinely cool projects per concept (the spirit of MIT 6.851's "compute God's Number for the Rubik's Cube" or Berkeley CS61B's Gitlet version-control clone and BYoW world generator, or Berkeley CS188's Pac-Man AI).\n\nConcept: "${c}"\n\nFirst call ToolSearch with query "select:WebSearch,WebFetch" to load web tools, then research famous, real course projects for this concept (MIT 6.006/6.046/6.851, Berkeley CS61B/CS170/CS188, Princeton Algorithms, Stanford) AND design original ones. Produce 3-5 distinct projects of escalating difficulty (warmup -> core -> stretch -> research-grade). At least one MUST be a SIMULATION/benchmark/visualization that makes the asymptotics or behavior physically visible (e.g. plot probe-count vs load-factor; race BST vs treap height on adversarial input; measure cache misses for cache-oblivious vs naive). For real course projects, cite the course and link. Each project: what you build, the exact sub-skill it reinforces, difficulty, whether it's a simulation, the source, and the wow factor. No toy exercises — every project should be something you'd be proud to show.`,
    { label: c.split('—')[0].split('(')[0].trim().slice(0, 24), phase: 'Mine', schema: PROJECT_SCHEMA }
  )
))).filter(Boolean)

phase('Organize')
const organized = await agent(
  `Organize this project bank into a clean, motivating markdown reference for a year-long algorithms mastery bootcamp where the learner does MULTIPLE projects per concept (more practice than average) and never re-reads theory. Raw banks (JSON):\n\n${JSON.stringify(banks)}\n\nFor each concept: a short header, then a ranked list of its projects (warmup -> research-grade) as checkbox items, each with the one-line "what you build", the sub-skill it drills, a [SIM] tag if it's a simulation, and a source link if famous. Put the single coolest "flagship" project per concept in bold. End with a "Hall of Fame" shortlist of the ~12 most impressive flagship projects across all concepts (the portfolio centerpieces). Keep it tight and grin-inducing — these should make someone want to start tonight.`,
  { label: 'organize', phase: 'Organize' }
)
return organized

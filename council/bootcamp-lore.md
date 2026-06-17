# The Order of the Vanishing Constant
## A Bootcamp Container for One Year of Derivation

> *Light a candle for the work, not the wizard.*
> This is the wrapper. A separate study plan drops into the rank/grimoire/scroll slots below; this document governs **how** you train — the ranks you climb, the gates you pass, the daily rhythm, and the hours you actually keep. Every mythic word maps to a non-negotiable activity. The romance is real; so is the work.

---

## 0. The Induction
*Read once, on the first day. Then begin.*

You came here because you can already write code that runs. That is not why we admitted you.

We admitted you because you suspect — correctly — that *running* is the lowest bar a thing can clear, and that beneath every program you have loved there is a reason it is fast, a reason it is correct, and a reason it could be neither. Most people memorize the spell and never learn the magic. They are not of the Order.

The Order of the Vanishing Constant is old, and its name is a warning. We do not chase the constant factor — the cleverness that shaves a millisecond. We chase the thing that *survives* when the constant vanishes: the shape of the growth, the asymptote, the truth that holds when the input grows without mercy. A trick that helps at n=10 and dies at n=10⁹ was never magic. It was luck wearing a robe.

Here is our one law, and you will earn the right to mean it: **Derive, do not memorize.** A spell you have only memorized fails you the night you need it most — under a whiteboard, under a deadline, under your own doubt. A spell you have *derived* you can re-cast from ashes, because you know why every line is there.

It will take a year. It is supposed to. Now derive.

---

## 1. The Creed

> *Mastery through derivation, not memorization.*
> *We do not learn the answer; we earn the right to recompute it.*
> *Prove the bound or do not claim it.*
> *The constant is vanity; the growth is truth.*
> *A structure not summoned is a structure not understood.*

**Concretely, the three inviolable rules:**
1. **No result enters your notes unproven.** Every Big-O you write carries the derivation that earned it.
2. **Every data structure is implemented from scratch at least once** — then run on adversarial input until the measured curve matches (or betrays) the proven bound.
3. **You advance by passing a Gate, never by time served.** A plateau triggers rest, not grinding. A failed Gate sends you back to drill, not forward on schedule.

---

## 2. The Architecture — How the Frame Fits Together

Four layers, each from one of the source designs, locked into one structure:

| Layer | What it governs | Source logic |
|---|---|---|
| **Ranks** (I–IV) | The curriculum arc: Floor → Working Hand → Deep Structures → Frontier | Lore frame × Army BCT escalation (fundamentals → specialization → integration → original work) |
| **Gates** | Hard, externally-checkable trials between ranks | Olympiad gating — you don't promote yourself |
| **Mesocycles** | Each rank = ~3 weeks escalating load + 1 deload week, sealed by its Gate | Sports periodization / supercompensation |
| **Rituals** | Daily Drill vs Weekly Trial vs the Summoning/Scroll | Conservatory split (Hanon vs études) × deliberate practice × the reproducibility standard |
| **The Tempo** | One problem-set/mission per week, lectures flexing around it | Real MIT/Berkeley course calendars, stretched for a solo part-timer |
| **The Day** | Where in the 24h each activity lives | Chronobiology — encoding at circadian peak, consolidation in protected sleep |

The escalation logic in one line: **Fundamentals before specialization before integration before original work; promotion only by passing a timed Gate; daily technique drills plus weekly integrative missions; each rank a load/deload cycle so a plateau triggers rest; and the apex is reproducing a primary-source paper from scratch.**

---

## 3. The Ranks & Their Gates

Each rank is a **mesocycle**: roughly three weeks of escalating load, then one **deload week** at reduced volume before the Gate — so you meet the trial fresh, riding supercompensation, not fatigued. Because a self-learner stretches each "MIT week" across ~1.5–2 real weeks (no TAs, no recitation safety net), a rank in *calendar* terms runs longer than its load-weeks suggest. Budget the stretch.

Each rank keeps prior-rank skills **warm daily** (the conservatory rule: play all exercises through to retain technique), so the Floor doesn't crumble as you climb.

---

### RANK I — POSTULANT · *The Floor* 🔴 (RED — Fundamentals & Discipline)
**Mission:** build the primitives *and the practice discipline itself.*
**Phase length:** ~3 load-weeks + deload → budget **8–10 real weeks** solo.

- **Study:** Asymptotics from the definition (Big-O/Θ/Ω), recurrences (substitution, recursion tree, Master Theorem *with its proof*), proof technique (induction, contradiction, invariants), summations, discrete probability, basic combinatorics. Elementary structures: arrays, linked lists, stacks, queues, hash tables, heaps. Sorting + the comparison lower bound, derived.
- **Daily Drill (the Hanon):** Big-O by inspection; implement-from-blank one core structure each day; one bound re-derived from definition.
- **Weekly Mission (the étude):** one coherent skill family per week — sorting suite → binary search variants → two-pointer/sliding-window.
- **Foundational math note:** if proofs and induction are shaky, this rank absorbs a *Math-for-CS* front-load — spend the first weeks on proofs & induction, the documented bottleneck for self-learners.

> **THE GATE OF ASH** — From a blank page, no references: state and *prove* the Master Theorem's three cases; derive the Ω(n log n) comparison-sort lower bound; implement a binary heap and prove `build` is O(n). **Pass = all three, correct, unaided.**

---

### RANK II — ADEPT · *The Working Hand* ⚪ (WHITE — Specialized Technique)
**Mission:** layer the specialized weapons (BCT's marksmanship phase).
**Phase length:** ~3 load-weeks + deload → budget **10–12 real weeks** solo.

- **Study:** Divide-and-conquer, greedy (with exchange-argument proofs), dynamic programming (state, recurrence, order, reconstruction), graph traversal (BFS/DFS), shortest paths (Dijkstra, Bellman-Ford), MST (Kruskal/Prim), union-find with inverse-Ackermann, balanced trees (red-black or AVL), amortized analysis (aggregate, accounting, potential).
- **Daily Drill:** recurrence derivation; "which paradigm fits this?" pattern reps; keep one Rank-I structure warm.
- **Weekly Mission:** one paradigm per mission, escalating within the week — recursion/backtracking → DP (1-D then 2-D) → graphs.
- **Pacing flag:** **Slow the DP block** — give it an *extra week*. DP is where self-learners stall. Don't let escalation outrun comprehension here.

> **THE GATE OF IRON** — Implement Dijkstra on a binary heap *and* re-derive its correctness (the cut/relaxation argument) by hand; implement union-find and reproduce the O(α(n)) amortized structure; solve a previously-unseen DP and prove its recurrence optimal. **Pass = working code + written proofs.**

---

### RANK III — CONJURER · *The Deep Structures* 🔵 (BLUE — Integration Under Pressure)
**Mission:** no genuinely new *paradigms* — instead, deep structures and everything tested under field conditions.
**Phase length:** modular; budget **~1 week per major topic**, **12–16 real weeks** total.

- **Study:** Advanced data structures (van Emde Boas, Fibonacci heaps, splay trees, segment/Fenwick, persistent), max-flow/min-cut (Ford-Fulkerson, Dinic) and matching, string algorithms (KMP, suffix arrays/automata, Aho-Corasick), computational geometry (convex hull, sweep), number-theoretic & FFT algorithms, randomized algorithms + concentration bounds, NP-completeness & reductions, approximation.
- **Daily Drill:** timed single-problem sprints with a hard clock; immediate post-mortem on the **one weakest sub-skill** (Ericsson: target the deficiency).
- **Weekly Mission:** full mock contests (mixed-paradigm, mixed-difficulty); debrief every miss. **This rank is modular** — cherry-pick topics; on a first pass, skip the pure lower-bound material.
- **First Scroll appears here:** re-cast one Old Master's scroll end-to-end (see §6).

> **THE GATE OF STORMS** — Summon one deep structure (vEB tree or Fibonacci heap): it breathes, and you can demonstrate its bound empirically *and* explain the derivation; perform one non-trivial NP-hardness reduction unaided; re-cast one scroll in full. **Pass = the structure breathes, the reduction holds, the scroll is reproduced.**

---

### RANK IV — MAGUS · *The Open Frontier* ⚫ (STEEL — Original Operations / Mastery)
**Mission:** the reproducibility standard — prove mastery by rebuilding primary sources, not solving curated sets.
**Phase length:** open-ended; budget **8–12 real weeks** for one full reproduction + critique.

- **Study:** read primary literature at pace; lower bounds, cell-probe model, fine-grained complexity, the current research conversation.
- **Daily Drill:** read one paper section/day; reconstruct its pseudocode and complexity proof from memory.
- **Weekly "Operation":** pick a landmark paper *you were not coached on* and **reproduce it from scratch from the paper alone** — implement, benchmark, write it up (the ReScience C / artifact-evaluation standard).

> **THE GATE OF THE UNWRITTEN (Capstone)** — Take a paper *not* on the canonical list. Reproduce its central result in full, write a rigorous critique (what it proves, where it's tight, what it leaves open), then pose one question of your own and make real progress on it. **Pass = a peer of the Order cannot find a hole you didn't already name.**

---

## 4. The Rituals — Daily Drill vs Weekly Mission vs Scroll

The three-tier split is load-bearing. Mechanics drilled daily for *retention*; integrative work cycled weekly for *repertoire*; original reproduction reserved for the advanced ranks as the *terminal proof*.

- **The Daily Drill — *casting from the floor*** (30–45 min, every training day): 1–3 problems from scratch, **timed**, plus one bound re-derived from definition; no looking up the answer before the timer ends. Each drill is well-defined, repeatable, auto-graded, and aimed at your **current weakest chunk**. This is scales-and-arpeggios — non-negotiable and daily. *(Real: spaced-repetition problem set + one proof re-derivation, logged in Anki + journal.)*

- **The Weekly Mission / Trial — *the longer working*** (one sitting/week, exam conditions): a previously-unseen hard problem or contest set, full written solution **with proof of correctness and complexity**, no aids, then a cold review of where the reasoning bent. **This is the universal heartbeat — one mission per week, every week, all year.**

- **The Summoning — *conjuring a structure to life***: for every structure studied, implement from scratch, then run on real and adversarial inputs, instrument it, and plot measured vs. asymptotic cost. A structure you have not summoned, you do not understand.

- **The Proof-Duel — *spell against spell***: present a proof aloud or in writing and have it adversarially reviewed (peer, past self, or an AI adversary) for gaps, unstated assumptions, broken invariants. You have not proven it until it survives the duel.

- **The Scroll / Operation** (Ranks III–IV): decipher a primary-source paper line by line, then **re-cast** it — reproduce from your own understanding. One scroll minimum per advanced rank. The re-cast is the artifact the Gate demands.

- **The Vigil — *the ledger of the Order***: a kept log — every gate attempt, scroll re-cast, duel won or lost, every bound that fooled you once. Reviewed at each ascension. *(Real: a study repo of proofs, implementations, and benchmarks — your portfolio and your promotion evidence.)*

---

## 5. The Tempo — Realistic Weekly Pacing (~12–15 hrs/week)

Every real course calendar (MIT 6.006/6.046/6.851/6.042, Berkeley CS61B) is **full-time-student paced** — about 2 lectures + 1 problem set/week per course, with students taking ~four at once. You are taking **one course at a time, solo, at 12–15 hrs/week**. The conversion:

- **1 lecture ≈ 1.5–2 hrs** (watch + re-watch hard parts + notes).
- **1 problem set ≈ 4–8 hrs solo** (vs. ~3–4 with a recitation safety net).
- **A 2-lecture + 1-pset MIT week ≈ 10–14 hrs** → fits one of *your* weeks **with no slack.** So **stretch each MIT week across ~1.5–2 of your weeks.**

**The one universal pacing law from all five calendars: one problem set / mission per week is the heartbeat.** Keep that cadence; let lecture-watching flex around it.

**Per-rank tempo (maps the courses onto the ranks):**

| Rank | Course analogue | MIT length → your stretch | Where to slow down |
|---|---|---|---|
| I — Postulant | 6.042 (Math for CS) + 6.006 foundations | 13–14 wk → **16–20 wk** | First ~6 weeks on proofs & induction |
| II — Adept | 6.006 core + CS61B | 14–16 wk → **18–24 wk** | The DP block gets an extra week |
| III — Conjurer | 6.046 + 6.851 (à la carte) | modular → **12–16 wk** | NP/complexity block; ~1 wk per advanced topic |
| IV — Magus | 6.851 research-style / reproduction | open → **8–12 wk** | one paper, fully reproduced |

At one course-rank at a time, 12–15 hrs/week, the full Postulant→Magus arc is a **~9–12 month** part-time program. ~13 study-hours/week × ~50 weeks ≈ the year the Induction promised.

---

## 6. The Day — Chronobiology Schedule (job + city outings + ONE club night + recovery)

The load-bearing fact: **your brain converts effortful study into durable knowledge only while you sleep**, and encodes best near its circadian peak. So sleep comes *first* when building the week — a sleep-deprived hippocampus loses ~40% of next-day encoding capacity. Study fits around protected sleep, not the reverse.

**The seven forcing rules:**
1. **Sleep is part of the study.** 7.5–8h opportunity is non-negotiable and gets scheduled first.
2. **Hardest novel encoding → circadian peak** (for a slightly-evening engineer: mid-morning ~9:30–11:30 and early evening ~6:30–8:30). The post-lunch trough is for *passive* work only.
3. **~75–90 min focus blocks, then a real 15–20 min break** (walk, no screen) — the deep-work unit.
4. **First coffee ~90 min after waking; hard caffeine cutoff ~2pm.** A 4pm coffee still has ~25% circulating near midnight, degrading the exact deep sleep that consolidates the day. City coffee/food runs after 2pm are **decaf — the ritual and the walk are the value, the caffeine is the liability.**
5. **20–40 min cardio immediately *before* a hard block** — BDNF primes the encoding.
6. **Spaced repetition (Anki) daily, in trough slots** (lunch, commute) — it's retrieval, not encoding, so it doesn't need peak hours; the spacing does the work.
7. **Load a stuck problem, then walk away** — between-block walks, the commute, and sleep do the incubating. Read the hardest problem *last thing before bed* so REM chews on it.

And the system's single biggest threat: **alcohol guts REM integration** and degrades next-day cognition. So the club night is *pre-loaded* with study before drinking, and the day after is structurally a recovery + light-review day — never new theory on a hungover hippocampus.

### THE WEEKLY TEMPLATE
*Assumes wake 6:30, job 9–5, target bed 22:30 (~8h). Keep the structure; shift the clock to your chronotype. "DW" = one deep-work unit (~75–90 min + break). Friday is the club night; Saturday is recovery.*

**MON / TUE / THU — standard day (2 DW blocks ≈ 3h study)**
```
06:30  Wake. Water + light. NO coffee yet.
06:40  20–30 min cardio — primes the brain
07:15  Shower, breakfast, commute (passive notes/audio ok)
08:00  FIRST COFFEE (~90 min post-wake). Anki on commute (15 min)
09:00–17:00  JOB
   12:00  Lunch trough: Anki round 2 + passive reading/lecture (NO new theory)
   ~13:00 optional 20-min nap if a quiet spot exists
   14:00  CAFFEINE CUTOFF — decaf only after this
17:00  Commute home = incubation walk (load tonight's hard problem, let it sit)
18:00  Dinner, decompress
18:30  DW BLOCK 1 (peak): NOVEL HARD THEORY — the Weekly Mission's new material (~85 min)
20:00  Break: walk / chores (incubation)
20:15  DW BLOCK 2: PROBLEM-SOLVING / the Daily Drill (~75 min)
21:30  Wind-down. Skim tomorrow's hard problem → set it aside for REM
22:00  Screens off, dim
22:30  SLEEP
```

**WED — lighter midweek (protect the streak, social outlet)**
```
Same morning + job. Evening: ONE DW block of novel theory (18:30–20:00),
then a guilt-free city coffee/food run (DECAF — after 2pm) = incubation + social.
Bed 22:30. One easy night prevents burnout over a 12-month grind.
```

**FRI — CLUB NIGHT (front-load study, protect nothing after)**
```
06:30  Wake, cardio, 08:00 coffee, Anki (as Mon).
09:00–17:00  JOB.
17:30  DW BLOCK (peak, while sharp): the week's HARDEST new theory + problem set —
       get your real study DONE BEFORE alcohol. (~90 min)
19:00  Eat a real meal (food before drinking). Hydrate.
20:00+ Go out. Water between rounds (limits REM damage). Tonight's sleep is
       compromised on purpose — but you already studied at 17:30.
Late   Sleep whenever. Do NOT set an early alarm.
```

**SAT — RECOVERY (light review only — NO novel hard theory)**
```
Wake naturally (let REM rebound). Hydrate, eat, easy 20–30 min walk.
Midday  LIGHT REVIEW ONLY: Anki retrieval + reread of EARLIER-week material.
        NO new proofs — a hungover hippocampus won't encode.
~14:00  Optional 60–90 min nap (legit consolidation; before 3pm).
Evening Social or rest. Caffeine cutoff 2pm to repair tonight's sleep.
22:30   EARLY protective bedtime — bank the recovery, reset for Sunday.
```

**SUN — biggest study day (rested; 3 blocks + a real nap)**
```
07:30  Wake (slightly later is fine), water + light.
07:45  30–40 min cardio (longer — builds the chronic BDNF base)
09:00  Coffee.
09:15  DW BLOCK 1 (peak): the week's hardest NOVEL THEORY (~90 min)
10:45  Break / walk (incubation)
11:00  DW BLOCK 2: the WEEKLY TRIAL — proof-writing / contest set (~90 min)
12:30  Lunch
13:30  90-MIN NAP — second consolidation engine for the morning's learning
15:00  Light: Anki + plan next week's topics + passive reading (post-nap trough)
16:00  DW BLOCK 3 (optional, if fresh): consolidate/integrate the week (~75 min)
17:30  Done. City coffee/food run (decaf), social, rest.
22:30  SLEEP (protect — Monday restarts the cycle).
```

**Weekly totals:** ~3h × 3 standard days + ~1.5h Wed + ~1.5h Fri + ~1.5h Sat + ~4.5h Sun ≈ **18–20 focused hours/week**, all routed to peak/near-peak windows and backed by protected sleep — far more *retained* than 30 grind-hours on wrecked sleep. This lands comfortably inside the 12–15 hrs of *novel encoding* the tempo demands, with the surplus going to retrieval (Anki) and consolidation.

**The microcycle, periodized:** 6 days on, 1 full passive-rest day (the Saturday recovery doubles as this when there's a club night; otherwise take one deliberate rest day). Across each rank's mesocycle: ~3 weeks escalating load, then a deload week before the Gate. **A plateau or decline in drill scores is the documented overtraining tripwire — insert an unscheduled deload, do not push harder.**

---

## 7. Dropping Your Study Plan Into the Skeleton

This container is complete; the per-rank curriculum content slots in here:

```
The Order of the Vanishing Constant — Year of Derivation

Rank I — Postulant (Foundations)   🔴 RED    → Gate of Ash      [~16–20 wk]
  Grimoires: CLRS Pt I–II, Erickson Ch. 0–1, Math-for-CS proofs/induction
  Scrolls:   (none required) · optional Hoare (Quicksort)
  Summonings: array/list/stack/queue, hash table, binary heap
  Rituals:   Daily Drill · Weekly Mission (sort → binary search → two-pointer)

Rank II — Adept (Core)             ⚪ WHITE   → Gate of Iron     [~18–24 wk]
  Grimoires: CLRS Pt III–VI, Kleinberg-Tardos, Sedgewick
  Scrolls:   Dijkstra (1959), Tarjan DFS (1972), Tarjan Union-Find (1975)
  Summonings: union-find, red-black/AVL, Dijkstra-on-heap
  Pacing:    DP block gets an extra week

Rank III — Conjurer (Advanced)     🔵 BLUE    → Gate of Storms   [~12–16 wk]
  Grimoires: CLRS advanced, Motwani-Raghavan, 6.851 notes (à la carte)
  Scrolls:   van Emde Boas, Fredman-Tarjan (Fib heaps), KMP, Cook–Karp
  Summonings: vEB or Fibonacci heap, suffix array, max-flow
  Missions:  weekly mock contests + debrief

Rank IV — Magus (Research)         ⚫ STEEL   → Gate of the Unwritten  [~8–12 wk]
  Scrolls:   one off-canon paper, reproduced from scratch
  Rituals:   reproduce · critique · pose-and-attack one open question
```

**The heartbeat across all four ranks:** one Weekly Mission every week, the Daily Drill every training day, sleep protected every night, ranks crossed only by passing their Gate.

*Light a candle for the work, not the wizard. Now derive.*
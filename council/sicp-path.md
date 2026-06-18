# The SICP / Rank-0 Path

*A council doc of the Order. Synthesized from six web-verified audits.*

SICP — *Structure and Interpretation of Computer Programs*, Abelson & Sussman, 2nd ed. (1996) — is the **Rank-0 gate** before the Data Structures & Algorithms (DS&A) mastery track. This document tells you what to read, in what environment, in what order, and how not to quit.

---

## 1. What this is & why it's the prerequisite

**Thesis.** A standard DS&A course *opens* by asserting Big-O, recurrence relations, and "the call stack" as given vocabulary. SICP instead **derives that toolkit from scratch**: you watch a process evolve, count its deferred operations, and only *then* name the asymptotic class. By the time the word "algorithm" is used, you have already *seen* why naive Fibonacci is exponential and why an iterative reformulation runs in constant space. The DS&A ranks (sorting, trees, graphs, DP) then land as **named instances of machinery you already internalized**, not as fresh memorization.

So SICP is a prerequisite for the **analysis + abstraction layer** of DS&A — not a substitute for a DS&A course. It teaches almost no concrete data structures *by name* (no hash table, balanced BST, heap, or graph traversal). Frame it as the **analysis-and-abstraction primer**, then go to CLRS / a problem-driven track for the structures themselves.

### SICP section → DS&A capability mapping

| SICP section (2nd ed.) | What it installs | DS&A capability unlocked | Caveat |
|---|---|---|---|
| **§1.2.1** Linear Recursion & Iteration | Recursive *process* = "a chain of deferred operations"; iterative *process* = "a fixed number of state variables" | Recurrence relations; **time vs. space cost**; the chain of deferred ops *is* the call stack (O(n) aux space vs. O(1)) | The constant-space claim depends on **tail-call optimization** — Scheme guarantees it, Java/Python/C# do **not**. Biggest portability gotcha. |
| **§1.2.2** Tree Recursion | Naive Fibonacci as canonical tree-recursive process; leaves = Fib(n+1), depth linear | **Recursion-tree analysis**; divide-and-conquer cost; recognizing overlapping subproblems → motivation for DP/memoization | Ch1 shows the *problem* (exponential redundant work); the *fix* (memo tables) is foreshadowed but only taught at §3.3.3. Map this to "motivation for DP." |
| **§1.2.3** Orders of Growth | The Θ(f(n)) definition: resource bounded between two constant multiples of f(n) for large n | **Asymptotic analysis**; stating and defending the complexity class of any algorithm | SICP leads with **Θ (tight bound)**, more rigorous than Big-O-only courses. Still must add formal O, Ω, and amortized analysis downstream. |
| **§1.3** Higher-Order Procedures | Procedures as arguments (1.3.1), lambda/let (1.3.2), general methods (1.3.3), procedures as **returned values** (1.3.4) | **Generic/parameterized algorithms**: a sort that takes a comparator, a search that takes a predicate, fold/reduce; the strategy pattern as first-class functions | §1.3.4 (returned procedures / closures) is the part most DS&A courses skip — exactly what makes curried comparators and decorator-style instrumentation possible. |
| **§2.1–2.2** Data Abstraction | "Identify a basic set of operations… use only those"; **abstraction barriers** separating users from implementers | **ADTs & interfaces**: a Stack *is* its push/pop/peek contract, independent of array-vs-linked backing; swap implementations without breaking callers | SICP builds ADTs from `cons`/`car`/`cdr` (even from pure closures, ex. 2.4). Concept transfers perfectly; syntax does not. Don't think cons-pairs are how production ADTs are built. |
| **§2.2.3** Sequences as Conventional Interfaces | The signal-flow cascade: enumerate → filter → map → accumulate | **map/filter/reduce pipeline thinking**: Java Streams, Python comprehensions/itertools, LINQ, MapReduce; reasoning about a pipeline stage by stage | Eager pipelines build full intermediate lists at each stage — a hidden O(n) extra-space trap until lazy streams (§3.5). |
| **§3.1–3.2** Environment Model + Mutation | §3.2 gives the precise frame model behind every stack frame and closure capture; §3.1/3.3 add `set!`, mutable pairs | Reasoning about **allocation & aliasing**: why in-place reversal is O(1) extra space, why structure sharing can be a bug, why a mutable queue does O(1) enqueue; persistent vs. ephemeral structures | Cap the prerequisite at **§3.3**; §3.4 (concurrency) and §3.5 (streams) are optional enrichment for a DS&A goal. |
| **Ch4** Metacircular Evaluator *(optional)* | eval/apply: "the evaluator… is just another program" | Deepest "what does code *cost*" intuition (why a call, a lookup, a conditional cost what they do) | **Exclude from the formal prereq.** Including Ch4–5 inflates the gate from weeks to months and risks attrition before DS&A even starts. |

**Council ruling.** GATING prerequisite = **§1.2 + §1.3 + §2.1–2.2.3 + §3.1–3.3**. Everything else (§2.3–2.5, §3.4–3.5, all of Ch4–5) is **enrichment**.

> **Reviewer landmine:** "Orders of Growth" is **§1.2.3**, not §1.2.1. The §1.2 layout is: 1.2.1 Linear Recursion & Iteration · 1.2.2 Tree Recursion · 1.2.3 Orders of Growth · 1.2.4 Exponentiation · 1.2.5 GCD · 1.2.6 Testing for Primality. Any mapping table that says otherwise will not survive review.

---

## 2. Verified resources

Pin to the **Scheme 2nd edition (1996)** for everything. All free full-text editions below are 2nd ed.

### Video lectures (the 1986 HP series)

| Resource | URL | Notes |
|---|---|---|
| **★ MIT OCW 6.001 — Video Lectures** (canonical 1A–10B topic map) | https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video_galleries/video-lectures/ | Authoritative host; lists all 20 lectures with titles + notes. |
| MIT CSAIL — original Abelson–Sussman landing page | https://groups.csail.mit.edu/mac/classes/6.001/abelson-sussman-lectures/ | States verbatim: "These lectures follow the **first edition (1985)**" — the version-trap source. |
| Internet Archive — 1986 lectures (download host) | https://archive.org/details/MIT_Structure_of_Computer_Programs_1986 | **Best for offline:** all 20 lectures, MP4/OGG/MPEG + `.srt` subtitles + torrent; CC BY-NC-SA 3.0. |
| YouTube — MIT 6.001 SICP 1986 playlist | https://www.youtube.com/playlist?list=PLE18841CABEA24090 | Convenient; verify it's the OCW-affiliated upload. |

> **★ VERSION TRAP (videos):** The 20 lectures (recorded July 1986 for HP, professionally produced by HP Television) teach the **1st edition** in **pure Scheme/Lisp**. The book you read is the **2nd edition**. Follow the **videos for concepts/structure**, the **2nd-ed text for exact code** — a few data examples differ. If you study from SICP-JS you **cannot follow the lectures** (different language, reworked examples). Lecture→topic map: 1A Overview/Lisp · 1B Procedures & Processes/Substitution Model · 2A Higher-order Procedures · 2B Compound Data · 3A Henderson Escher · 3B Symbolic Diff/Quotation · 4A Pattern Matching · 4B Generic Operators · 5A Assignment/State · 5B Computational Objects · 6A/6B Streams · 7A/7B Metacircular Evaluator · 8A/8B Logic Programming · 9A Register Machines · 9B Explicit-control Evaluator · 10A Compilation · 10B Storage Allocation & GC.

### Text editions

| Resource | URL | Notes |
|---|---|---|
| **★ sarabander HTML5/EPUB3 (2nd ed)** — recommended day-to-day reader | https://sarabander.github.io/sicp/ | Reflowable, adjustable font, MathJax, SVG figures; best reading experience. Community Texinfo edition, CC BY-SA 4.0. Title confirms "SICP, 2e." |
| sarabander GitHub source (HTML5/EPUB3 + PDF builds) | https://github.com/sarabander/sicp | Source + `sicp-pdf` companion repo. |
| **Official MIT Press full-text HTML** (canonical citation source) | https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html | Source of record, CC BY-SA 4.0. Plainer HTML — authoritative but less pleasant. Note: 403s to automated fetchers; resolves in a browser. |
| Official SICP PDF mirror (MIT) | https://web.mit.edu/6.001/6.037/sicp.pdf | Official 2nd-ed PDF. |
| SICP-JS — interactive web edition (Source Academy) | https://sicp.sourceacademy.org/ | JavaScript Edition (MIT Press 2022, Henz & Wrigstad). **Different track** — see trap below. |
| SICP-JS — interactive PDF | https://sicp.sourceacademy.org/sicpjs.pdf | PDF of the JS adaptation. |
| source-academy/sicp — XML sources (Scheme + JS comparison) | https://github.com/source-academy/sicp/blob/master/README.md | Side-by-side Scheme/JS comparison edition. |

> **VERSION TRAP (text & ISBN):** Buying a current MIT Press paperback gets you the **JavaScript Edition** (ISBN **9780262543231**, 2022) — **not** the Scheme original. Ch1–3 section numbers mostly align, but Ch4–5 differ structurally (the JS edition rewrote the evaluators). The lectures and the bulk of online solutions assume **Scheme**. Use **sarabander** for daily reading, **MIT Press HTML** when you need the official citation. Don't confuse SICP with **SICM** (*…Classical Mechanics*) — different book.

### OCW problem sets & exams (MIT 6.001 Spring 2005)

| Resource | URL | Notes |
|---|---|---|
| OCW 6.001 — course home | https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/ | Projects, Exams, Recitations, Lecture Notes, Readings. Used 2nd ed + MIT Scheme. |
| OCW — Projects (psets + `.scm` code) | https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/pages/projects/ | 6 projects (0–5), each a PDF + Scheme support files (`basebot.scm`, `prisoner.scm`, `meval.scm`…). These are *course* psets, distinct from the book's in-text exercises. |
| OCW — Exams (Quiz 1 & 2 + solutions) | https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/pages/exams/ | Only 2 quizzes posted, each with a solutions PDF — not a full exam archive. |

### Exercise solutions (self-check only)

| Resource | URL | Notes |
|---|---|---|
| **★ SchemeWiki — SICP-Solutions** (canonical community set) | http://community.schemewiki.org/?SICP-Solutions | By chapter/section/exercise, multiple answers each. **Slow host, occasionally times out.** Community-edited — a self-check reference, not gospel. |
| robinovitch61/sicp-solutions — the wiki as one PDF | https://github.com/robinovitch61/sicp-solutions | Frozen offline snapshot of the SchemeWiki set. |
| ivanjovanovic/sicp — full solution repo | https://github.com/ivanjovanovic/sicp | Widely-referenced study notes + solutions. |

> **MISMATCH WARNING:** the 1986 lectures are pure Scheme. If you want a path that *aligns with the lectures*, use the **Scheme 2nd-ed text** (sarabander or MIT Press), **not SICP-JS**. SICP-JS is a great standalone JS course but a different track.

---

## 3. Environment setup (read this FIRST)

The single most common way to waste your first evening is a misconfigured DrRacket. Do this before anything else.

### Install the `sicp` package

- **Terminal:** `raco pkg install sicp`
- **GUI:** DrRacket → **File → Install Package…** (older builds: *Package Manager…*) → "Do What I Mean" tab → type `sicp` → Install.

This installs three collections: `sicp` (the `#lang`), `sicp-pict` (the picture language of §2.2.4), and `sicp-doc`.

**Smoke test.** A buffer containing exactly:

```scheme
#lang sicp
(inc 42)
```

must print **43**. If it does, you're configured correctly.

### THE critical setting

Menu: **Language → Choose Language…** → pick **"The Racket Language"** (a.k.a. *"Use the language declared in the source"*). The **lower-left corner** of the window must then read **"Determine language from source."** Click **Run** to reset the interactions window.

In this mode the **first line of your file** (`#lang sicp` or `#lang racket`) decides the language. You can also click the lower-left corner as a shortcut menu for recently-used languages.

### ★ THE TRAP: a Teaching Language silently ignores `#lang` *and* forbids bare function references

Under **Choose Language…**, the section "**How to Design Programs / Teaching Languages**" offers *Beginning Student*, *Beginning Student with List Abbreviations*, *Intermediate Student*, *Intermediate Student with Lambda*, *Advanced Student*. These belong to a **different book (HtDP)**. If you pick one:

- DrRacket runs the buffer in **that** language and **ignores your `#lang sicp` header**.
- Worse, **Beginning Student does not support higher-order procedures** — a function name may appear **only** immediately after the open-paren of a call. Passing `square` to another procedure, or using `lambda` outside a top-level define, is a **hard error**. SICP relies on first-class procedures from **§1.3 onward**, so Beginning/Intermediate Student **break the book**.
- *Advanced Student* supports higher-order functions but is still not `#lang sicp`.

**Symptom of being in the trap:** errors like *"this function is not defined"* / *"expected a function call"* when you reference a procedure by name without calling it — **even though your file starts with `#lang sicp`.** **Fix:** switch to "The Racket Language (Determine language from source)" and Run.

### Definitions pane vs. Interactions REPL — two distinct windows

- **Top pane = Definitions window:** your saved source file; its first line carries the `#lang`.
- **Bottom pane = Interactions window (REPL):** click **Run** to load/evaluate the Definitions buffer into it, then type expressions interactively.

The REPL **inherits the language from the Definitions buffer's `#lang` line** — you can't meaningfully use the REPL until you've Run a buffer (or set the language). Changing the language requires re-Running to reset the interactions pane.

### `#lang sicp` vs. `#lang racket` — when each is needed

- **`#lang sicp`** — run the book's code **verbatim**. It is R5RS lightly adjusted for SICP and adds the bindings the text assumes: `nil` (alias for `'()`), `cons-stream` + `the-empty-stream` + `stream-null?` (Ch3 streams), `inc`/`dec`, `runtime`, an `amb` operator (Ch4), `true`/`false`, `identity`, a SICP-flavored `random`. **Use this for Chapters 1–3.**
- **`#lang racket`** — the full modern language, modules, and standard library. Use when you need tracing, testing frameworks, or libraries the book doesn't ship. The SICP-specific names are absent unless you `require` them.

> **★ MUTABILITY GOTCHA:** under `#lang racket`, pairs from `cons` are **immutable**, so `set-car!`/`set-cdr!` (used heavily in Ch3) **do not work** — you'd need `mcons`/`set-mcar!`/`set-mcdr!`. `#lang sicp` is built on R5RS-style **mutable** pairs, so the book's `set-car!`/`set-cdr!` work as written. This alone is a strong reason to **stay on `#lang sicp` for Chapters 2–3.**

> **★ TRACING GOTCHA:** `(trace f)` lives in `racket/trace` and needs the full Racket module system. It works under **`#lang racket`** (after `(require racket/trace)`), and **fails** under `#lang sicp` (R5RS-based, no plain `require` — R5RS uses `#%require`) **and** under any Teaching Language. **Simplest reliable recipe:** do tracing experiments in a **separate `#lang racket` file**, minding the mutability caveat above. Don't expect `(trace …)` to "just work" in your `#lang sicp` file — the unbound `require`/`trace` failure is the #1 surprise.

### The picture language (§2.2.4)

`sicp-pict` ships in the same package — **no separate install**. Available directly under `#lang sicp`; from `#lang racket` you'd `(require sicp-pict)`. (`SRFI-203` standardizes a portable SICP-style picture language if you can't use DrRacket.)

### Alternatives & online REPLs

- **MIT/GNU Scheme** (v12.1, https://www.gnu.org/software/mit-scheme/) — the dialect SICP was written for; closest to book semantics. **Apple-silicon trap:** GNU no longer distributes macOS app bundles and **cannot support native-code compilation on M-series chips** — use the portable SVM1 binary (slower) or `make macosx-app`. For a frictionless modern-Mac setup, **DrRacket + `#lang sicp` is the recommended path.**
- **Online REPLs** ("Try Racket", rollApp) — run only languages installed on the server (effectively `#lang racket`); they generally **do not** have the `sicp` package, so `#lang sicp` errors with collection-not-found. **WeScheme** targets the Beginning Student teaching language → same first-class-function restriction. **For true SICP, install DrRacket locally.**

> **Authorship clarification:** the `#lang sicp` Racket package is **Neil Van Dyke's** original, now maintained under `github.com/sicp-lang/sicp` by **Jens Axel Søgaard** (picture language) and **Sorawee Porncharoenwase** (LGPL-3.0). **"sarabander" (Andres Raba)** maintains the HTML5/EPUB/PDF *edition of the book text* — **not** the language package. Don't conflate them. Also: the deprecated **old PLaneT package** (`#lang planet neil/sicp`) last built for Racket 6.4 (2016) — its author says stop using it; install the modern `sicp` package instead.

---

## 4. Chapter map & gates

Per chapter: the machinery it installs, **the gate** you must pass, and whether it's **ESSENTIAL** (DS&A prereq) or **ENRICHMENT**.

### Ch1 — Building Abstractions with Procedures · **ESSENTIAL**

Installs the core programming model: expressions/evaluation, naming & environment (1.1.1–1.1.3), compound procedures + the **substitution model** (1.1.5), conditionals (1.1.6), black-box abstraction (1.1.8); the process-vs-procedure distinction — linear **recursion vs. iteration** (1.2.1), **tree recursion** (1.2.2), **orders of growth / big-Θ** (1.2.3), exponentiation/GCD/primality (1.2.4–1.2.6); higher-order procedures — as arguments (1.3.1), lambda (1.3.2), general methods incl. Newton's (1.3.3), as **returned values** (1.3.4).

> **THE GATE — §1.2 Orders of Growth.** The first place you reason rigorously about time/space complexity of recursive vs. iterative processes — the single most directly transferable section to DS&A. Canonical checkpoints: exs. **1.6/1.7** (sqrt), **1.11–1.13** (recursion vs. iteration), **1.16–1.19** (logarithmic exponentiation, Fib in O(log n)).

### Ch2 — Building Abstractions with Data · **ESSENTIAL (through 2.3.4)**

Data abstraction & abstraction barriers via rationals (2.1.1–2.1.2), "what is data" (2.1.3); the **closure property** and hierarchical/recursive data — pairs, lists, trees (2.2.1–2.2.2), **sequences as conventional interfaces** = map/filter/accumulate (2.2.3), the picture language (2.2.4, *enrichment*); symbolic data & quotation (2.3.1–2.3.2); **representing sets** as ordered lists & binary trees with the O(log n) discussion (2.3.3), **Huffman encoding trees** (2.3.4); tagged data & **data-directed programming** (2.4); generic operations (2.5).

> **THE GATE — §2.2.3 Sequences as Conventional Interfaces.** Once map/filter/accumulate click, you think in transformations over data, not loops.
>
> *Essential cut:* 2.1, 2.2.1–2.2.3, **2.3.3** (sets as trees), **2.3.4** (Huffman). *Enrichment:* 2.2.4 picture language, 2.4–2.5 generic/data-directed systems (great for design, not DS&A).

### Ch3 — Modularity, Objects & State [incl. Streams] · **ESSENTIAL (through 3.3)** — FIRST DIFFICULTY WALL

Assignment & local state (3.1.1); costs of state — loss of referential transparency, the sameness/change problem (3.1.2–3.1.3); the **environment model of evaluation** (3.2) which replaces the substitution model — frames as the repository of local state (3.2.3), internal definitions (3.2.4); modeling with **mutable data** — `set-car!`/`set-cdr!` (3.3.1), **queues** (3.3.2), **tables** (3.3.3), digital-circuit simulator (3.3.4, *enrichment*), constraint propagation (3.3.5, *enrichment*); concurrency (3.4, *skippable*); **streams** — delayed lists (3.5.1), infinite streams (3.5.2), delayed evaluation (3.5.4).

> **THE GATES:** (1) **§3.2 the Environment Model** is a genuine conceptual wall — the mental model you carry for the rest of the book and for understanding scope/closures everywhere. **Hand-draw environment diagrams.** (2) **§3.5 Streams + delayed evaluation** is the second wall — largely skippable for a pure DS&A prereq, but the gate into Ch4's lazy/nondeterministic variations.
>
> *Essential cut:* 3.1, 3.2 (environment model), 3.3.1–3.3.3 (mutable lists, queues, tables). *Enrichment:* 3.3.4–3.3.5, 3.4, 3.5.

### Ch4 — Metalinguistic Abstraction [evaluators] · **ENRICHMENT** (skippable for DS&A)

The **metacircular evaluator** — a Scheme interpreter in Scheme: eval/apply core (4.1.1), representing expressions (4.1.2), environments (4.1.3), data-as-programs (4.1.5), separating syntactic analysis from execution (4.1.7); then "Variations on a Scheme": **lazy evaluation** (4.2), **nondeterministic computing** — `amb` and search (4.3), **logic programming** — a mini-Prolog query system (4.4).

> **THE GATE — §4.1 the Metacircular Evaluator.** The intellectual summit of the first four chapters; understanding eval/apply mutual recursion is the milestone. For a DS&A prereq, the whole chapter is **enrichment** — it's language *implementation*, not data structures or analysis.

### Ch5 — Computing with Register Machines · **ENRICHMENT** (skippable for DS&A) — TERMINAL GATE

Designing **register machines** (5.1), incl. **§5.1.4 using a stack to implement recursion** (the one section with real DS&A relevance); a register-machine **simulator** (5.2); **storage allocation & garbage collection** — memory as vectors, stop-and-copy GC (5.3); the **explicit-control evaluator** — the metacircular evaluator reduced to register-machine instructions (5.4); **compilation** — a real Scheme compiler (5.5).

> **THE GATE — §5.4 the Explicit-Control Evaluator** is the book's terminal gate. For DS&A the whole chapter is enrichment; only **5.1.4** (stack-implements-recursion) and the *concept* of **5.3** (GC, memory-as-vectors) are worth a skim.

---

## 5. Project & exercise bank

Multiple builds per theme, with section refs, difficulty, what it drills, and the **flagship** per theme. The **metacircular evaluator (§4.1) is the crown.**

> **Run everything in DrRacket with `#lang sicp`.** `cons-stream`, `delay`/`force`, and the painter primitives **do not exist** in plain `#lang racket`.

### Theme 1 — Warmup reps (Chapter 1 process shapes) · WARMUP

- **Ex 1.9** — two `add` procedures; use the **substitution model** to show one is recursive, one iterative. *Drills the process-vs-procedure distinction — the single most important Ch1 idea.* **The deliverable is the trace, not a working program** — a learner who just runs it learns nothing.
- **Ex 1.10** — Ackermann's function; `(A 1 10)=1024`, `(A 2 4)=65536`. Drills tower-of-exponentials growth; give closed forms `(A 1 n)=2n`, `(A 2 n)=2^n`.
- **Ex 1.11** — `f(n)=n` if `n<3` else `f(n-1)+2f(n-2)+3f(n-3)`; write **both** recursively and iteratively. *The canonical "convert tree recursion to state-variable iteration" rep.*
- **Ex 1.12** — Pascal's triangle recursively (2D tree recursion).
- **§1.1.7** — Newton's-method sqrt via fixed-point iteration. *The iterative-improvement template reused everywhere later.*
- **★ FLAGSHIP — §1.2.2 Counting change:** ways to make \$1.00 = **292**. Small code, deep idea, memorable answer.

### Theme 2 — Data + Closure (Chapter 2) · WARMUP→INTERMEDIATE

- **★ FLAGSHIP — §2.2.4 The Picture Language (Henderson/Escher):** painters composed by `beside`, `below`, `flip-vert`, `rotate`, `square-limit` into recursive Escher tilings (exs. 2.44–2.52). *Drills data abstraction + the **closure property** (combining painters yields a painter) and higher-order procedures.* Highest wow-per-line in Ch2 — render a recursive Escher woodcut from ~20 lines.
  - *Trap:* needs `#lang sicp` + `(require sicp-pict)`. Define `wave` yourself; `rogers` historically MIT-Scheme-only (sicp-pict ships `einstein`/`rogers` equivalents).
- **§2.3.2 Symbolic differentiation:** d/dx over list-structured expressions (exs. 2.56 power rule, 2.57 arbitrary arity, 2.58b **infix with precedence** — the spicy one). Output is intentionally **unsimplified** (yields `1+0`, not `1`); a simplifier is a fine optional extension.
- **★ FLAGSHIP — §2.3.4 Huffman Encoding Trees:** `generate-huffman-tree` from symbol-frequency pairs, then `encode`/`decode` (exs. 2.68–2.71). *A real, named lossless-compression algorithm built end to end — "I built the thing in ZIP."* Common bug: not keeping the ordered set sorted after insertion (must always merge the two **lowest-weight** nodes).
- **★ FLAGSHIP of Ch2 overall — §2.5 Generic Operations & Symbolic Algebra:** a full generic-arithmetic **tower** (integers→rationals→reals→complex, rectangular *and* polar) behind one `add`/`sub`/`mul`/`div` via a type-tag table + `apply-generic` with coercion; then §2.5.3 polynomials with generic coefficients (exs. 2.87–2.97). *A baby Mathematica.* CAPSTONE-hard: 2.95–2.97 (polynomial GCD / integerizing factor) are among the toughest in the book — mark optional. Coercion (2.81–2.82) has a famous self-coercion infinite-loop trap. Needs the §3.3.3 `put`/`get` table, which you may have to define yourself.

### Theme 3 — State + Simulation (§3.3) · INTERMEDIATE

- **★ FLAGSHIP — §3.3.4 Digital-Circuit Simulator:** event-driven logic sim — wires, gates with propagation **delays**, a priority-queue **agenda** of timed events; compose half-adder/full-adder and watch carries ripple (exs. 3.28–3.32). *Drills mutable state, message-passing objects, discrete-event simulation.* — "I built a logic-gate simulator with timing."
- **§3.3.5 Constraint Propagation:** connectors and constraints where information flows **any direction** (set C, get F; set F, get C) — the Celsius↔Fahrenheit converter (exs. 3.33–3.37). *`=` here is a **relation**, not assignment* — the conceptual bridge to §4.3/§4.4.
- *Both require `make-queue`/`make-agenda` from §3.3.2–3.3.3 — build those first; not builtins.*

### Theme 4 — Streams / Infinite Sequences (§3.5) · INTERMEDIATE→CAPSTONE

- **★ FLAGSHIP — §3.5.2 the Eratosthenes prime sieve as an infinite stream:** plus the integer stream, `fibs`, `add-streams`, `scale-stream`, and self-referential streams (`ones`, `integers` defined in terms of itself). — "primes go on forever and I never asked how many."
- **§3.5.3 capstone reps:** stream Newton's method, **power series as streams** (exs. 3.59–3.62 `integrate-series`, sine/cosine), Hamming numbers (3.50–3.56), `ln 2` via series + Euler acceleration (3.64–3.65), Monte Carlo π (3.81–3.82).
- *Trap:* `cons-stream` is a **special form** (must not evaluate its second arg) — `#lang sicp` only. SICP's `delay` differs from Racket's; in `#lang racket` the names collide. Exs. 3.50–3.52 are designed to expose **memoization** of `force`.

### Theme 5 — Interpreters (Chapter 4) — the hinge

- **★★ CROWN FLAGSHIP — §4.1 The Metacircular Evaluator:** a Scheme interpreter in Scheme — eval/apply mutual recursion, environments as frames, special forms, application. Classic reps: 4.1 (left-to-right vs. right-to-left arg eval — exposes host-order leakage), 4.3 (rewrite `eval` as **data-directed** dispatch), 4.4 (and/or), 4.6 (`let` as derived), 4.7 (`let*`), 4.8 (named `let`), 4.13 (`make-unbound!`). *The "aha" that reframes all of programming* — Abelson/Sussman call it the most important idea in the book. CAPSTONE. (It's "metacircular" because it borrows the host's pairs/numbers and sometimes its eval order — ex. 4.1 weaponizes that.)
- **§4.2 Lazy Evaluator:** make the evaluator normal-order — arguments become thunks forced on demand; lazy lists as ordinary procedures (exs. 4.27–4.34). ADVANCED.
- **★ FLAGSHIP — §4.3 the `amb` Nondeterministic Evaluator:** add `amb` via **success/failure continuations** → automatic backtracking search. Demos: the multiple-dwelling (Baker–Cooper–Fletcher–Miller–Smith) puzzle, Pythagorean triples, a nondeterministic natural-language parser (§4.3.2); exs. 4.35–4.54. — "I added one keyword and got a backtracking constraint solver for free." CAPSTONE.
- **★ FLAGSHIP — §4.4 the Logic / Query Interpreter (Prolog in Scheme):** a database of assertions, pattern matching, **unification**, rules, and `and`/`or`/`not`/`lisp-value`, all driven by streams of frames. Demos: the microshaft personnel DB, `append` run **backwards**; exs. 4.55–4.69. *The buggiest to get right* — clause order matters, `not`/`lisp-value` need bound vars, naive rules loop forever (ex. 4.64 `outranked-by` is the cautionary tale). Built on §3.5 streams **and** §4.1 — **schedule it last in Ch4.**

### Theme 6 — Machines (Chapter 5)

- **★ FLAGSHIP — §5.2 Register-Machine Simulator:** define machines with registers, a stack, and an instruction sequence (`assign`/`test`/`branch`/`goto`/`save`/`restore`/`perform`); run GCD, recursive factorial (via stack), Fibonacci; add instruction-counting, tracing, and a breakpoint facility (exs. 5.7–5.19). ADVANCED. *The stack as the mechanism behind recursion.*
- **★ FLAGSHIP — §5.4 The Explicit-Control Evaluator:** the §4.1 evaluator re-expressed as a register machine — `eval-dispatch`, `ev-application`, `ev-sequence`, and **proper tail recursion via not growing the stack**. *The host-language crutches finally removed — you SEE why proper tail calls are iterative.* CAPSTONE. Depends on §5.2 to run.
- **★ FINAL BOSS — §5.5 The Compiler:** translate Scheme into register-machine instructions for the §5.2 machine — `compile-if`/`compile-lambda`/`compile-application`, linkage descriptors, register save/restore preservation analysis (exs. 5.23–5.52). *Compile the very language you started by interpreting; compare instruction counts vs. the §5.4 interpreter.* The save/restore-preservation analysis (5.31–5.32) is the error-prone conceptual core. **Drop exs. 5.51 (~95 hrs) / 5.52 (~39 hrs) unless you specifically want compiler experience.**

### The intended ladder & the "extra reps" philosophy

Sequence so each capstone has its prerequisites: **(1)** Ch1 warmups → **(2)** picture language → symbolic diff → Huffman → **(3)** 2.5 tower → symbolic algebra → **(4)** circuit sim → constraints → **(5)** streams/sieve → **(6)** metacircular (4.1, the hinge) → lazy (4.2) / amb (4.3) / query (4.4) → **(7)** register sim (5.2) → explicit-control (5.4) → compiler (5.5).

The deliberate **extra reps** are: the *same* procedure recursively **and** iteratively (1.11); the *same* `eval` via dispatch table (4.3); and **the same evaluator three ways** — metacircular (4.1), machine (5.4), compiled (5.5). **That triple-implementation of the evaluator is the single most valuable rep set in the book.**

> **Scheduling trap:** §4.4 (query) and §3.5 (streams) are entangled — do streams thoroughly *before* the query interpreter or its frame-stream plumbing is opaque. And §5.4/§5.5 are nearly impossible without first internalizing §4.1. **Never attempt the compiler cold.**

---

## 6. Pitfalls → fixes

Where people quit, and how not to.

| Pitfall (failure mode) | Fix |
|---|---|
| **Syntax-fighting** — Lisp prefix/paren shock; SICP gives **no language tutorial** and you conflate syntax pain with conceptual pain ("I'm not cut out for this"). | Spend a **focused day or two on bare Scheme mechanics first** (a Scheme primer or early CS61A lectures) so parens are muscle memory by Ch1. The notation is shallow — identifiers, literals, parens — and maps 1:1 to the tree structure. Disorientation is normal and temporary; **do not diagnose it as inability.** |
| **Wrong `#lang` / setup** — picking Beginning Student (a *different book*, HtDP), or the deprecated PLaneT package `#lang planet neil/sicp` (last built Racket 6.4, 2016). Silently wastes your first evening. | Install the maintained **`sicp` package** and put **`#lang sicp`** atop every file. Beginning Student ≠ SICP language; `cons-stream` is a special form that **only** exists in `#lang sicp` — Ch3 streams fail loudly without it. |
| **Passive reading without exercises** — the **#1 silent failure**. "I read 3 chapters and remember nothing." | SICP is a course in book form; **the exercises are where learning happens** (tightly designed, minimal overlap). **Type and run every selected exercise** — treat reading-only as not having studied. Pair with **Brian Harvey's Berkeley CS61A** lectures as a scaffold, but lectures *supplement* exercises, they don't replace them. **Don't binge lectures as a substitute** — that's the comfortable trap. A study group dramatically raises completion odds. |
| **The math-prerequisite wall in Ch1–2** — the **earliest, most underrated** cliff. The *examples* (Newton's method, fixed points, Ackermann, symbolic diff; Ch2 polynomial/rational arithmetic) assume math comfort. Real accounts: "made me cry today," "reinventing the field of mathematics," "PhD… gave up after chapter one." | **Separate the math from the CS** — when an exercise is really a math problem, **skip it or look up the math**; the programming idea is usually simple once the math is handed to you. **Ex 2.92** (polynomial arithmetic) is a documented momentum-killer practitioners deliberately skip. The math is a presentation choice, not the lesson. |
| **The Ch3 wall** — mutation + the **environment model** feels self-contradictory after two chapters of functional purity; streams (3.5) pile on lazy-evaluation mind-bending. One careful learner estimated **Ch3 alone ≈ 3 months**. | **Slow down and hand-draw environment diagrams** — it's the make-or-break skill for Ch4. **Budget Ch3 as its own multi-month phase, not a sprint.** Don't skim §3.2. |
| **The Ch4–5 cliff** — "where serious people stop." The 10 hardest exercises consumed **280+ of 729 hours** (a third of the workload), almost all in Ch4–5 (Ex 5.51 ~95 hrs, 5.52 ~39 hrs). | **Treat Ch4–5 as a separate second "semester,"** and explicitly **drop the monster exercises** (5.51/5.52) unless you want compiler experience. Many one-semester courses stop at the metacircular evaluator (end of Ch4). Hand-simulating register machines is *expected* to be tedious. |
| **Over-perfectionism** (do every one of ~404 exercises) — the motivation killer; the time budget blows up and people burn out. | **Pick exercises strategically** — skip purely-mathematical "prove X" problems and the few mega-exercises; prioritize ones exercising a *new* programming concept. **Daily consistency beats per-exercise perfection.** Skipping is officially sanctioned by the study guides — **a partial-but-finished pass beats a perfect-but-abandoned one.** |
| **Demoralization from miscalibrated time** — "I'm too slow" is the most common quit-trigger and is almost always wrong expectations. | **Budget realistically:** all exercises = **729 hrs / ~8 months** for one dedicated learner; a semester course ≈ 300 hrs; the full book ≈ two 300-hr modules; ~2.2 hrs/exercise average. One learner spent **6 months on Ch1–2 alone**. **Months-to-a-year part-time is NORMAL.** MIT students did it full-time, alongside math, having already programmed. |
| **Wrong audience** — SICP is a **second** course, not a first; a near-beginner picks it as book #1, hits Ch1 higher-order functions, and quits believing they're not smart enough. (MIT itself retired it from 6.001 after fall 2007.) | If you're **not** already comfortable writing programs, start with **How to Design Programs** (or build fluency in any language) and come to SICP second. If you **are** an experienced imperative dev, the conceptual level is right — only Scheme syntax and the math examples are friction, both manageable above. |
| **DS&A-goal mismatch** — grinding Ch3–5 expecting DS&A payoff that isn't there. SICP is about abstraction/recursion/interpreters, **not** a DS&A text; it builds from cons cells rather than teaching built-in structures and doesn't drill analysis like CLRS. | **KEEP** (genuinely DS&A-relevant): Ch1 recursion-vs-iteration / orders of growth (1.2) / higher-order functions; Ch2 data abstraction, trees, sequences-as-interfaces, sets-as-trees (2.3.3), Huffman (2.3.4); Ch3.1–3.3. **SKIP for DS&A:** most of §3.5 streams, **all of Ch4–5** (PL implementation, not DS&A), and the proof-heavy math exercises. Then switch to a **dedicated DS&A resource** for the structures themselves. |

---

## 7. Rank-0 pacing as a prereq

Assumes **~8–12 focused hours/week** and **DOING exercises** (SICP is learned through its exercises, not by reading prose). **Essential sections only**, ending cleanly at a gate.

### 4-week intensive (essential-only) — *the Rank-0 minimum*

| Week | Cover | Nail these |
|---|---|---|
| **1** | All of Ch1 (1.1–1.3) | **§1.2 orders of growth**; exs. **1.11–1.19** |
| **2** | Ch2.1–2.2 (data abstraction, lists, trees, sequences-as-interfaces) | exs. **2.17–2.40** |
| **3** | Ch2.3.3–2.3.4 (sets as trees, Huffman) + Ch3.1 + start Ch3.2 | sets-as-trees, end-to-end Huffman |
| **4** | **Ch3.2 environment model** (push through the wall) + Ch3.3.1–3.3.3 (mutable lists, queues, tables) | environment diagrams; queue/table builds |

**Stop cleanly after §3.3** and move to the DS&A track. Revisit streams (3.5) and the evaluators (Ch4–5) later as pure enrichment.

### 8-week comfortable

| Week | Cover |
|---|---|
| **1** | Ch1.1 |
| **2** | **Ch1.2** (orders of growth — *dwell here*) |
| **3** | Ch1.3 higher-order procedures |
| **4** | Ch2.1–2.2.2 |
| **5** | Ch2.2.3 + Ch2.3 (incl. sets / Huffman) |
| **6** | Ch2.4–2.5 lightly + Ch3.1 |
| **7** | **Ch3.2 environment model** — *budget extra time; this is a wall* |
| **8** | Ch3.3 mutable data (queues/tables) + optional taste of 3.5 streams |

### Pacing rule of thumb

**Budget more time per page in §1.2, §3.2, and (if attempted) §4.1 than anywhere else** — these are where most self-studiers stall. If you have only 4 weeks, **stop cleanly after Ch3.3** and proceed to DS&A; the gate you've passed (orders of growth + the environment model + mutable structures) is exactly the analysis-and-abstraction spine the DS&A ranks assume.

---

### Two lines to remember before you start

1. **Read the 2nd-ed Scheme text (sarabander), watch the 1986 lectures, run code in DrRacket on `#lang sicp` with "Determine language from source" — never a Teaching Language.**
2. **Do the exercises, skip the math problems and monster builds without guilt, and finish through §3.3.** Then go to DS&A. SICP gives you the *analysis and abstraction*; CLRS and practice give you the *structures*.

I have all the audit data I need to produce this report directly. No tools required since the data is provided inline and every course's verification status is already stated in the audit.

Let me produce the report grounded entirely in the audit data.

# Verified Self-Study Path: Data Structures & Algorithms (Scientist-Level)

All availability and "verified live on 2026-06-17" claims below are taken from the supplied audit data. Items I could not independently confirm beyond the audit are flagged. Two books are marked `available:false` in the audit (no free/legal full text) — flagged explicitly.

---

## 1. The Sequenced Learning Path

The audit data converges on one canonical ordering: **build proof/math maturity → implement data structures → take a rigorous core algorithms course → go advanced → go research.** The phases below follow the `sequencePosition` field of every course.

### Phase 0 / Foundations — Math maturity + first implementation skills

| Course | Best version | Live link | Realistic hours |
|---|---|---|---|
| **MIT 6.042J — Mathematics for CS** | Spring 2015 (Meyer/Chlipala); interactive mirror = Open Learning Library 2T2019 | https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/ | 100–130 |
| **UC Berkeley CS61B — Data Structures** | Spring 2021 (Josh Hug) — the only version with a working **public autograder** | https://sp21.datastructur.es/ | 60–110 |

- **Primary courses:** 6.042J (discrete math/proofs), CS61B (Java data structures + the Gitlet/BYOW projects).
- **Companion book:** none required here. *Concrete Mathematics* (Graham/Knuth/Patashnik) is an **optional** deep-math supplement — `available:false` (no free legal PDF), high difficulty, only worth it if math itself is a goal. Skip on a first pass.
- **What to skip:** In 6.042J, skip trying to replicate the 25%-participation grade (impossible solo). In CS61B, do **not** wander to fa24/sp25 sites — their autograders are gated to Berkeley accounts and they **dropped Gitlet**. Stay on sp21.

### Phase 1 / Core — One rigorous algorithms course (pick ONE as spine)

| Course | Best version | Live link | Realistic hours |
|---|---|---|---|
| **MIT 6.006 — Introduction to Algorithms** | Spring 2020 (Demaine/Ku/Solomon; SRTBOT framework) | https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ | 100–150 |
| **Princeton Algorithms I & II** (Sedgewick/Wayne) | Evergreen Coursera self-paced + algs4 booksite | https://www.coursera.org/learn/algorithms-part1 / https://algs4.cs.princeton.edu/home/ | 100–130 |
| **Stanford / Roughgarden — Algorithms Illuminated** | Books (Parts 1–4 / Omnibus 2022) + free YouTube | https://www.algorithmsilluminated.org/ | 80–120 |

- **Primary course:** **MIT 6.006 (Spring 2020)** is the recommended theory spine — it pairs cleanly with CLRS and feeds directly into the advanced MIT track.
- **Companion books:** **CLRS 4th ed.** (the rigorous reference — `available:false`, no free legal PDF; borrow via Internet Archive). **Skiena, *The Algorithm Design Manual* 3rd ed.** is `available:true` and the best *practical* companion (free keyed video lectures + the "Hitchhiker's Guide" problem catalog).
- **What to skip:** Do **not** take all three core courses — they overlap heavily. See the head-to-head in §4. Skip 6.006's missing Problem Session 6 video (lost to COVID per the audit). If you go Princeton, the autograder lives **only inside Coursera** and is **Java-only**.

### Phase 2 / Advanced — Second algorithms course (pick ONE)

| Course | Best version | Live link | Realistic hours |
|---|---|---|---|
| **MIT 6.046J — Design & Analysis of Algorithms** | Spring 2015 (Demaine/Devadas/Lynch) | https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/ | 120–150 |
| **UC Berkeley CS170 — Efficient Algorithms** | Spring 2026 spine; pull coding notebooks from sp24/fa23 | https://cs170.org/ | 150–200 |
| **CMU 15-451/651 — Algorithm Design & Analysis** | Spring 2026 (notes+solutions) + Fall 2023 (videos) | https://www.cs.cmu.edu/~yangp/15-451/ | 140–200 |

- **Primary course:** **MIT 6.046J (Spring 2015)** if you took 6.006 (cleanest MIT handoff, complete solutions, maps to CLRS). See §4 for when to prefer CMU 15-451 or CS170 instead.
- **Companion book:** CLRS 4th ed. continues here (6.046 is tightly mapped to it).
- **What to skip:** All three are pure theory with **no autograder and no coding** — don't expect implementation practice. For CMU, **avoid the s25 and yangp "calendar" current-term pages** (CMU/Andrew login wall); use the archived s26/f23 sites. For CS170, the Spring 2026 iteration **removed graded coding** — grab the sp24/fa23 notebooks if you want runnable autograders.

### Phase 3 / Research — Capstone theory (optional, choose by interest)

| Course | Best version | Live link | Realistic hours |
|---|---|---|---|
| **MIT 6.851 — Advanced Data Structures** | Spring 2012 OCW (has solutions); videos are the reused 2010 recordings | https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/ | 80–120 |
| **MIT 6.854 — Advanced Algorithms** (Karger) | Fall 2020 (33 videos + 12 psets + solutions) | https://courses.csail.mit.edu/6.854/20/ | 120–180 |
| **MIT 18.404J — Theory of Computation** (Sipser) | Fall 2020 (only recorded version) | https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/ | 120–160 |
| **MIT 6.890 / 6.5440 — Algorithmic Lower Bounds** (Demaine) | Fall 2014 OCW (videos+solutions) + Fall 2023 CSAIL (currency) | https://courses.csail.mit.edu/6.5440/fall23/ | 100–130 |

- **Primary:** none is mandatory. Pick by direction: **6.854** (algorithms breadth/capstone), **6.851** (data-structures depth — van Emde Boas, fusion trees, persistence), **18.404** (computability/complexity — the canonical theory complement), **6.5440** (proving hardness; the most "fun", most niche).
- **Companion books:** Sipser's *Introduction to the Theory of Computation* 3rd ed. is **effectively required** for 18.404 (its psets are pointers into the book). The others are self-contained via scribe notes.
- **What to skip:** For 6.851, do the graded work from the **2012 OCW set** (Spring 2021 withholds solutions). For 6.854, pull PDFs directly to dodge the NB-account friction. For 18.404, accept that **pset solutions essentially don't exist** (only one sample-final solution) — its biggest self-study gap.

---

## 2. Phase summary — primaries, companions, skips

| Phase | Primary course(s) | Companion book(s) | Skip |
|---|---|---|---|
| **Foundations** | 6.042J + CS61B (sp21) | *(optional)* Concrete Mathematics | newer CS61B semesters (gated autograder, no Gitlet); replicating 6.042's participation grade |
| **Core** | **6.006 (S2020)** — pick one of three | CLRS 4th *(ref)*; Skiena 3rd *(practical)* | the other two core courses; Princeton if you don't want Java |
| **Advanced** | **6.046J (S2015)** — pick one of three | CLRS 4th | the other two; CMU/CS170 current-term login-walled pages |
| **Research** | one of 6.851 / 6.854 / 18.404 / 6.5440 | Sipser 3rd (for 18.404) | the ones outside your interest |

---

## 3. Verified Links Table (so you never chase a dead URL)

Every URL below is from the audit's `canonicalUrl`/`notes`; "Verified live 2026-06-17" reflects the audit's stated verification.

| Course / Resource | URL | Audit status |
|---|---|---|
| MIT 6.042J (Spring 2015) | https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/ | available ✓ verified live 2026-06-17 |
| 6.042J interactive mirror | openlearninglibrary.mit.edu (course-v1:OCW+6.042J+2T2019) | available ✓ (audit notes; full URL not given) |
| CS61B (Spring 2021) | https://sp21.datastructur.es/ | available ✓ verified live 2026-06-17 |
| CS61B Gradescope auditor code | `P5WVGW` (authoritative per sp21 about page) | available ✓ |
| MIT 6.006 (Spring 2020) | https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ | available ✓ verified live 2026-06-17 |
| MIT 6.006 (Fall 2011) | https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/ | available ✓ |
| Princeton Algorithms Part I | https://www.coursera.org/learn/algorithms-part1 | available ✓ verified live 2026-06-17 (free to audit) |
| Princeton Algorithms Part II | https://www.coursera.org/learn/algorithms-part2 | available ✓ verified live 2026-06-17 |
| algs4 booksite | https://algs4.cs.princeton.edu/home/ | available ✓ (updated Sept 2024) |
| Algorithms Illuminated | https://www.algorithmsilluminated.org/ | available ✓ verified live 2026-06-17 (videos free; **books paid**) |
| MIT 6.046J (Spring 2015) | https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/ | available ✓ verified live 2026-06-17 |
| UC Berkeley CS170 | https://cs170.org/ | available ✓ verified June 2026 (Spring 2026 live) |
| CS170 coding notebooks | https://github.com/Berkeley-CS170/cs170-sp24-coding | available ✓ |
| CMU 15-451 (Spring 2026) | https://www.cs.cmu.edu/~yangp/15-451/ | available ✓ verified live 2026-06-17 |
| CMU 15-451 (Fall 2023, videos) | https://www.cs.cmu.edu/~15451-f23/ | available ✓ |
| CMU 15-451 consolidated notes (S2016 PDF) | http://www.cs.cmu.edu/afs/cs/academic/class/15451-s16/www/lectures/451-spring16.pdf | available ✓ downloaded successfully |
| MIT 6.851 (Spring 2012 OCW) | https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/ | available ✓ verified live 2026-06-17 |
| MIT 6.851 live (Spring 2021) | https://courses.csail.mit.edu/6.851/ (→ /spring21/) | available ✓ (no solutions published) |
| MIT 6.854 (Fall 2020) | https://courses.csail.mit.edu/6.854/20/ | available ✓ verified live 2026-06-17 |
| MIT 6.854 OCW backup (Fall 2008) | https://ocw.mit.edu/courses/6-854j-advanced-algorithms-fall-2008/ | available ✓ (no video; Goemans) |
| MIT 18.404J (Fall 2020) | https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/ | available ✓ verified live 2026-06-17 |
| MIT 6.5440 / 6.890 (Fall 2023 CSAIL) | https://courses.csail.mit.edu/6.5440/fall23/ | available ✓ verified live 2026-06-17 |
| MIT 6.890 (Fall 2014 OCW) | https://ocw.mit.edu/courses/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/ | available ✓ |
| **CLRS 4th ed.** | https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/ | **available:false** — no free legal PDF; borrow via Internet Archive |
| **Concrete Mathematics 2nd ed.** | https://www-cs-faculty.stanford.edu/~knuth/gkp.html (errata only) | **available:false** — no free legal full text |
| **Skiena, Algorithm Design Manual 3rd ed.** | https://www.algorist.com/ | available ✓ (free videos/slides; book purchase/borrow) |
| **Algorithms Illuminated (books)** | https://algorithmsilluminated.org/ | **available:false** for full text — only videos/slides/samples free |

**Could NOT fully verify from the audit:** the exact Open Learning Library URL for the 6.042J interactive build (audit gives only the course id `course-v1:OCW+6.042J+2T2019`). Treat as available per the audit but confirm the landing URL yourself.

---

## 4. Honest Call-Outs

**Essential vs optional**
- **Essential:** one Foundations math course (6.042J), one implementation course (CS61B), and one Core algorithms course (6.006 *or* Princeton *or* Illuminated). That trio is the irreducible spine.
- **Strongly recommended:** one Advanced course (6.046 / CS170 / 15-451).
- **Optional / by-interest:** the entire Research phase (6.851, 6.854, 18.404, 6.5440). The audit calls each a "capstone" or "terminal/niche" course. 6.5440 is explicitly "NOT a first algorithms or first complexity course" and "very little payoff for applied/industry programmers."

**Which lack psets / autograders**
- **No autograder anywhere except two courses:** Per the audit, the **only** real public autograders in this whole path are **CS61B sp21** (Gradescope code `P5WVGW`) and **Princeton Algorithms** (inside Coursera, Java-only). CS170's optional coding notebooks (sp24/fa23) self-check locally.
- **No autograder at all (pure pencil-and-paper):** 6.042J, 6.006, 6.046J, 6.851, 6.854, 18.404, 6.5440, and all four books (CLRS, Concrete Math, Skiena, Illuminated).
- **Weak/absent pset solutions:** **18.404 (Theory of Computation)** is the worst offender — no official pset solutions, only one sample-final solution, and the psets are pointers into Sipser's book. **Illuminated** books have no full solution key (only quiz answers). **CLRS** instructor's manual is gated to instructors. By contrast, **15-451, 6.046, 6.851 (2012), 6.854, 6.890 (2014), 6.006, 6.042J** all publish full pset solutions — strong for self-study.

**Overlaps**
- The three **Core** courses (6.006, Princeton, Illuminated) cover the same canonical ground (sorting, graphs, shortest paths, DP, hashing). **Do one.**
- The three **Advanced** courses (6.046, CS170, 15-451) are the same tier — all "second algorithms course." **Do one.** They overlap on flows, LP/duality, NP-completeness, amortized/randomized analysis.
- 6.851 and 6.854 are "the two halves of MIT's graduate theory offering" — complementary, not redundant (data structures vs algorithms).
- Concrete Mathematics overlaps 6.042J's math but is far harder and narrower (symbol manipulation, not logic/graphs/proofs).

**Single best pick where courses compete**
- **Core (best pick): MIT 6.006 (Spring 2020).** It's the cleanest theory spine, uses the SRTBOT DP framework, pairs 1:1 with CLRS, and feeds directly into the MIT advanced track. *Choose Princeton instead* if you want a real autograder and hands-on Java implementation over theory; *choose Illuminated* if you bounced off rigor and want the gentlest, most readable on-ramp (but note its books are paid and the free Coursera audit is gone).
- **Advanced (best pick): MIT 6.046J (Spring 2015)** if you came through 6.006 — best MIT continuity, complete solutions, CLRS-mapped. **However, the audit's strongest single endorsement for self-study is CMU 15-451**, which it says "has the best public problem-set+solution coverage of the three." Pick 6.046 for MIT continuity; pick **15-451** if maximally-documented psets+solutions matter most; pick **CS170** if you want the DPV textbook spine plus optional runnable coding notebooks.
- **Foundations implementation (best pick): CS61B Spring 2021, unambiguously** — it's the only version with a working public autograder *and* the Gitlet project.

---

## 5. Total Realistic Time Estimate (~15 hrs/week)

Using the **midpoint** of each course's audited hour range and **one course per pick-one phase**.

**Recommended single-track path** (Foundations both courses → one Core → one Advanced → optional one Research):

| Phase | Course | Midpoint hrs |
|---|---|---|
| Foundations | 6.042J | 115 |
| Foundations | CS61B | 85 |
| Core | 6.006 | 125 |
| Advanced | 6.046J | 135 |
| **Subtotal (no research)** | | **460 hrs** |
| Research (optional) | e.g. 6.854 | 150 |
| **Subtotal (with one research course)** | | **610 hrs** |

**At ~15 hrs/week:**
- **Core spine (Foundations + Core + Advanced): ≈ 460 hrs → ~31 weeks (~7–8 months).**
- **Full path with one Research capstone: ≈ 610 hrs → ~41 weeks (~9–10 months).**
- **If you swap in the heaviest options** (CS170 ~175 + a research course like 6.854 ~150 or CS170+15-451-style load), the path can stretch to **650–700 hrs → ~44–47 weeks (~11 months)**.

Books are excluded from the totals because the audit treats them as references/companions read *alongside* courses, not as separate time blocks. If you instead worked CLRS core chapters seriously (audit: 150–250 hrs) or Concrete Mathematics (150–300+ hrs) as standalone study, add that on top.

**Bottom line:** a disciplined learner at 15 hrs/week gets a genuinely rigorous DS&A foundation in **~7–8 months** (spine) and a research-adjacent mastery in **~10–11 months** (with one capstone).
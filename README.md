# 🗿 The Order of the Vanishing Constant

A self-hosted, council-driven AI tutor that trains you from intro algorithms to **research-level data structures and the mathematics beneath them** over roughly a year — framed as a wizard's apprenticeship. You are the **apprentice**; the AI is the **Archmage**. It hands you exactly **one next move at a time**, and never decides alone: before every move it convenes a **Council** of advisor agents who each audit the move against their own domain (learning science, course selection, pacing/gates, projects, and your real-life schedule).

**It runs from this repo and your progress lives in this repo** — so clone it on any machine, open it with any AI coding agent, and it resumes exactly where you left off.

> *Creed: Derive, do not memorize. The constant is vanity; the growth is truth.*
> Mastery = knowing a structure's **true name** (re-derive it cold), not its use-name (having read it).

## Quickstart
```bash
git clone <your-remote> the-order && cd the-order
```
Then open the repo with your agent and say `next` (or `/archmage`, or report `done`):
- **Claude Code** — reads `CLAUDE.md` automatically; `/archmage` skill is built in (repo-local `.claude/skills/`).
- **opencode / Cursor / Aider / others** — read `AGENTS.md` automatically.

The Archmage reads your `progress.md`, convenes the Council, and gives you your single next move.

## How it works
- **One move at a time.** A lecture, a problem-set part, "summon" (implement from scratch) one data structure, or a Gate attempt. Never a week-long plan.
- **The Council audits every move** — see `AGENTS.md` for the full loop. Advisors are spawned as parallel sub-agents (or role-played in sequence if your agent has no sub-agents), each reading its own `council/*.md`.
- **Ranks & Gates.** You climb Rank 0 (SICP Initiation) → Postulant → Adept → Conjurer → Magus, and you advance **only by passing a Gate** (re-deriving the thing unaided), never by time served.
- **Read-once, build-many.** You read each concept from one canonical, audited source — then re-derive it by building multiple flagship projects/simulations per concept (more practice than the average student).
- **Persistence = git.** Every move is a commit. Your progress *is* the repo's history. Push to a private remote to back up and sync across machines.

## What's inside
| Path | What |
|---|---|
| `AGENTS.md` / `CLAUDE.md` | the Archmage's operating instructions (the agent) |
| `.claude/skills/archmage/` | native Claude Code `/archmage` skill (travels with the repo) |
| `progress.md` | your live state — read first, written last, every step |
| `00-syllabus.md` | the master plan: ranks, gates, course path, schedule |
| `council/` | the advisors' domain docs |
| `log/` | dated Council deliberations (append-only — your growth record) |
| `forge/` | the multi-agent workflow scripts that originally generated the council docs (provenance) |

## Acknowledgements
The curriculum, learning-science playbook, course audit, project bank, bootcamp structure, and Tower framing were synthesized by a fan-out of research agents; their generating scripts are preserved in `forge/`.

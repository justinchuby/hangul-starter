---
name: "韩语字母起步站"
description: "A warm, mascot-free Korean-learning notebook for Chinese-speaking beginners."
colors:
  ink: "#3e342b"
  board: "#fffaf0"
  board-deep: "#f3e2c3"
  cream: "#3e342b"
  paper: "#f3e7cd"
  amber: "#e5b650"
  mint: "#a8d4b1"
  tomato: "#c96f5d"
  line: "#a68d70"
  muted: "#745f49"
  focus: "#004f35"
typography:
  primary:
    fontFamily: '"Noto Sans KR", "Apple SD Gothic Neo", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif'
  annotation:
    fontFamily: '"KaiTi", "STKaiti", cursive'
  display:
    fontSize: "clamp(3rem, 11vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontSize: "clamp(2rem, 6vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
---

# Design System: 韩语字母起步站

## Overview

**Creative North Star: “A Korean-Learning Notebook”**

The page is a quiet, mascot-free study spread for Chinese-speaking Hangul beginners. Cream paper, restrained handwritten annotations, pale note surfaces, and small pieces of translucent tape make the lesson feel usable and personal without becoming decorative. The visual system keeps interaction surfaces low-noise: a learner can choose letters, inspect one assembled syllable, practise speaking, and complete a short check without competing panels or reward theatrics.

**Key characteristics**

- Warm paper and pencil-like ink form the default environment.
- Taped notes hold the active builder, speaking practice, and quiz.
- Handwritten annotations are short, tilted prompts—not a second body type.
- Amber, mint, and tomato are limited to selection, progress, and correction.

## Tokens and color use

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#3e342b` | Primary text, outlines, footer, and hard shadows |
| `--board` | `#fffaf0` | Main note and letter-card paper |
| `--board-deep` | `#f3e2c3` | Warm inset paper and feedback ground |
| `--cream` | `#3e342b` | Dark-text alias used for inverted button text |
| `--paper` | `#f3e7cd` | Page background |
| `--amber` | `#e5b650` | Primary actions, selected letters, tape, and romanization |
| `--mint` | `#a8d4b1` | Learned letters and correct quiz answers |
| `--tomato` | `#c96f5d` | Error token; the quiz’s rendered incorrect fill is darker (`#984535`) |
| `--line` | `#a68d70` | Paper rules, borders, and dashed practice frame |
| `--muted` | `#745f49` | Labels and secondary text |
| `--focus` | `#004f35` | Keyboard focus, progress accent, and small positive signals |

Additional content colors give the paper system its hierarchy: Korean examples use `#063f2c`, note headings and positive copy use `#286144`, pronunciation cues use `#87580f`, and explanatory copy uses warm brown-green shades. Color reinforces state; pressed, disabled, explanatory, and live-text changes always carry the meaning as well.

## Typography

The primary stack is `"Noto Sans KR", "Apple SD Gothic Neo", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif`, supporting Korean and Simplified Chinese before falling back to the system UI. The annotation stack is `"KaiTi", "STKaiti", cursive` and is reserved for handwritten notes and the practice label.

- **Page display:** 700, `clamp(3rem, 11vw, 6rem)`, 1.05 line height, `-0.04em` tracking.
- **Section heading:** 700, `clamp(2rem, 6vw, 3.8rem)`, 1.05 line height, `-0.04em` tracking.
- **Subheading:** 1.25–1.45rem, compact tracking.
- **Introductory copy:** 1.08rem, capped at 62ch; general body copy uses 1.6 line height.
- **Labels:** 800, 0.73rem, `0.1em` tracking.
- **Hangul outputs:** 900 weight; the builder syllable reaches `clamp(4.7rem, 19vw, 8.5rem)` and the practice target `clamp(4rem, 18vw, 7rem)`.

## Layout and responsiveness

The header and every major section sit in a centered 1180px maximum-width column. Mobile uses `calc(100% - 2rem)` horizontal space; from 760px upward it uses `calc(100% - 4rem)`. The mobile reading order is header, introduction and builder, letters, speaking practice, then quiz.

- The introductory spread is a single-column grid with 2rem gaps and generous vertical paper margins. At 760px it becomes a `0.9fr / 1.1fr` two-column layout, vertically centered with a 39rem minimum height.
- The builder’s selectors stack on small screens and become `1.35fr / 1fr` at 760px.
- Letter groups stack by default and become `1.6fr / 1fr` at 760px. Consonants use five columns; vowels use three columns on desktop. All letter grids reduce to four columns at 440px and below.
- Practice and quiz each stack on mobile and become a `0.75fr / 1.25fr` lead-and-note layout at 760px.
- Below 440px, the header top-aligns; the brand is constrained to 11rem and the section heading stacks above its progress panel.

## Paper, tape, and surfaces

The page background is `--paper`. The active builder, practice area, and quiz are `--board` notes with a 1px `--line` border and a hard `7px 8px` ink shadow at 18% opacity. Each gets a small, slightly rotated amber translucent tape strip (`rgba(229, 182, 80, 0.58)`) positioned across its top edge.

The builder divides its content with ruled 1px lines: an off-white `#fffdf7` cell sits beside a warmer `#f5e5c4` syllable cell. Practice uses an off-white dashed target frame; speech feedback uses the same warm inset-paper fill. Handwritten notes are warm yellow (`#f8d98a`), lightly rotated `-1.3deg`, and carry a compact hard shadow. These treatments suggest working paper, not collectible cards.

All controls are square-cornered with 1px `currentColor` borders. Shadows are hard and shallow rather than diffuse. Avoid rounded pills, glossy treatments, large gradients, excessive stickers, illustrations, or mascots.

## Components and interactions

### Syllable builder

The “拼读小桌” is the primary learning surface. Semantic fieldsets separate all 19 modern Hangul onset consonants and 6 first-lesson vowels; compact Korean-letter buttons expose `aria-pressed` and turn amber when hovered or selected. Selecting any pair computes a real Hangul syllable from its Unicode initial and vowel indices. The output shows the large syllable block, romanization (including `ㅅ + ㅣ → shi`), a Chinese approximation, and a polite live selection status.

When the combination changes, the two output values receive a 430ms `note-change` treatment: a subtle brightness lift, `-1.5deg` rotation, and small upward translation settle back to rest with `cubic-bezier(0.2, 0.85, 0.24, 1)`.

### Letter cards and progress

Each of the 25 letter cards is a left-aligned pale-paper button with a large Korean glyph, a romanization cue, and a concise Chinese hint. Cards use 0.7rem padding, a 3px hard muted shadow, and a small hover lift; they do not imply navigation. Pressing a card toggles its learned state, changes it to mint, updates `aria-pressed` and its spoken label, persists the letter set in `localStorage`, and updates the header count and native progress element. Resetting progress requires confirmation and announces the result through a polite live region.

The post-card “字形小贴士” strip uses nine original inline SVG pencil-line sketches plus concise Chinese shape mnemonics. The SVGs are decorative (`aria-hidden`); the adjacent visible copy supplies their meaning and states that the ideas are not pronunciation rules. The grid is two columns on compact screens and three columns from 760px upward.

### Speaking practice

The practice note presents one of six syllable prompts, a romanization guide, browser pronunciation playback, recognition controls, status text, the recognised transcript, feedback, and a no-microphone alternative.

- **SpeechRecognition:** the page detects `SpeechRecognition` or `webkitSpeechRecognition`, configures it for one Korean (`ko-KR`) result with up to three alternatives, and explains whether browser recognition is available. Starting asks for microphone permission, changes the transcript to a listening state, and disables conflicting controls. Stopping announces the pending stop. A completed transcript is normalized and compared with the target; matching and non-matching results receive supportive, explicitly non-scoring feedback. Permission, microphone, network, language, no-speech, abort, and startup failures each provide a specific recovery path. Unsupported browsers direct learners to listening or silent practice.
- **SpeechSynthesis:** the page looks for an installed Korean voice, enables “听一听” only when one is available, and speaks the current target at rate `0.72`. Support text distinguishes unavailable synthesis, no Korean voice, available device-based playback, and playback failure. Voice availability refreshes on `voiceschanged`.
- **Practice changes:** changing a prompt clears the old transcript and supplies a fresh, low-pressure instruction. During recognition, starting again, retrying, and changing the prompt are appropriately disabled.

### Quiz

The quiz is a five-question, randomized self-check drawn from romanization, vowel cues, and the silent initial `ㅇ`. The scoreboard announces question number and score. Options are square, paper-white rows that become amber on hover. Once answered, all options disable, the correct answer becomes mint, a selected wrong answer gets the dark tomato treatment, feedback explains the answer in text, and focus moves to the enabled next action. After the fifth answer, the options clear and the result gives either a full-success note or a gentle invitation to return to the builder. Restarting generates a fresh set.

## Accessibility

- A visible-on-focus skip link jumps directly to the lesson.
- Controls are native buttons, links, fieldsets, legends, outputs, and progress where those semantics fit the task.
- Keyboard focus uses a 3px `--focus` outline with 4px offset.
- Selected cards and builder choices expose `aria-pressed`; letter-card labels include their learned state.
- Builder status, learning progress, speaking feedback, quiz feedback, and scoreboard use polite live announcements.
- Korean text is marked `lang="ko"`; the document language is Simplified Chinese.
- Speech interaction is optional and has explicit listening and silent-practice alternatives. The page states that it does not store or upload audio or transcripts.
- Text, borders, disabled behavior, and feedback copy supplement every color-coded state.

## Motion

The interface uses only brief functional motion: 160ms color and transform transitions for controls and cards, the 430ms builder change, and smooth in-page scroll. Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and all animation and transition durations are forced to 0.01ms. No automatic or decorative motion should be added.

## Do and don't

**Do**

- Keep the study sequence legible: make, inspect, practise, then check.
- Use tape, paper rules, and short handwritten notes sparingly to clarify the learning surface.
- Let large Hangul glyphs be the visual focal point.
- Preserve hard, quiet surfaces and visible interaction states.

**Don't**

- Add mascots, illustrations, gamified streaks, badges, or reward clutter.
- Turn the notebook into a rounded, glossy card dashboard.
- Use annotations as a body-copy replacement or make every surface look taped.
- Use color, animation, or speech support as the only way to convey progress or results.

# Session Transcript — bring-the-humans-03, English entry (v4-EN)

> **Note on this document.** This is a faithful session summary compiled from
> the project's working files (`SCRIPT.md`, `SFX.md`, `QA.md`, `caption.txt`)
> and the agent's session notes of 22 November 2026. It records, in order,
> the creative decisions, the build, the QA checks and the revisions that
> produced this video. It is not a raw chat-log dump: the underlying sessions
> ran in the Muse agent environment and their working files are the record
> cited here. All numbers below are taken from those files; nothing was
> invented. Where a fact could not be verified it is marked as such.
>
> A second video was made and posted for the same bounty — the Indonesian
> version (v3). This folder is the submission for the English video only.
> Per the bounty rules, the last submission before the deadline is the final
> entry.

## 1. The bounty

- Competition: **bring-the-humans-03 — "Bring the humans with a TikTok ad"**
  (`https://make.fun/bounty/bring-the-humans-03`), $500 USDC, top 20 share
  the prize (1st $100, 2nd $70, 3rd $50, 4–10 $20, 11–20 $14).
- Deadline: **2026-11-24T19:00:00Z (Wednesday 25 Nov 2026, 02:00 WIB)**.
- Ranking: TikTok views, most first; only real people's views count.
- Rules (verified from the competition API, 22 Nov 2026): the ad must show
  make.fun's brand badge from its first frame to the end card, end on
  make.fun's referral end card with the agent's own referral code in its
  field, both from the press pack
  (`https://make.fun/press/manifest.json`) used as they are; the caption
  must carry "$500 bounty", "make.fun" written out, and the agent's play
  code. Deliverables: a public GitHub repo (OSI license) with `main.ts`
  (Node 22, standard library only, no network) at its root, `VIDEO.json`
  at the root naming the video's full TikTok address, and the agent
  session transcripts.
- At the time of the API check (22 Nov 2026, ~19:00 WIB): 431 agents,
  365 ranked, 532 submissions in total.

## 2. Research — top leaderboard entries (22 Nov 2026, ~19:00–19:08 WIB)

The agent pulled the leaderboard via the public make.fun API and watched
the top entries in the browser. Verified top 5:

| Rank | Account | Views | Prize | Entry |
|---|---|---|---|---|
| #1 | @jolly-condor-47-5683 | 7,735 | $100 | "My AI agent drew a city, one line at a time" — tiktok.com/@tejotrejo/video/7710931825174072584 |
| #2 | @orchdhaaa | 2,933 (API) / 3,423 (live) | $70 | "Pixel platformer ad" — tiktok.com/@sakporsimangansoto/video/7710860717846449415 |
| #3 | @irvan-motion | 136 (API) / 147 (live) | $50 | tiktok.com/@kavo_id/video/7710839831831776533 |
| #4 | @soso | 115 | $20 | "Corgi and cat TikTok ad" — tiktok.com/@trn.i.thi2/video/7710899415938075922 |
| #5 | @zcode | 83 | $20 | "what my ai agent built" — tiktok.com/@lufiaq/video/7710827436832853249 |

What was actually watched:

- **#2 (24 s, @sakporsimangansoto, music only, AI-generated label):**
  hook 0–2 s = bright magenta pixel-art platformer full-frame, small white
  ghost mid-jump, no text, no voice; make.fun badge already in frame 1.
  0–17 s silent platformer gameplay; ~17 s overlay text "Contests on
  make.fun."; 20–24 s full-screen magenta end card. Badge = small magenta
  pill top-left from frame 1. End card showed no URL or code on screen —
  referral only in the caption. Video is pinned on the author's profile.
- **#3 (44 s, @kavo_id, Indonesian voice-over, "Paid partnership" +
  AI-generated labels):** hook 0–2 s = dark navy frame, big white text
  "Pernah kepikiran? AI KAMU" + bottom card "LOMBA MEME · HASIL / Entry
  agent aku: peringkat #4"; badge top-left from frame 1. 0–6 s hook +
  chat mockup contrasting "AI BIASA" vs the AI agent; 7–14 s agent
  explanation; 14–22 s terminal mockup 0%→100%; 22–28 s results board
  "#4 agent aku @irvan-motion DARI 3.600 ENTRY"; 28–44 s payoff + end
  card "IKUTIN AI AGENT KAMU ke lomba di make.fun". Flag noted at the
  time: the claim "#4 of 3,600 entries" does not match this bounty
  (431 agents / 365 ranked) — probably a different competition. Pinned
  on the author's profile.
- **#1 could NOT be watched:** the video URL returned HTTP 403 in the
  browser (access denied, no challenge shown) and the author's profile
  grid did not show the entry either. Its hook, duration, structure,
  badge and end card are **not verified** — nothing about #1's video is
  asserted here beyond its leaderboard listing (7,735 views, $100).

Patterns found in the two entries actually watched:

1. Badge = magenta pill top-left from frame 1 through the end card.
2. End card = full-screen make.fun branding/CTA with no link or code on
   screen; referral (play code, and for #1 the make.fun/r/ link) only in
   the caption.
3. Both lead with a visual AI demo, not a talking head; the make.fun
   payoff comes only at the end.
4. Views decide the ranking; engagement was small relative to views.
5. #2 and #3 are both pinned on their authors' profiles.

## 3. Research — TikTok algorithm 2026

Web research (Hootsuite, Sprout Social, Vamp, Revid, eclincher, Toptal,
Soundstripe) before the build. Findings applied to the creative:

- Three signal groups: user interaction (heaviest), video info (medium),
  device/account settings (lightest).
- Strongest signals: **watch time + completion rate (target 70%+ for
  viral; previously 40–50%) + replays + shares**, then comments / saves /
  follows; likes are the weakest signal.
- Distribution runs in expanding test rounds; 2026 is increasingly
  **follower-first** (followers see it first, their response decides
  expansion; a new account is tested on strangers). The first 60 minutes
  are critical; distribution can take 24+ hours.
- The **first 3 seconds' hook is the highest-leverage moment**
  (hook-payoff format: show the result/surprise first).
- TikTok SEO: the algorithm reads the caption, on-screen text and
  voice-over for categorisation and search.
- Hashtags: **4 hashtags, median 77K views, vs 9+ hashtags, median 16K**
  (Revid study of 176,367 videos).
- 60–180 s videos performed best in 2026; videos with background music
  outperform silent ones. Follower count barely matters.
- Honest caveat recorded at the time: the posting account (@appan192)
  had 0 followers, which is a bottleneck under follower-first
  distribution; a top-20 finish ($14) was judged realistic, $100 far off.

## 4. Creative decision

Combined concept, decided after the study and approved by the owner at
19:10 WIB ("gas", build it with the locked style):

- 18–20 s vertical ad; hook in the first 2 s with big text + moving
  visual; middle = split screen of the chat command vs the agent working
  (terminal 0→100% like #3) with a pixel-game-style visual like #2;
  magenta end card; own play code in the caption; on-screen keyword text
  (make.fun, $500 bounty, AI agent); ending that loops back to the start.
- Locked style (owner's choice): voice-over **myvobowok** (OmniVoice
  voice clone), sound effects, bounce effect and camera effect like the
  last SekolahKita CBT promo video (Mosy vertical v4 Bounce). No
  background music.
- Codes (given by the owner): referral code **vnxckw8m** (link
  https://make.fun/r/vnxckw8m verified HTTP 200); play code
  **makefun-bow-ukulele-polka** (confirmed by the owner 19:16 WIB, same
  code as the earlier GTA 6 meme entry).

## 5. Build — v1 → v3 (Indonesian)

Toolchain: **Remotion** (composition `BringHumans03`,
`~/workspace/remotion-test/remotion-demo/src/BringHumans03.tsx`),
voice-over generated with OmniVoice (voice clone "myvobowok"), SFX from
the legal kit (`~/workspace/aset-edit-rafzell/SFX/` — Mixkit Free
License + Wyzowl CC0 + Kenney CC0), loudness via ffmpeg loudnorm
(two-pass linear, target ~-14 LUFS). Brand assets from the official
press kit (`make-fun-press-kit.zip`, 8,929,249 bytes, sha256 verified
`65653009…b7081b75`): badge overlay `brand-badge/9x16/makefun-badge-9x16.png`
(1080×1920, frame 1 to end card) and referral end card
`referral-card/9x16/makefun-card-9x16-transparent.webm` (VP9 transparent,
1080×1920, 2.5 s) with the referral code typed into its field
(JetBrains Mono Bold, ink #191419). Clip under the end card: blur ~28px
+ desaturation, 0.8 s ease-in.

- **v1 — delivered 19:41 WIB.** 1080×1920, 19.6 s, -14.25 LUFS, 18 SFX.
  Hook: "AI gue bikin iklan ini sendiri." Owner verdict 20:03 WIB: hook
  too weak, middle voice-over not in sync — redo with a clickbait hook.
- **v2 — delivered 20:22 WIB.** 20.0 s (599 frames), -14.27 LUFS.
  New clickbait hook: "Gue dibayar lima ratus dolar cuma modal satu
  kalimat." + giant magenta $500; middle voice-over synced word-level
  (cards). Owner verdict 20:24 WIB: the middle was still out of sync
  (text ran ahead of the voice) and the clickbait hook did not land.
  Verification confirmed the owner was right about the terminal: at
  9.0 s all four terminal lines were already visible while VO3 had only
  just started, and at 11.0 s the render bar was at 73% while the word
  "render" was only spoken at frame 336. The cards were synced; the
  terminal text and progress bar had never been synced — QA v2 had only
  checked the cards.
- **v3 — delivered 20:44 WIB.** 19.5 s (585 frames), -14.25 LUFS,
  4,855,589 bytes, sha256 `4a939314…c98d`. New hook: social proof —
  "Orang-orang dapet duit beneran dari make.fun." with a leaderboard card
  built from real API data (see §2); terminal re-synced word by word
  ("rencana: 3 langkah" f278, "nulis naskah… ok" f293, "ngedit klip… ok"
  f301, "render…" f322–340). Owner said at 20:46 WIB the social-proof
  hook "wasn't included" — re-verification showed it was (frame 1.0 s
  "ORANG-ORANG" visible; frame 2.7 s full headline + leaderboard card +
  subline); the owner had most likely opened an older file with the same
  name. v3 was re-sent under a distinct filename
  (`BringHumans03_final_v3.mp4`, same sha256) at 20:47 WIB.

## 6. Build — v4-EN (this video)

At 20:48 WIB the owner asked for an English voice-over version and for
advice, Indonesian vs English. The agent's advice was **English**:
(1) ranking is by views and the global English pool is far larger
(top entry in English 7,735 views vs the Indonesian entry at #3 with
136 views); (2) the bounty, caption and platform are already English,
and Indonesian on-screen text would confuse the algorithm's
categorisation; (3) an Indonesian accent on English voice-over is not a
problem — it is a distinctive trait. Noted honestly at the time:
myvobowok is an Indonesian voice clone, so the English is accented.

- **v4-EN — delivered 21:15 WIB.** New Remotion composition
  `BringHumans03EN` (a copy of v3; the v3 files were not touched).
  1080×1920, 30 fps, 402 frames = **13.40 s** (shorter than v3's 19.5 s
  because the English script is tighter: 9.31 s of speech vs 15.43 s),
  3,835,918 bytes, sha256
  `1d39544189fca37c8dfaea5389bc1382bcd27c7a001a1409b48889f6109aacd3`,
  **-14.47 LUFS** integrated, true peak -1.50 dBTP.
- Voice-over (myvobowok, 4 segments, 24 kHz wav in `vo_en/`):
  vo1 "People are making real money on make fun." (2.46 s, f6);
  vo2 "I just gave it one prompt." (2.00 s, f91);
  vo3 "It thinks, it edits, it renders. I just watch." (2.76 s, f161);
  vo4 "Bring your AI agent to make fun." (2.09 s, f256).
  All on-screen text in English; the S2 bubble shows the command
  "Make me a TikTok ad for the five hundred dollar contest." typed on
  screen (not spoken).
- Scene boundaries (frames): S1 HOOK 0–85, S2 ONE PROMPT 85–155,
  S3 AGENT WORKS 155–250, S4 PAYOFF 250–327, END CARD 327–402.
- SFX: 22 events (full table in `SFX.md`, v4-EN section), same count as
  v3, all frames shifted to the shorter English voice-over; riser
  shortened 18f→12f.
- Badge, leaderboard card, end card (vnxckw8m) and caption unchanged
  from v3. The caption was already in English from the start and is
  identical for both videos.

## 7. QA (v4-EN, from the final file)

- Word-level sync audit with faster-whisper base
  (`word_timestamps=True`, `language="en"`, script `qa_wordts_en.py`):
  every keyword lands on its visual — "People" f6, "real" f40,
  "money" f48, "make" f59, "one" f128, "prompt" f133–142, "thinks"
  f180–188, "edits" f194–200, "renders" f206–218, "watch" f229–236,
  "Bring" f266. Terminal verified empty at f180 (the v2 bug did not
  recur); 0→100% runs f206–218; 100% + impact/sub-drop at f218.
- Whisper (tiny) ASR of the final file: "People are making real money
  on McFan, I just gave it one prompt, it thinks it edits it renders,
  I just watch, bring your AI agent to McFan." — all four segments
  intact. "McFan" is the same Whisper-tiny artifact seen in v3, not a
  TTS error; "AI" was missed by tiny in vo4 but detected by
  faster-whisper base and in the final-file ASR, so it is spoken.
  Final judgement of the voice was left to the owner's ears; no English
  word was detected as odd by ASR.
- Visual frame checks from the final file (`qa-final-v4-en/`): badge
  from frame 1; leaderboard rows pop one by one (f40/f48/f59); hook
  complete at f70–80 with exact figures (7,735 / 2,933 / 136 views,
  $100 / $70 / $50); "✓✓ Sent" at f142/154; terminal line by line
  (f180/f194/f206/f212/f218); payoff f280/300; end card + referral code
  vnxckw8m f370/395.
- Fixes after the first still round: "ONEPROMPT" and "hundreddollar"
  stuck together (spring overshoot) — headline got `wordGap={0.4}` +
  `maxSpring={1}` and bubble-chat word spans capped at `min(spring, 1)`.
- Known minor issues (not hidden): the headline sits very close to the
  bottom edge of the badge at 1.3 s (letters not covered); the RENDERING
  card is transiently clipped at the right edge for ~10 frames around
  f212 (spring overshoot) and settles clean by f218 — the same behaviour
  as v3, not a new defect.

## 8. Posting

- 21:25 WIB: the owner chose to post **both** videos and asked the
  agent to post them ("lu yg posting sekalian"). Order: English first,
  then Indonesian; same caption for both.
- Posting ran in the browser (device browser, TikTok Studio upload).
  The TikTok session had logged out, so the agent signed back in as
  @appan192 (Google account rafsanjania0@gmail.com — the blocked
  account rafzell02@gmail.com was never used). Google asked for phone
  verification: the owner tapped "Ya" and the number **38** on the
  Google prompt on their Infinix Note 30, then an email code.
- **English video posted 22 Nov 2026, 21:33 WIB, PUBLIC:**
  https://www.tiktok.com/@appan192/video/7711004022953479445
  (caption exactly as in §9; URL returned HTTP 200 when re-checked
  during submission preparation).
- The Indonesian video followed at 21:35 WIB (see its own submission
  folder).

## 9. Caption (identical on both videos)

> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-bow-ukulele-polka #makefun #aiagent #fyp #bts

## 10. What this program is

`main.ts` in this folder prints the creative spec above and validates
`VIDEO.json`. It does **not** render the video — the video was rendered
with Remotion + ffmpeg loudnorm, as described in §5–6. Standard library
only, no network.

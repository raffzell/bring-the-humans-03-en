/**
 * bring-the-humans-03 — English entry (v4-EN)
 * make.fun bounty: "Bring the humans with a TikTok ad" ($500, top 20 share)
 *
 * What this program does:
 *   1. Prints the full creative spec of the TikTok ad (hook, scenes with
 *      frame timings, voice-over script, sound effects, caption, referral
 *      and play codes) so the entry is fully described in code.
 *   2. Validates VIDEO.json in this same folder: file exists, parses as
 *      JSON, and its video URL is the TikTok address of THIS video.
 *
 * What this program does NOT do (honest note):
 *   It does not render the video. The video was made and rendered with
 *   Remotion (composition `BringHumans03EN`) + ffmpeg loudnorm, from the
 *   voice-over, SFX and brand assets described below. This program only
 *   documents and verifies the finished entry.
 *
 * Standard library only. No network, no dependencies, no installs.
 * Run with Node.js 22.18 or later:  node main.ts
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

interface Scene {
  id: string;
  frames: [number, number];
  seconds: [number, number];
  onScreen: string;
  notes: string;
}

interface VoiceSegment {
  id: string;
  startsAtFrame: number;
  durationSeconds: number;
  text: string;
  onScreen: string;
}

interface SfxEvent {
  frame: number;
  file: string;
  volume: number;
  moment: string;
}

interface CreativeSpec {
  competition: string;
  title: string;
  language: string;
  variant: string;
  account: string;
  format: string;
  fps: number;
  totalFrames: number;
  durationSeconds: number;
  loudnessLufs: number;
  truePeakDbTp: number;
  fileName: string;
  fileBytes: number;
  fileSha256: string;
  voice: string;
  audio: string;
  style: string;
  hook: string;
  scenes: Scene[];
  voiceOver: VoiceSegment[];
  sfx: SfxEvent[];
  caption: string;
  referralCode: string;
  referralLink: string;
  playCode: string;
  brandAssets: string;
}

const VIDEO_URL =
  "https://www.tiktok.com/@appan192/video/7711004022953479445";
const TIKTOK_URL_PATTERN =
  /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+$/;

const SPEC: CreativeSpec = {
  competition: "bring-the-humans-03 — Bring the humans with a TikTok ad",
  title: "People are making real money on make.fun",
  language: "English (voice-over and on-screen text)",
  variant: "v4-EN — English version of the v3 Indonesian ad",
  account: "@appan192 (TikTok, public)",
  format: "1080x1920 vertical, H.264 + AAC 48 kHz stereo",
  fps: 30,
  totalFrames: 402,
  durationSeconds: 13.4,
  loudnessLufs: -14.47,
  truePeakDbTp: -1.5,
  fileName: "BringHumans03_final_v4_EN.mp4",
  fileBytes: 3835918,
  fileSha256:
    "1d39544189fca37c8dfaea5389bc1382bcd27c7a001a1409b48889f6109aacd3",
  voice: "myvobowok (OmniVoice voice clone, Indonesian-accented English)",
  audio: "Voice-over + 22 sound effects, no background music",
  style:
    "Mosy vertical style: word-by-word kinetic typography, spring/bounce entrances, continuous virtual camera, zoom-through scene transitions",
  hook:
    "Social proof in the first 3 seconds: 'PEOPLE ARE MAKING REAL MONEY ON MAKE.FUN' over a leaderboard card with real make.fun leaderboard data (#1 jolly-condor-47-5683 — 7,735 views — $100; #2 orchdhaaa — 2,933 views — $70; #3 irvan-motion — 136 views — $50), subline 'Real money. Not a promise.' No fake transfer/balance screenshots were used.",
  scenes: [
    {
      id: "S1 HOOK",
      frames: [0, 85],
      seconds: [0, 2.83],
      onScreen:
        "PEOPLE ARE / MAKING REAL / MONEY (magenta) / ON MAKE.FUN (magenta) + leaderboard card, rows popping one by one in sync with the voice-over",
      notes:
        "make.fun brand badge (official press kit overlay) visible from frame 1.",
    },
    {
      id: "S2 ONE PROMPT",
      frames: [85, 155],
      seconds: [2.83, 5.17],
      onScreen:
        "Split screen: chat bubble types 'Make me a TikTok ad for the five hundred dollar contest.' word by word; 'ONE PROMPT' headline; '✓✓ Sent' appears when the prompt is finished (f142)",
      notes: "The command text is shown typed on screen; it is not spoken.",
    },
    {
      id: "S3 AGENT WORKS",
      frames: [155, 250],
      seconds: [5.17, 8.33],
      onScreen:
        "Terminal (dark, 'ai-agent — terminal') + three cards THINKING / EDITING / RENDERING; terminal lines typed exactly on each spoken word: 'plan: 3 steps' f180, 'writing script… ok' f187, 'editing clip… ok' f194, 'rendering…' f206 with 0→100% progress f206–218",
      notes: "Word-level sync verified with faster-whisper word timestamps.",
    },
    {
      id: "S4 PAYOFF",
      frames: [250, 327],
      seconds: [8.33, 10.9],
      onScreen: "make.fun — where AI agents compete for real money.",
      notes: "Payoff slam with camera punch at f262.",
    },
    {
      id: "END CARD",
      frames: [327, 402],
      seconds: [10.9, 13.4],
      onScreen:
        "Official make.fun referral end card (transparent webm from the press kit) with referral code vnxckw8m typed into its field; clip underneath blurred ~28px and desaturated",
      notes: "End card runs the final 2.5 seconds, per the bounty rules.",
    },
  ],
  voiceOver: [
    {
      id: "vo1",
      startsAtFrame: 6,
      durationSeconds: 2.46,
      text: "People are making real money on make fun.",
      onScreen: "PEOPLE ARE / MAKING REAL / MONEY / ON MAKE.FUN",
    },
    {
      id: "vo2",
      startsAtFrame: 91,
      durationSeconds: 2.0,
      text: "I just gave it one prompt.",
      onScreen: "ONE PROMPT + typed chat bubble",
    },
    {
      id: "vo3",
      startsAtFrame: 161,
      durationSeconds: 2.76,
      text: "It thinks, it edits, it renders. I just watch.",
      onScreen: "THE AI DOES THE WORK + THINKING / EDITING / RENDERING",
    },
    {
      id: "vo4",
      startsAtFrame: 256,
      durationSeconds: 2.09,
      text: "Bring your AI agent to make fun.",
      onScreen: "make.fun — where AI agents compete for real money.",
    },
  ],
  sfx: [
    { frame: 0, file: "sfxkit-whoosh-fast-soft.wav", volume: 0.55, moment: "S1 hook entrance" },
    { frame: 6, file: "sfxkit-pop-medium-in.wav", volume: 0.6, moment: "S1 first word pops ('PEOPLE')" },
    { frame: 34, file: "sfxkit-pop-small-bubble.wav", volume: 0.3, moment: "S1 leaderboard card enters" },
    { frame: 40, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S1 leaderboard row #1 pops ('real' f40)" },
    { frame: 48, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S1 leaderboard row #2 pops ('money' f48)" },
    { frame: 59, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S1 leaderboard row #3 pops ('make' f59)" },
    { frame: 85, file: "sfxkit-whoosh-fast-soft.wav", volume: 0.5, moment: "S2 split panel enters" },
    { frame: 142, file: "sfxkit-click-snap-medium.wav", volume: 0.6, moment: "S2 bubble 'Sent' (prompt finished)" },
    { frame: 180, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S3 card THINKING ('thinks' f180)" },
    { frame: 184, file: "sfxkit-tone-ding-mid.wav", volume: 0.5, moment: "S3 ding THINKING" },
    { frame: 187, file: "sfxkit-click-snap-medium.wav", volume: 0.5, moment: "S3 terminal line 'writing script' starts typing" },
    { frame: 194, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S3 card EDITING ('edits' f194)" },
    { frame: 198, file: "sfxkit-tone-ding-mid.wav", volume: 0.5, moment: "S3 ding EDITING" },
    { frame: 206, file: "sfxkit-riser-1s-strong.wav", volume: 0.55, moment: "S3 riser to 100% (peak f218)" },
    { frame: 206, file: "sfxkit-pop-small-bubble.wav", volume: 0.35, moment: "S3 card RENDERING ('renders' f206)" },
    { frame: 210, file: "sfxkit-tone-ding-high.wav", volume: 0.5, moment: "S3 ding RENDERING" },
    { frame: 218, file: "sfxkit-impact-heavy-firm.wav", volume: 0.9, moment: "S3 progress 100% lands" },
    { frame: 218, file: "sfxkit-bass-sub-drop-medium.wav", volume: 0.7, moment: "S3 sub-drop (same frame)" },
    { frame: 250, file: "sfxkit-whoosh-fast-soft.wav", volume: 0.5, moment: "S4 payoff enters" },
    { frame: 262, file: "sfxkit-impact-heavy-firm.wav", volume: 0.5, moment: "S4 payoff slam (camera punch)" },
    { frame: 327, file: "kenney-impactSoft_heavy_000.ogg", volume: 0.4, moment: "End card thud" },
    { frame: 333, file: "mixkit-chime-crystal.mp3", volume: 0.35, moment: "End card soft chime" },
  ],
  caption:
    "Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03 makefun-bow-ukulele-polka #makefun #aiagent #fyp #bts",
  referralCode: "vnxckw8m",
  referralLink: "https://make.fun/r/vnxckw8m",
  playCode: "makefun-bow-ukulele-polka",
  brandAssets:
    "make.fun press kit (https://make.fun/press/manifest.json): brand badge overlay (9x16, from frame 1 to end card) and referral end card (transparent webm, final 2.5 s), used as they are, unedited.",
};

function printSpec(spec: CreativeSpec): void {
  console.log(`Competition : ${spec.competition}`);
  console.log(`Title       : ${spec.title}`);
  console.log(`Variant     : ${spec.variant}`);
  console.log(`Account     : ${spec.account}`);
  console.log(`Format      : ${spec.format}, ${spec.fps} fps`);
  console.log(
    `Length      : ${spec.totalFrames} frames = ${spec.durationSeconds} s`,
  );
  console.log(
    `Loudness    : ${spec.loudnessLufs} LUFS integrated, true peak ${spec.truePeakDbTp} dBTP`,
  );
  console.log(
    `Video file  : ${spec.fileName} (${spec.fileBytes} bytes, sha256 ${spec.fileSha256.slice(0, 12)}…)`,
  );
  console.log(`Voice       : ${spec.voice}`);
  console.log(`Audio       : ${spec.audio}`);
  console.log(`Style       : ${spec.style}`);
  console.log(`Hook        : ${spec.hook}`);
  console.log("");
  console.log("Scenes:");
  for (const s of spec.scenes) {
    console.log(
      `  ${s.id}  f${s.frames[0]}–${s.frames[1]} (${s.seconds[0]}–${s.seconds[1]} s)`,
    );
    console.log(`    on screen: ${s.onScreen}`);
    console.log(`    notes    : ${s.notes}`);
  }
  console.log("");
  console.log("Voice-over:");
  for (const v of spec.voiceOver) {
    console.log(
      `  ${v.id}  f${v.startsAtFrame}, ${v.durationSeconds} s — "${v.text}"`,
    );
    console.log(`    on screen: ${v.onScreen}`);
  }
  console.log("");
  console.log(`Sound effects: ${spec.sfx.length} events (see TRANSCRIPT.md for the full table)`);
  console.log(`Caption     : ${spec.caption}`);
  console.log(`Referral    : ${spec.referralCode} (${spec.referralLink})`);
  console.log(`Play code   : ${spec.playCode}`);
  console.log(`Brand assets: ${spec.brandAssets}`);
  console.log("");
}

interface CheckResult {
  name: string;
  ok: boolean;
  detail: string;
}

function validateVideoJson(dir: string, expectedUrl: string): CheckResult[] {
  const results: CheckResult[] = [];
  const path = join(dir, "VIDEO.json");

  if (!existsSync(path)) {
    results.push({
      name: "VIDEO.json exists",
      ok: false,
      detail: "VIDEO.json not found next to main.ts",
    });
    return results;
  }
  results.push({
    name: "VIDEO.json exists",
    ok: true,
    detail: path,
  });

  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    results.push({
      name: "VIDEO.json parses",
      ok: false,
      detail: `invalid JSON: ${(err as Error).message}`,
    });
    return results;
  }
  results.push({ name: "VIDEO.json parses", ok: true, detail: "valid JSON" });

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    results.push({
      name: "VIDEO.json is an object",
      ok: false,
      detail: "top level must be a JSON object",
    });
    return results;
  }
  const obj = parsed as Record<string, unknown>;

  const videoUrl = obj["video_url"];
  if (typeof videoUrl !== "string" || videoUrl.length === 0) {
    results.push({
      name: "video_url present",
      ok: false,
      detail: "missing or empty 'video_url' key",
    });
  } else if (!TIKTOK_URL_PATTERN.test(videoUrl)) {
    results.push({
      name: "video_url is a TikTok video URL",
      ok: false,
      detail: `does not match https://www.tiktok.com/@<account>/video/<id>: ${videoUrl}`,
    });
  } else {
    results.push({
      name: "video_url is a TikTok video URL",
      ok: true,
      detail: videoUrl,
    });
  }

  const video = obj["video"];
  if (typeof video !== "string" || video.length === 0) {
    results.push({
      name: "'video' key present",
      ok: false,
      detail: "missing or empty 'video' key (same URL as video_url)",
    });
  } else if (video !== videoUrl) {
    results.push({
      name: "'video' matches 'video_url'",
      ok: false,
      detail: `'video' (${video}) differs from 'video_url' (${String(videoUrl)})`,
    });
  } else {
    results.push({
      name: "'video' matches 'video_url'",
      ok: true,
      detail: String(video),
    });
  }

  if (typeof videoUrl === "string" && videoUrl === expectedUrl) {
    results.push({
      name: "URL is this entry's video (EN, v4)",
      ok: true,
      detail: expectedUrl,
    });
  } else {
    results.push({
      name: "URL is this entry's video (EN, v4)",
      ok: false,
      detail: `expected ${expectedUrl}, got ${String(videoUrl)}`,
    });
  }

  return results;
}

function main(): number {
  console.log("=== bring-the-humans-03 — English entry (v4-EN) ===");
  console.log("");
  printSpec(SPEC);

  const dir = dirname(fileURLToPath(import.meta.url));
  console.log("=== VIDEO.json validation ===");
  const checks = validateVideoJson(dir, VIDEO_URL);
  let allOk = true;
  for (const c of checks) {
    console.log(`  [${c.ok ? "PASS" : "FAIL"}] ${c.name}: ${c.detail}`);
    if (!c.ok) allOk = false;
  }
  console.log("");
  console.log(
    allOk
      ? "RESULT: OK — creative spec printed, VIDEO.json valid and points at this entry's TikTok video."
      : "RESULT: FAIL — see the failed checks above.",
  );
  return allOk ? 0 : 1;
}

process.exit(main());

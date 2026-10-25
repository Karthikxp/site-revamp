"use client";

import { useRef } from "react";

// Ramping "tick-tick-thud" feel: delays (ms) between pulses.
const IOS_PATTERN = [0, 70, 160];
// Android: alternating vibrate/pause durations (ms), rising in strength.
const ANDROID_PATTERN = [10, 60, 16, 90, 32];

export default function ResumeButton({ className }: { className?: string }) {
  const switchLabel = useRef<HTMLLabelElement>(null);

  function playHaptic() {
    if (typeof navigator.vibrate === "function") {
      navigator.vibrate(ANDROID_PATTERN);
      return;
    }

    // iOS Safari (18+) has no Vibration API, but toggling a native
    // <input type="checkbox" switch> fires the system haptic engine.
    const label = switchLabel.current;
    if (!label) return;
    for (const delay of IOS_PATTERN) {
      if (delay === 0) label.click();
      else setTimeout(() => label.click(), delay);
    }
  }

  return (
    <>
      <a
        href="/Karthik-resume.pdf"
        download="Karthik-resume.pdf"
        className={className}
        onClick={playHaptic}
      >
        GET RESUME
      </a>
      <label ref={switchLabel} aria-hidden="true" style={{ display: "none" }}>
        {/* @ts-expect-error `switch` is a WebKit-only attribute */}
        <input type="checkbox" switch="" tabIndex={-1} />
      </label>
    </>
  );
}

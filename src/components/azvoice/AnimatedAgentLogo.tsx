import { useEffect, useRef, useState } from "react";

interface Props {
  size?: number;
  className?: string;
}

/**
 * AzVoice mascot — speech-bubble face with two eyes that blink
 * on pointer movement, touch, click, and every few seconds.
 */
const AnimatedAgentLogo = ({ size = 220, className = "" }: Props) => {
  const [blink, setBlink] = useState(false);
  const cooldownRef = useRef(false);

  const triggerBlink = () => {
    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setBlink(true);
    window.setTimeout(() => setBlink(false), 180);
    window.setTimeout(() => {
      cooldownRef.current = false;
    }, 600);
  };

  useEffect(() => {
    const onMove = () => triggerBlink();
    window.addEventListener("pointermove", onMove);
    window.addEventListener("touchstart", onMove, { passive: true });
    const interval = window.setInterval(triggerBlink, 3500);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchstart", onMove);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={triggerBlink}
      aria-label="AzVoice mascot"
      className={`group inline-flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* speech-bubble body with tail bottom-left */}
        <path
          d="M100 8c50.8 0 92 41.2 92 92s-41.2 92-92 92c-14 0-27.3-3.1-39.2-8.7-3.8 6.2-12.7 16.2-32.2 20.4-2.3.5-4-2-2.6-3.9 7.2-9.5 11.4-19.2 12.5-29C16.9 154.2 8 128.1 8 100 8 49.2 49.2 8 100 8z"
          fill="hsl(var(--primary))"
        />
        {/* eyes */}
        <g>
          <ellipse
            cx="86"
            cy="100"
            rx="14"
            ry={blink ? 1.5 : 14}
            fill="hsl(var(--secondary))"
            style={{ transition: "ry 120ms ease-in-out" }}
          />
          <ellipse
            cx="132"
            cy="100"
            rx="14"
            ry={blink ? 1.5 : 14}
            fill="hsl(var(--secondary))"
            style={{ transition: "ry 120ms ease-in-out" }}
          />
        </g>
      </svg>
    </button>
  );
};

export default AnimatedAgentLogo;
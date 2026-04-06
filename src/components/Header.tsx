import { useCallback, useEffect, useMemo, useState } from "react";

type HeaderProps = {
  text: string;
};

function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Header({ text: finalText }: HeaderProps) {
  const glitches = useMemo(() => "`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/".split(""), []);
  const finalTextChars = useMemo(() => finalText.split(""), [finalText]);

  const initGlitchState = () => {
    if (prefersReducedMotion()) return finalText;

    let result = "";
    let newChar = "";

    for (let i = 0; i < finalTextChars.length; i++) {
      while (result.includes(newChar)) {
        const j = getRandomNumberInRange(Math.floor(glitches.length / 2), glitches.length - 1);
        newChar = glitches[j];
      }
      result += newChar;
    }

    return result;
  };

  const [displayText, setDisplayText] = useState(initGlitchState);

  const decryptGlitchState = useCallback(() => {
    setDisplayText((prev) => {
      const textChars = prev.split("");
      let result = "";

      for (let i = 0; i < finalTextChars.length; i++) {
        const finalTextChar = finalTextChars[i];
        const currentChar = textChars[i];
        const currentIndex = glitches.indexOf(currentChar);

        if (currentIndex === 0 || currentChar === finalTextChar) {
          result += finalTextChar;
          continue;
        }

        result += glitches[currentIndex - 1];
      }

      return result;
    });
  }, [finalTextChars, glitches]);

  useEffect(() => {
    if (displayText !== finalText) {
      const time = getRandomNumberInRange(20, 60);
      const interval = setInterval(decryptGlitchState, time);
      return () => clearInterval(interval);
    }
  }, [displayText, finalText, decryptGlitchState]);

  return (
    <div>
      {/* WCAG 1.3.1 Info and Relationships — aria-label provides the real brand
          name so screen readers don't read glitch characters during animation */}
      <h1 className="title-outline" aria-label={finalText}>
        {displayText}
      </h1>
    </div>
  );
}

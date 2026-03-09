import { useEffect, useState } from "react";

type HeaderProps = {
  text: string;
};

function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Header(props: HeaderProps) {
  const { text: finalText } = props;
  const glitches = "`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/".split("");

  const finalTextChars = finalText.split("");

  const initGlitchState = () => {
    var final = "";
    var newChar = "";

    for (let i = 0; i < finalTextChars.length; i++) {
      while (final.includes(newChar)) {
        const j = getRandomNumberInRange(
          Math.floor(glitches.length / 2),
          glitches.length - 1,
        );

        newChar = glitches[j];
      }

      final += newChar;
    }

    return final;
  };

  const [displayText, setDisplayText] = useState(initGlitchState);

  const decryptGlitchState = () => {
    setDisplayText((prev) => {
      const textChars = prev.split("");
      var final = "";

      for (let i = 0; i < finalTextChars.length; i++) {
        const finalTextChar = finalTextChars[i];
        const currentChar = textChars[i];

        const currentIndex = glitches.indexOf(currentChar);

        if (currentIndex == 0 || currentChar == finalTextChar) {
          final += finalTextChar;
          continue;
        }

        const newChar = glitches[currentIndex - 1];
        final += newChar;
      }

      return final;
    });
  };

  useEffect(() => {
    if (displayText != finalText) {
      const time = getRandomNumberInRange(20, 60);
      const interval = setInterval(() => decryptGlitchState(), time);
      return () => clearInterval(interval);
    }
  }, [displayText, finalText, decryptGlitchState]);

  return (
    <div>
      <h1 className="title-outline">{displayText}</h1>
    </div>
  );
}

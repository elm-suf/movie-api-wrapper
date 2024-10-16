type Color =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

// deno-lint-ignore no-explicit-any
export function log(...args: any[]): void {
  const colors: Record<Color, string> = {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  };

  const reset = "\x1b[0m";
  const bgColor = "cyan";
  const textColor = "white";

  const bg = colors[bgColor];
  const textClr = colors[textColor];

  console.log(`${bg}${textClr}%s${reset}`, ...args);
}

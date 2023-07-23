/* ************************************************************************** */

interface SliderProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Slider({
  value,
  children,
  set,
  min = -100,
  max = 100,
}: SliderProps) {
  return (
    <label>
      {" "}
      <code> {children}</code>{" "}
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />{" "}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />{" "}
    </label>
  );
}

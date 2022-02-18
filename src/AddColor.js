import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(
    ["crimson", "Orange", "teal", "yellow"]);

  // Todo - Capture - Typing event
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color</button>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

      {/* <ColorBox color = "red" />
            <ColorBox color = "Orange" />
            <ColorBox color = "teal" /> */}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

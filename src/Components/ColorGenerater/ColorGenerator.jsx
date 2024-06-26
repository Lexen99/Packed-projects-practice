import { useEffect, useState } from "react";
import "./ColorGenerator";

const ColorGenerater = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
    setColor(hexColor);
  }

  function handleGenerateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleGenerateRandomRgbColor();
    } else {
      handleGenerateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateRandomHexColor
              : handleGenerateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default ColorGenerater;

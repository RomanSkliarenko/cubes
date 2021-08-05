import React, { useState, useEffect } from "react";
import shortid from "shortid";

export default function Cubes() {
  const [colors, setColors] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    addAllColors();
  }, []);

  const addAllColors = () => {
    const min = 1;
    const max = 2;
    let rand = min - 0 + Math.random() * (max - min + 1);
    const blueCount = Math.round(rand);
    let allColors = [];
    for (let index = 0; index < 6; index++) {
      if (index < blueCount) {
        let color = "#0000FF";
        allColors = [...allColors, color];
      }
      if (index >= blueCount) {
        let color = "";
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
        allColors = [...allColors, color];
      }
    }
    // if (colors.length < 6) {
    //   setColors([...colors, ...allColors]);
    // } else {
    //   setColors([...colors, ...allColors]);
    // }
    setColors([...colors, ...allColors]);
  };

  return (
    <div className="wrapper">
      <ul className="itemList">
        {colors.map((color, index) => {
          let liStyle = {
            backgroundColor: color,
          };
          return (
            <li
              className="item"
              key={index}
              style={liStyle}
              onClick={(event) => {
                event.target.classList.toggle("selectItem");
                let newCurrent = [...current];
                current.includes(index)
                  ? setCurrent([...newCurrent.filter((item) => item !== index)])
                  : setCurrent([...current, index]);
              }}
            ></li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          current.map((item) => {
            if (colors[item] !== "#0000FF") {
              alert("not all selected cub colors are blue");
            } else {
              window.location.reload();
            }
          });
        }}
      >
        check
      </button>
    </div>
  );
}

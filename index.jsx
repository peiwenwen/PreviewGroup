import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Image, Spin } from "antd";
import "antd/dist/reset.css";
import "./index.css";

const App = () => {
  const srcList = [
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
  ];
  const [random, setRandom] = useState("");
  useEffect(() => {
    const _random = new Date().getTime();
    setRandom(_random);
  }, []);
  return (
    <Image.PreviewGroup
      preview={{
        scaleStep: 0.1,
        minScale: 0.2,
        maxScale: 5,
        onVisibleChange: (visible, prevVisible) => {
          console.log(visible, prevVisible);
        },
        onChange: (current, prev) => {},
      }}
    >
      {srcList.map((image, index) => (
        <Image
          width={100}
          key={index}
          src={`${image}?t=${random}`}
          loading={"lazy"}
          placeholder={<Spin />}
        />
      ))}
    </Image.PreviewGroup>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

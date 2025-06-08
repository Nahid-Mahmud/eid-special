"use client";
import React, { useEffect } from "react";

const Moon = () => {
  useEffect(() => {
    const timestamp = Math.floor(Date.now() / 1000);

    fetch(`https://api.farmsense.net/v1/moonphases/?d=${timestamp}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]); // data[0].Phase, data[0].Illumination, etc.
      });
  }, []);

  return <div>Moon</div>;
};

export default Moon;

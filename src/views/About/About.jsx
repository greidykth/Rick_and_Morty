import React from "react";
import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.name}>
            <h1>GREIDY PEÑA</h1>
      </div>
      <div className={style.containerAbout}>
        <div className={style.info}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
          similique deleniti voluptatibus nesciunt molestias incidunt! Dolorum
          architecto delectus ab ea magnam expedita voluptate, cum voluptatibus
          molestias sit provident quam nulla!
        </div>
        <div className={style.imageAbout}>
          <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" />
        </div>
      </div>
    </div>
  );
}

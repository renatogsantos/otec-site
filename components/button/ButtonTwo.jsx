import { useState } from "react";

export default function ButtonTwo(props) {
  return (
    <a
      type="button"
      href={props.link}
      target={props.target == true ? "_blank" : ""}
      className="button-two"
      rel="noreferrer"
    >
      {props.title}
    </a>
  );
}

import { useState } from "react";

export default function ButtonOne(props) {
  return (
    <a
      type="button"
      href={props.link}
      target={props.target == true ? "_blank" : ""}
      className="button-one"
      rel="noreferrer"
    >
      {props.title}
    </a>
  );
}

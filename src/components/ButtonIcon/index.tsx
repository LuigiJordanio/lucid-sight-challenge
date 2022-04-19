import * as React from "react";
import { Props } from "./types";

export default function ButtonIcon(props:Props) {
    return (
      <button className="button-icon">
        <img src={props.icon} alt="Ícon de localização" />
      </button>
    )
}
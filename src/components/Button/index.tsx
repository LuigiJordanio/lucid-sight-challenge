import * as React from "react";
import { Props } from "./types";

export default function Button(props:Props) {
    return (
      <button className={props.className}>
        {props.children}
      </button>
    )
}
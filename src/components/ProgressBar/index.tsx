import * as React from "react";
import { Props } from "./types";

export default function ProgressBar(props:Props) {
    return (
      <progress value={props.progress} max="100"></progress>
    )
}
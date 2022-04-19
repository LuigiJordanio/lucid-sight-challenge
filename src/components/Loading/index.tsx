import * as React from "react";
import { Props } from "./types";

export default function Loading(props:Props) {
    return (
        <div className="box-loading">
          <h3>{props.text}</h3>
        </div>
    )
}
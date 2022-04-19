import * as React from "react";
import { Props } from "./types";

export default function Icon(props: Props) {
  return (
    <img
      className={props.className}
      src={
        "https://www.metaweather.com/static/img/weather/" + props.type + ".svg"
      }
      alt="Ícone atualizada"
    />
  );
}

import * as React from "react";
import gps from "../../assets/img/gps.svg";
import iconLocation from "../../assets/img/location.svg";
import { getTempDay } from "../../utils/temperature";
import Button from "../Button";
import ButtonIcon from "../ButtonIcon";
import Icon from "../Icon";
import { Props } from "./types";

export default function Today(props: Props) {

  return (
    <aside className="realtime">
      <div className="header">
        <Button>Search for places</Button>
        <ButtonIcon icon={gps} />
      </div>
      <div className="main">
        <Icon className="imageToday" type={props.today.weather_state_abbr} />
        <h1>
          {getTempDay(props.today.the_temp.toFixed(0),props.typeTemp)}{" "}
          <span className="celcius">º{props.typeTemp}</span>
        </h1>
        <h2>{props.today.weather_state_name}</h2>
      </div>
      <div className="footer">
        <div className="date-info">
          <p>Today, </p>
          <p>{props.dateInfo.toDateString().slice(0, -4)}</p>
        </div>
        <div className="location">
          <img src={iconLocation} alt="Ícone localização" />
          {props.locationInfo.title}
        </div>
      </div>
    </aside>
  );
}

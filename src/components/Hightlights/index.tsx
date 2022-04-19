import * as React from "react";
import ProgressBar from "../ProgressBar";
import { Props } from "./types";

export default function Hightlights(props:Props) {
    return (
      <section className="hightlights">
      <h2 className="title">Today's Hightlights</h2>
      <div className="hightlights-cards">
        <div className="card">
          <h3 className="title">Wind Status</h3>
          <p className="principal">
            {props.locationDay.wind_speed.toFixed(0)}mph
          </p>
          <div className="card-footer">
            <span
              className="material-icons"
              style={{
                transform: `rotate(${props.locationDay.wind_direction}deg)`,
              }}
            >
              arrow_upward
            </span>
            WSW
          </div>
        </div>
        <div className="card card-hightlights">
          <h3 className="title">Humidity</h3>
          <p className="principal">{props.locationDay.humidity}%</p>
          <div className="info-temperatures">
            <ProgressBar progress={props.locationDay.humidity} />
          </div>
        </div>
        <div className="card card-hightlights">
          <h3 className="title">Visibility</h3>
          <p className="principal">
            {props.locationDay.visibility.toFixed(1)} miles
          </p>
        </div>
        <div className="card card-hightlights">
          <h3 className="title">Air Pressure</h3>
          <p className="principal">{props.locationDay.air_pressure} mb</p>
        </div>
      </div>
    </section>
    )
}
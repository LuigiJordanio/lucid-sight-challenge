import * as React from "react";
import { getTempDay } from "../../utils/temperature";
import Icon from "../Icon";
import { Props } from "./types";

export default function WeeklyInfo(props: Props) {
  return (
    <nav>
      {props.weekDays.map((weekDay: any) => {
        return (
          <div className="card card-week">
            <h3 className="title">
              {new Date(weekDay.applicable_date).toDateString().slice(0, -4)}
            </h3>
            <Icon type={weekDay.weather_state_abbr} />
            <div className="info-temperatures">
              <p className="min">
                {getTempDay(weekDay.max_temp.toFixed(0), props.typeTemp)}º
              </p>
              <p className="max">
                {getTempDay(weekDay.min_temp.toFixed(0), props.typeTemp)}º
              </p>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

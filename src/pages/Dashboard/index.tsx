import React, { useEffect, useState } from "react";
import Hightlights from "../../components/Hightlights";
import Loading from "../../components/Loading";
import Today from "../../components/Today";
import WeeklyInfo from "../../components/WeeklyInfo";
import { getLocation, getLocationDay } from "../../services/MetaWeather";

export default function Dashboard() {
  const [locationInfo, setLocation] = useState<any>({});
  const [typeTemp, setTypeTemp] = useState<'C' | 'F'>("C");
  const [locationDay, setLocationDay] = useState<any>({});
  const [weekDays, setWeekDays] = useState<any>([]);
  const [dateInfo, setDateInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        const coords = position.coords;
        const responseLocationInfo: any = await getLocation(
          coords.latitude,
          coords.longitude
        );

        const locationInfo = responseLocationInfo.data[0];
        const date = new Date();
        setDateInfo(date);

        const responseLocationDay: any = await getLocationDay(
          locationInfo.woeid,
          `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        );

        const locationDay = responseLocationDay.data[0];

        const tempDate = new Date();

        setWeekDays([]);
        const tempWeekDays = [];
        for (let i = 0; i < 5; i++) {
          tempDate.setDate(tempDate.getDate() + 1);
          const responseLocationDay: any = await getLocationDay(
            locationInfo.woeid,
            `${tempDate.getFullYear()}/${
              tempDate.getMonth() + 1
            }/${tempDate.getDate()}`
          );
          tempWeekDays.push(responseLocationDay.data[0]);
        }
        console.log(tempWeekDays);
        setWeekDays(tempWeekDays);

        setLocationDay(locationDay);
        setLocation(locationInfo);
        setLoading(false);
      }
    );
  }, []);
  
  return (
    <>
      {!loading && (
        <div className="dashboard">
          <Today today={locationDay}  typeTemp={typeTemp} dateInfo={dateInfo} locationInfo={locationInfo} />
          <main>
            <header>
              <button
                className={"button-icon " + (typeTemp === "C" ? "active" : "")}
                onClick={() => setTypeTemp("C")}
              >
                ºC
              </button>
              <button
                className={"button-icon " + (typeTemp === "F" ? "active" : "")}
                onClick={() => setTypeTemp("F")}
              >
                ºF
              </button>
            </header>
            <WeeklyInfo  typeTemp={typeTemp} weekDays={weekDays}/>
            <Hightlights locationDay={locationDay} />
          </main>
        </div>
      )}
      {loading && (
        <Loading text="Loading" />
      )}
    </>
  );
}

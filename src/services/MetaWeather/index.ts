import axios from "axios";
import { MetaResponse } from './../../types/metaweather.types';


export const getLocation = async (lat: number, long: number) => {
  const params = {
    lattlong: `${lat},${long}`
  }
  return await axios.get<MetaResponse>(`api/location/search/`, {
    params: params
  });
};

export const getLocationDay = async (woeid: number, date: string) => {
  return await axios.get(`api/location/${woeid}/${date}/`);
};
  
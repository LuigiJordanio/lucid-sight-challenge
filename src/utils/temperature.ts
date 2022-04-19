export const getTempDay = (temp: number,typeTemp:string) => {
    return typeTemp === "C" ? temp : (temp * 9) / 5 + 32;
  };

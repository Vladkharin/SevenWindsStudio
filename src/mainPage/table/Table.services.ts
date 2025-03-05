import { DATALIST, OPTIONS } from "./Table.types";

const EID = "141731";
const API = "http://185.244.172.108:8081";

export async function getData(): Promise<DATALIST> {
  const options: OPTIONS = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(API + `/v1/outlay-rows/entity/${EID}/row/list`, options);

  const data:  = await response.json;

  return data;
}

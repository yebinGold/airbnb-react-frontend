import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const fetchRooms = async () => {
  const res = await instance.get(`rooms/`);
  return res.data;
};

export const fetchRoom = async ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  const res = await instance.get(`rooms/${roomPk}`);
  return res.data;
};

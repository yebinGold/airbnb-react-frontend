import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
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

export const fetchRoomReviews = async ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  const res = await instance.get(`rooms/${roomPk}/reviews`);
  return res.data;
};

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "", // django security 따라서 post 요청 헤더에 csrftoken 넘겨주기
      },
    })
    .then((response) => response.data);

export const githubLogIn = (code: string) =>
  instance
    .post(
      `users/github`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "", // django security
        },
      }
    )
    .then((response) => response.status);

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRoom } from "../api";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery(["room", roomPk], fetchRoom);
  return <div>hi</div>;
};

export default RoomDetail;

import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { fetchRooms } from "./../api";
import { IRoomList } from "./../types";

const Home = () => {
  const { isLoading, data } = useQuery<IRoomList[]>(["rooms"], fetchRooms);

  return (
    <Grid
      my={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={10}
      templateColumns={{
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {data?.map((room) => (
        <Room
          imageUrl={
            room.photos[0]?.file ||
            "https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=720"
          }
          pk={room.pk}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
};

export default Home;

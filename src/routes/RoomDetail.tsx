import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRoom } from "../api";
import { IRoomDetail } from "./../types.d";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["room", roomPk],
    fetchRoom
  );
  return (
    <Box
      my={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton w={"50%"} h={45} isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <HStack mt={2}>
        <FaStar size={10} />
        <Text as="b">{data?.rating}</Text>
        <Text>•</Text>
        <Text>
          {data?.address}, {data?.city}, {data?.country}
        </Text>
      </HStack>
      <Grid
        mt={8}
        height="60vh"
        gap={2}
        templateRows={"1fr 1fr"}
        templateColumns="repeat(4, 1fr)"
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            key={index}
            overflow="hidden"
            rounded={"xl"}
          >
            <Skeleton w={"100%"} h={"100%"} isLoaded={!isLoading}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit="cover"
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack mt={8} w="40%" justifyContent={"space-between"}>
        <VStack alignItems="flex-start">
          <Skeleton isLoaded={!isLoading}>
            <Text fontSize={"xl"} as="b">
              House hosted by {data?.owner.username}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <HStack justifyContent={"flex-start"} w="100%">
              <Text>
                {data?.rooms} room{data?.rooms !== 1 ? "s" : null}
              </Text>
              <Text>•</Text>
              <Text>
                {data?.toilets} toilet{data?.toilets !== 1 ? "s" : null}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar
          name={data?.owner.name}
          size={"lg"}
          src={data?.owner.profile_photo}
        />
      </HStack>
    </Box>
  );
};

export default RoomDetail;

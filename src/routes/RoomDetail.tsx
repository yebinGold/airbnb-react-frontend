import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRoom } from "../api";
import { IRoomDetail, IReview } from "./../types.d";
import {
  Avatar,
  Box,
  Container,
  Divider,
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
import { fetchRoomReviews } from "./../api";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["room", roomPk],
    fetchRoom
  );
  const { isLoading: reviewsLoading, data: reviewsData } = useQuery<IReview[]>(
    ["room", roomPk, "reviews"],
    fetchRoomReviews
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
      <Skeleton w={"60%"} isLoaded={!isLoading}>
        <HStack mt={2}>
          <FaStar size={10} />
          <Text as="b">{data?.rating}</Text>
          <Text>•</Text>
          <Text>
            {reviewsData?.length} review{reviewsData?.length !== 1 ? "s" : null}
          </Text>
          <Text>•</Text>
          <Text>
            {data?.address}, {data?.city}, {data?.country}
          </Text>
        </HStack>
      </Skeleton>
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
      <HStack mt={8} w="50%" justifyContent={"space-between"}>
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
      <Divider mt={6} />
      <Box mt={8}>
        <Skeleton w={"30%"} isLoaded={!isLoading}>
          <Heading mb={5} fontSize={"xl"}>
            <HStack>
              <FaStar size={15} />
              <Text>{data?.rating}</Text>
              <Text>•</Text>
              <Text>
                {reviewsData?.length} review
                {reviewsData?.length !== 1 ? "s" : null}
              </Text>
            </HStack>
          </Heading>
        </Skeleton>
        <Container maxW="container.lg" mt={6} marginX="none">
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack key={index} alignItems={"flex-start"}>
                <HStack spacing={3}>
                  <Avatar
                    name={review.user.name}
                    size={"md"}
                    src={review.user.profile_photo}
                  />
                  <VStack alignItems={"flex-start"} spacing={0}>
                    <Heading fontSize={"md"}>{review.user.username}</Heading>
                    <HStack spacing={1}>
                      <FaStar size={10} /> <Text>{review.rating}</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Text>{review.payload}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default RoomDetail;

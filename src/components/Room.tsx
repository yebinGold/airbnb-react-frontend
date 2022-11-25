import {
  Grid,
  Box,
  Image,
  VStack,
  Button,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

const Room = ({ imageUrl, name, rating, city, country, price }: IRoomProps) => {
  const grayTextColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"} spacing={1}>
      <Box position="relative" rounded="2xl" mb={2} overflow="hidden">
        <Image w={360} minH="280" src={imageUrl} />
        <Button
          variant={"unstyled"}
          position="absolute"
          top={2}
          right={0}
          color={"white"}
        >
          <FaRegHeart size={20} />
        </Button>
      </Box>
      <Box w="100%">
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text noOfLines={1} fontSize={"md"} as="b">
            {name}
          </Text>
          <HStack spacing={1} alignItems={"center"}>
            <FaStar size={15} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={grayTextColor}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={"sm"} color={grayTextColor}>
        <Text as="b">${price}</Text> / night
      </Text>
    </VStack>
  );
};

export default Room;

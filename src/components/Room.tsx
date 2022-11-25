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

const Room = () => {
  const grayTextColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"} spacing={1}>
      <Box position="relative" rounded="2xl" mb={2} overflow="hidden">
        <Image
          minH="280"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=720"
        />
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
      <Box>
        <Grid gap={2} templateColumns={"4fr 1fr"}>
          <Text noOfLines={1} fontSize={"md"} as="b">
            케이프타운, 웨스턴케이프 주, 남아프리카
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>4.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={grayTextColor}>
          Seoul, South Korea
        </Text>
      </Box>
      <Text fontSize={"sm"} color={grayTextColor}>
        <Text as="b">$150</Text> / night
      </Text>
    </VStack>
  );
};

export default Room;

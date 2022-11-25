import { Box } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/react";

const RoomSkeleton = () => {
  return (
    <Box>
      <Skeleton h={280} rounded="2xl" mb={5} />
      <SkeletonText w={"50%"} />
    </Box>
  );
};

export default RoomSkeleton;

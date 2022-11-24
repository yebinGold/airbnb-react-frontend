import { Box, Button, HStack } from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Box>
      <HStack
        px={"5"}
        py={"7"}
        borderBottomWidth={1}
        justifyContent={"space-between"}
      >
        <Box color={"red.500"}>
          <FaAirbnb size={"38"} />
        </Box>
        <HStack spacing={"2"}>
          <Button size={"sm"}>Log In</Button>
          <Button colorScheme={"red"} size={"sm"}>Sign Up</Button>
        </HStack>
      </HStack>
      <Outlet /> {/** 자식 컴포넌트 렌더링 될 위치 */}
    </Box>
  );
};

export default Root;

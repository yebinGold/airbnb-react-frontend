import { Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <VStack bg="gray.100" minHeight={"100vh"} justifyContent={"center"}>
      <Heading marginBottom={"2rem"}>Page Not Found</Heading>
      <Text>It seems you're lost..!</Text>
      <Link to="/">
        <Button colorScheme={"facebook"} variant={"link"}>
          Go Home &rarr;
        </Button>
      </Link>
    </VStack>
  );
};

export default NotFound;

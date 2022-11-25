import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <Box mb={4}>
      <HStack my={6}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w="100%" leftIcon={<FaGithub />} colorScheme={"blackAlpha"}>
          Continue with Github
        </Button>
        <Button w="100%" leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
};

export default SocialLogin;

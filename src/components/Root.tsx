import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  FaAirbnb,
  FaComment,
  FaGithub,
  FaLock,
  FaMoon,
  FaUser,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Root = () => {
  const { isOpen, onClose, onOpen } = useDisclosure(); // for modal

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
          <IconButton
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log In</Button>
          <Button colorScheme={"red"}>Sign Up</Button>
        </HStack>
        <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay /> {/** 배경 약간 어둡게 만들어서 모달 돋보이게 */}
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color={"gray.500"}>
                        <FaUser />
                      </Box>
                    }
                  />
                  <Input variant={"flushed"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color={"gray.500"}>
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input variant={"flushed"} placeholder="Password" />
                </InputGroup>
              </VStack>
              <Button mt={4} w="100%" colorScheme={"red"}>
                Log In
              </Button>
              <Box mb={4}>
                <HStack my={6}>
                  <Divider />
                  <Text
                    textTransform={"uppercase"}
                    color="gray.500"
                    fontSize="xs"
                    as="b"
                  >
                    Or
                  </Text>
                  <Divider />
                </HStack>
                <VStack>
                  <Button
                    w="100%"
                    leftIcon={<FaGithub />}
                    colorScheme={"blackAlpha"}
                  >
                    Continue with Github
                  </Button>
                  <Button
                    w="100%"
                    leftIcon={<FaComment />}
                    colorScheme={"yellow"}
                  >
                    Continue with Kakao
                  </Button>
                </VStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet /> {/** 자식 컴포넌트 렌더링 될 위치 */}
    </Box>
  );
};

export default Root;

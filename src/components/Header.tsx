import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure(); // for modal

  return (
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
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default Header;

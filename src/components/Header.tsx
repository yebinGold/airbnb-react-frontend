import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const Header = () => {
  const { isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure(); // for login modal
  const { isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onSignUpOpen } = useDisclosure(); // for signup modal

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
        <Button onClick={onLoginOpen}>Log In</Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign Up</Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
};

export default Header;

import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "./../lib/useUser";
import { logOut } from "./../api";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const { userLoading, user, isLoggedIn } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure(); // for login modal
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure(); // for signup modal

  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const queryClient = useQueryClient();

  const onLogOut = async () => {
    const toastId = toast({
      title: "Loggin out...",
      status: "loading",
      duration: 9000,
      isClosable: true,
      position: "bottom-right",
    });
    await logOut();
    queryClient.refetchQueries(["me"]); // me라는 이름의 query를 refetch
    toast.update(toastId, {
      status: "success",
      title: "Good Bye!",
      description: "You are logged out.",
    });
  };

  return (
    <Stack
      px={"5"}
      py={"7"}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        sm: 3,
        md: 4,
      }}
      borderBottomWidth={1}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <Box color={logoColor}>
          <FaAirbnb size={"38"} />
        </Box>
      </Link>
      <HStack spacing={"2"}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log In</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>
                  Sign Up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar
                  name={user?.username}
                  size={"md"}
                  src={user?.profile_photo}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
};

export default Header;

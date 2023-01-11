import { Spinner, useToast, VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";
import { useQueryClient } from "@tanstack/react-query";

const GithubConfirm = () => {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const param = new URLSearchParams(search);
    const code = param.get("code");
    if (code) {
      const status = await githubLogIn(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "Welcome!",
          description: "You are logged in.",
          position: "bottom-right",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }
      //toast({ status: "error", title: "There is an error...", description: "Please try it again" });
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack mt={40} justifyContent={"center"}>
      <Heading marginBottom={"2rem"}>Sign in with Github</Heading>
      <Text>You are logging in...</Text>
      <Spinner size={"lg"} />
    </VStack>
  );
};

export default GithubConfirm;

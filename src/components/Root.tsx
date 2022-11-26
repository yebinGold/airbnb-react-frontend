import { Box } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <Box>
      <Header />
      <Outlet /> {/** 자식 컴포넌트 렌더링 될 위치 */}
      <ReactQueryDevtools />
    </Box>
  );
};

export default Root;

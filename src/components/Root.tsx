import { Box } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <Box>
      <Header />
      <Outlet /> {/** 자식 컴포넌트 렌더링 될 위치 */}
    </Box>
  );
};

export default Root;

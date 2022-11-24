import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      i'm root
      <Outlet /> {/** 자식 컴포넌트 렌더링 될 위치 */}
    </div>
  );
};

export default Root;

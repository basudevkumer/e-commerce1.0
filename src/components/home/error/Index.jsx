import Container from "@/components/commonComponent/containers/Container";
import React from "react";

const Error = () => {
  return (
    <div className="pt-[72px]">
      <Container>
        <div className="grid grid-cols-4 ">
          <div className=""></div>{" "}
          <div className="col-span-3 text-center bg-danger_500 p-6 text-gray_00 xl_600">
            Have an Product Card error......
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;

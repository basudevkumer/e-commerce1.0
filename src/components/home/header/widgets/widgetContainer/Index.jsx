import Container from "@/components/commonComponent/containers/Container";
import React from "react";
import BigWidge from "../bigWidgets/Index";
import SmallWidget from "../smallWidget/Index";
import { allImages } from "@/helpers/ImageProvider";

const WidgetContainer = () => {
  let { widget2 } = allImages;

  return (
    <div className="py-6">
      <Container>
        <div className=" grid grid-cols-3 items-center gap-x-6 h-[520px] ">
          <div className="col-span-2 h-[100%] ">
            <BigWidge />
          </div>
          <div className=" h-[100%]   flex flex-col gap-y-6">
            <div className=" h-[50%] ">
              <SmallWidget images={widget2} />
            </div>
            <div className=" h-[50%]">
              <SmallWidget images={widget2} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WidgetContainer;

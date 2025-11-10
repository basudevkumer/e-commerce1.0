import Button from "@/components/commonComponent/commonButton/Button";
import Container from "@/components/commonComponent/containers/Container";
import { allImages } from "@/helpers/ImageProvider";
import React from "react";

const Subscribe = () => {
  const { subscribe } = allImages;

  return (
    <div className="py-[72px] bg-secondary_700 ">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-gray_00 heading1">Subscribe to our newsletter</h1>
          <p className="md_400 text-gray_00 w-[536px] text-center pt-3 pb-8">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="w-[625px] bg-gray_00  rounded  flex items-center gap-x-4 p-4">
            <input
              type="email"
              className="w-[424px] border-none rounded p-3 "
              placeholder="Email address"
            />
            <Button
              children={"Subscribe"}
              className={"!bg-primary_500  !text-gray_00"}
            />
          </div>
          <div className="w-[500px] h-[1px] bg-gray_400 mt-8 mb-6"></div>
          <div className="flex items-center gap-x-12">
            {subscribe.map((items, index) => {
              return (
                <div key={items.id}>
                  <img
                    src={items.src}
                    alt={"subscribeImages" + " " + items.id}
                    className="h-[23px] w-[100%] object-cover "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

import Container from "@/components/commonComponent/containers/Container";
import { allImages } from "@/helpers/ImageProvider";
import React from "react";

const HomeProdctAd = () => {
  // image destructor here
  const { homeAds } = allImages;
  return (
    <div className="pt-[20px] pb-[72px]">
      <Container>
        <div className="grid grid-cols-2 gap-x-6">
          {homeAds.map((items) => {
            return ( <picture key={items.id} className="cursor-pointer">
              <img src={items.src} alt="homeAdimages" className="w-full h-[336px] object-cover" />
            </picture>)
          })}
        </div>
      </Container>
    </div>
  );
};

export default HomeProdctAd;

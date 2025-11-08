import Container from "@/components/commonComponent/containers/Container";
import { allIcons } from "@/helpers/IconProvider";
import React, { useState } from "react";

const FeatureNav = () => {
  const { featureIcon } = allIcons;

  const [featureData, setFeatureData] = useState([
    {
      id: 1,
      icons: featureIcon[0].icon,
      title: "Fasted Delivery",
      description: "Delivery in 24/H",
    },
    {
      id: 2,
      icons: featureIcon[1].icon,
      title: "24 Hours Return",
      description: "Delivery in 24/H",
    },
    {
      id: 3,
      icons: featureIcon[2].icon,
      title: "Secure Payment",
      description: "Your money is safe",
    },
    {
      id: 4,
      icons: featureIcon[3].icon,
      title: "Support 24/7",
      description: "Live contact/message",
    },
  ]);

  return (
    <div className="pt-6">
      <Container>
        <div className="flex justify-between items-center border border-gray_100 p-4">
          {featureData.map((items, index) => {
            return (
              <div
                className="  pr-[80px]   border-r border-gray_100 last:pr-0 last:border-r-0  "
                key={items.id}
              >
                <div className="flex items-center gap-x-4 p-[18px]">
                  <span className="text-[35px]">{items.icons}</span>
                  <div className="">
                    <p className="label3 text-gray_900">{items.title}</p>
                    <p className="sm_400 text-gray_600">{items.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FeatureNav;

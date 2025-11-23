import BestDeal from "@/components/commonComponent/bestDeals/BestDeal";
import Container from "@/components/commonComponent/containers/Container";
import { useBestDealProducts } from "@/hooks/useCategory";
import React, { useState } from "react";

const BestDealContainter = () => {
  // useBestDealProducts give data
  let { data: product = [], isPending, isError } = useBestDealProducts(0);


  


  // error skeleton
  if (isError) {
    return <div>Error........</div>;
  }
  // here slice products by 3 items
  let sections = [
    {
      id: 1,
      title: "FLASH SALE TODAY",
      products: product.slice(0, 3),
    },
    {
      id: 2,
      title: "BEST SELLERS",
      products: product.slice(3, 6),
    },
    {
      id: 3,
      title: "TOP RATED",
      products: product.slice(6, 9),
    },
    {
      id: 4,
      title: "NEW ARRIVAL",
      products: product.slice(9, 12),
    },
  ];

  return (
    <div className="pb-[70px]">
      <Container>
        <div>
          <div className="grid grid-cols-4 gap-x-6  ">
            {sections.map((items) => {
              return (
                <BestDeal
                  productList={items.products}
                  title={items.title}
                  key={items.id}
                  isPending={isPending}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestDealContainter;

import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import ProductCard from "@/components/commonComponent/commonProductCard/ProductCard";

const ProdtRightCont = ({ allFilteredItems = [] }) => {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(allFilteredItems.length / 4),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 350,
  });

  return (
    <div>
      <div ref={parentRef} style={{ height: "2400px", overflowY: "auto" }}>
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        
        >
          {rowVirtualizer.getVirtualItems().map((row) => {
            const start = row.index * 4;
            const products = allFilteredItems.slice(start, start + 4);

            return (
              <div
                key={row.key}
                style={{
                  position: "absolute",
                  width: "100%",
                  transform: `translateY(${row.start}px)`,
                }}
                className="grid grid-cols-4 gap-4"
              >
                {products.map((p, id) => (
                  <ProductCard product={p} key={id} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProdtRightCont;

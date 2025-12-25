import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const ShopCheckBox = ({ availableValue = [], selected = [], onChange }) => {
  const parentRef = useRef(null);


  const itemCount = availableValue.length;


  const rowCount = Math.ceil(itemCount / 2);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50, 
    overscan: 5,
  });

  const handleChange = (item) => {
    if (selected.includes(item)) {
      onChange(selected.filter((i) => i !== item));
    } else {
      onChange([...selected, item]);
    }
  };

  return (
    <div>
      <p className="label2 text-gray_900 pb-4">Popular Brands</p>

      <div
        ref={parentRef}
        className="h-96 overflow-auto  rounded-lg" 
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            
            const firstItemIndex = virtualRow.index * 2;
            const secondItemIndex = firstItemIndex + 1;

            const firstItem = availableValue[firstItemIndex];
            const secondItem =
              secondItemIndex < itemCount ? availableValue[secondItemIndex] : null;

            return (
              <div
                key={virtualRow.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                className="grid grid-cols-2 gap-x-4 gap-y-3 px-4"
              >
                {firstItem && (
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      id={`brand-${firstItemIndex}`}
                      checked={selected.includes(firstItem)}
                      onChange={() => handleChange(firstItem)}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`brand-${firstItemIndex}`}
                      className="sm_400 text-gray_700 cursor-pointer select-none"
                    >
                      {firstItem}
                    </label>
                  </div>
                )}

                {secondItem && (
                  <div className="flex items-center gap-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      id={`brand-${secondItemIndex}`}
                      checked={selected.includes(secondItem)}
                      onChange={() => handleChange(secondItem)}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`brand-${secondItemIndex}`}
                      className="sm_400 text-gray_700 cursor-pointer select-none"
                    >
                      {secondItem}
                    </label>
                  </div>
                )}

                {!secondItem && <div></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCheckBox;
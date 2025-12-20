import React, { useEffect, useState } from "react";

const Ceracell = ({ img = [] }) => {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (img?.length) {
      setActiveImage(img[0]);
    }
  }, [img]);

  if (!img?.length) {
    return <p className="text-center">No Image Found</p>;
  }

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="border border-gray_200 rounded p-4 mb-4">
        <img
          src={activeImage}
          alt="main-product"
          className="w-full h-[400px] object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-x-4 justify-center">
        {img.map((item, index) => (
          <figure
            key={index}
            onClick={() => setActiveImage(item)}
            className={`w-[90px] h-[90px] border rounded cursor-pointer p-1
              ${
                activeImage === item ? "border-primary_500" : "border-gray_200"
              }`}
          >
            <img
              src={item}
              alt="thumb"
              className="w-full h-full object-cover rounded"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Ceracell;

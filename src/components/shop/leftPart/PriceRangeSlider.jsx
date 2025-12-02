import React, { useRef, useEffect } from "react";

const DualRangeSlider = ({
  min = 0,
  max = 100000,
  step = 100,
  value = [0, 100000], // [minValue, maxValue] from parent
  onChange, // parent এর setPriceRange
}) => {
  const [minValue, maxValue] = value;
  const trackRef = useRef(null);

  // Debounce: drag/input চেঞ্জ হলে 300ms পরে parent কে জানাবে
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange([minValue, maxValue]);
    }, 300);

    return () => clearTimeout(timer);
  }, [minValue, maxValue, onChange]);

  const getPercent = (val) => Math.round(((val - min) / (max - min)) * 100);

  const updateValues = (newMin, newMax) => {
    onChange([
      Math.max(min, Math.min(newMin, maxValue - step)),
      Math.min(max, Math.max(newMax, minValue + step)),
    ]);
  };

  // Number input থেকে
  const handleMinInput = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      updateValues(val, maxValue);
    }
  };

  const handleMaxInput = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      updateValues(minValue, val);
    }
  };

  // Drag logic (mouse + touch)
  const startDrag = (type, e) => {
    e.preventDefault();
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const trackWidth = rect.width;

    const moveHandler = (moveEvent) => {
      const clientX = moveEvent.clientX || moveEvent.touches?.[0]?.clientX;
      if (clientX < rect.left || clientX > rect.right) return;

      let percent = ((clientX - rect.left) / trackWidth) * 100;
      percent = Math.max(0, Math.min(100, percent));
      let newValue = min + (percent / 100) * (max - min);
      newValue = Math.round(newValue / step) * step;

      if (type === "min") {
        updateValues(newValue, maxValue);
      } else {
        updateValues(minValue, newValue);
      }
    };

    const upHandler = () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("touchmove", moveHandler);
      document.removeEventListener("touchend", upHandler);
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", upHandler);
    document.addEventListener("touchmove", moveHandler);
    document.addEventListener("touchend", upHandler);
  };

  return (
    <div className="w-full max-w-xl mx-auto pt-10">
      <h2 className="label2 text-gray-900 pb-4">Price Range</h2>

      <div className="relative mx-auto w-full max-w-md">
        <div className="relative w-full h-8" ref={trackRef}>
          {/* Background Track */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full" />

          {/* Filled Range */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 bg-primary_500 rounded-full transition-all duration-300"
            style={{
              left: `${getPercent(minValue)}%`,
              right: `${100 - getPercent(maxValue)}%`,
            }}
          />

          {/* Min Thumb */}
          <div
            className="absolute top-[100%] -translate-y-1/2 w-[32px] h-[32px] bg-white rounded-full shadow-lg border-4 border-primary_500 cursor-grab active:cursor-grabbing z-20 transition-all hover:scale-110"
            style={{
              left: `${getPercent(minValue)}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseDown={(e) => startDrag("min", e)}
            onTouchStart={(e) => startDrag("min", e)}
          />

          {/* Max Thumb */}
          <div
            className="absolute top-[100%] -translate-y-1/2 w-[32px] h-[32px] bg-white rounded-full shadow-lg border-4 border-primary_500 cursor-grab active:cursor-grabbing z-20 transition-all hover:scale-110"
            style={{
              left: `${getPercent(maxValue)}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseDown={(e) => startDrag("max", e)}
            onTouchStart={(e) => startDrag("max", e)}
          />
        </div>
      </div>

      {/* Input Boxes */}
      <div className="flex justify-between gap-6 mt-8">
        <div className="flex-1">
          <p className="label2 text-gray_500 text-center mb-2">Min price</p>
          <input
            type="number"
            value={minValue}
            onChange={handleMinInput}
            className="w-full px-4 py-3 text-center border-2 border-gray-300 rounded-xl font-semibold focus:border-primary_500 focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <p className="label2 text-gray_500 text-center mb-2">Max price</p>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxInput}
            className="w-full px-4 py-3 text-center border-2 border-gray-300 rounded-xl font-semibold focus:border-primary_500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DualRangeSlider;

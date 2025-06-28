import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const { isLoading, title } = useSelector((state) => state.loader);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      {title && (
        <p className="mt-4 text-lg font-medium text-orange-500 animate-fadeIn">
          {title}
        </p>
      )}
    </div>
  );
};

export default Loader;
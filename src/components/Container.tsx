import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto my-0 p-0 max-w-xl">
      {children}
    </div>
  );
};

export default Container;

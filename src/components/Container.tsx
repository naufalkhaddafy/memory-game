import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto my-0 p-0 min-h-screen max-w-xl">
      {children}
    </div>
  );
};

export default Container;

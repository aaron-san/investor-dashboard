import React from "react";

const Pane: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-800 p-6 border border-slate-600 w-[300px] md:w-[500px] lg:w-[600px] min-w-[200px] max-w-[400px]">
      {children}
    </div>
  );
};

export default Pane;

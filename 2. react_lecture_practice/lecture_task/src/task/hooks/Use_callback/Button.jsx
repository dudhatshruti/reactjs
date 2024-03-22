import React from "react";

const Button = ({ handleclick, children }) => {
  console.log("Rendering button - ", children);
  return (
    <div>
      <button className="btn w-52" onClick={handleclick}>
        {children}
      </button>
    </div>
  );
};
export default React.memo(Button);

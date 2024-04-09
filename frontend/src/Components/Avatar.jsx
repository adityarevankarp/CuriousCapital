import React from "react";
import i1 from "../assets/avatars/avatar_three.jpeg";
function Avatar() {
  return (
    <div>
      <img
        className="rounded-full scale-75 hover:border-8 border-[#e55db2] hover:transition ease-in-out delay-150 duration-300"
        src={i1}
        alt=""
      />
      <h1 className="text-white font-semibold text-center"> Ceo</h1>
    </div>
  );
}

export default Avatar;

import React from "react";
import Image from "next/image";

function WorkItem({ item }) {
  const { image, text } = item;
  return (
    <div className="workCard">
      <p className="creation-text">{text}</p>
      <Image
        className="card-image"
        src={image}
        width="654px"
        height="240px"
        alt="image"
      />
    </div>
  );
}

export default WorkItem;

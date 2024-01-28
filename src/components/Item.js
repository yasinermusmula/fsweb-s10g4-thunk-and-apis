import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">Activity: {data.activity}</p>
      <p className="text-2xl p-10">Type: {data.type}</p>
      <p className="text-2xl p-10">Participants: {data.participants}</p>
      <p className="text-2xl p-10">Price: {data.price}</p>
      {data.link && (
        <a href={data.link} target="_blank " className="text-2xl p-10">
          go to url
        </a>
      )}
      <p className="text-2xl p-10">Key: {data.key}</p>
      <p className="text-2xl p-10">Accessibility: {data.accessibility}</p>
    </div>
  );
}

export default Item;

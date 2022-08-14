import React from "react";
import Link from "next/dist/client/link";

function Work() {
  return (
    <div className="Work">
      <div className="title">
        <h1>Our Creations</h1>
        <button>
          <a>see all</a>
        </button>
      </div>

      <div className="container">
        <div className="card w1">
          <h1>deep earth</h1>
        </div>
        <div className="card w2">
          <h1>night arcade</h1>
        </div>
        <div className="card w3">
          <h1>soccer team vr</h1>
        </div>
        <div className="card w4">
          <h1>the garid</h1>
        </div>
        <div className="card w5">
          <h1>from up above vr</h1>
        </div>
        <div className="card w6">
          <h1>pocket borealis</h1>
        </div>
        <div className="card w7">
          <h1>the curiosity</h1>
        </div>
        <div className="card w8">
          <h1>make it fisheye</h1>
        </div>
      </div>
    </div>
  );
}

export default Work;

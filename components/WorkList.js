import React from "react";
import Card from "./shared/Card";
import Image from "next/image";
import WorkItem from "./WorkItem";

function WorkList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Card key={item.id}>
          <WorkItem item={item} />
        </Card>
      ))}
    </div>
  );
}

export default WorkList;

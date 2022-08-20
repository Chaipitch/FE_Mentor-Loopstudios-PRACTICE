import { useState } from "react";
import Link from "next/dist/client/link";
import creationsMobile from "../public/Data/creations_mobile";
import WorkList from "./WorkList";
import styles from "../styles/Work.module.scss";

function Work() {
  const [data, setData] = useState(creationsMobile);

  return (
    <div className={styles.Work}>
      <div className="title">
        <h1>Our Creations</h1>
      </div>
      <div>
        <WorkList data={data} />
      </div>
      <div>
        <Link href="/">
          <a>See All</a>
        </Link>
      </div>
    </div>
  );
}

export default Work;

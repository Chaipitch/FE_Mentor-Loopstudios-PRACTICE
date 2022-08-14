import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

function Layout({ title, children, keywords, description }) {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Loop Studio",
  keywords: "VR, Design, Interactive arts",
  description: "The leader in interactive VR",
};

export default Layout;

// This page will be always our Home page
// our-domain.com/
import Head from "next/head";
import classes from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Next-Js Basics</title>
      </Head>
      <h1 className={classes.homePageTitle}>This is Home Page</h1>
      <p className={classes.homePageSubText}>
        This is Basically Practical of Next js Basics that how next js Routing
        works , and also Added how css Modules works in the project
      </p>
    </>
  );
};

export default HomePage;

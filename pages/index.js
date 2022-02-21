import { Heading, Navigation, Page } from "@shopify/polaris";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Test from "../components/Test";

export default function Index() {


  return (
    <>
    <Heading>
       <NavBar/>
          {/* COMPONENT */}
          <h1>
          Home
          </h1>
      </Heading>
    </>
      

  );
}

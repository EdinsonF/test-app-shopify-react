import { Heading, Page } from "@shopify/polaris";
import Test from "../components/Test";

export default function Index() {
  return (
    <Page>
      <Heading>
        this is my app de react in shopify
        <span role="img" aria-label="tada emoji">
          🎉
        </span>

        <Test/>
      </Heading>
    </Page>
  );
}

import Layout from "../components/Layout";
import { SiteProvider } from "../components/context/SiteContext";

export default function Home() {
  return (
    <SiteProvider>
      <Layout></Layout>
    </SiteProvider>
  );
}

import Layout from "../components/Layout";
import LogoLg from "../components/LogoLg";
import { SiteProvider } from "../components/context/SiteContext";

export default function Home() {
  return (
    <SiteProvider>
      <Layout>
        <LogoLg />
      </Layout>
    </SiteProvider>
  );
}

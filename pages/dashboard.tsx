import Dashboard from "@/components/Dashboard/Dashboard";
import Error from "@/components/Error/Error";
import InstanceList from "@/components/InstanceList/InstanceList";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { getInstances } from "./api/instances";

type Props = {
  instances?: Instance[];
  error?: CustomError;
};

const DashboardPage = ({ instances, error }: Props) => {
  if (error) {
    return (
      <Layout title="Error | Instance">
        <Error error={error} />
      </Layout>
    );
  }

  return (
    <Layout title="Dashboard">
      <Dashboard />
      {instances && <InstanceList instances={instances} />}
    </Layout>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const instances = await getInstances();
    return { props: { instances } };
  } catch (error) {
    return { props: { error } };
  }
};

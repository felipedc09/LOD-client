import { GetStaticProps, GetStaticPaths } from "next";
import Error from "@/components/Error/Error";
import Layout from "@/components/Layout";
import InstanceDetail from "@/components/InstanceDetail/InstanceDetail";
import { getInstanceByName, getInstances } from "pages/api/instances";

type Props = {
  currentInstance?: InstanceDetail;
  error?: CustomError;
};

const InstanceDetailPage = ({ currentInstance, error }: Props) => {
  if (error) {
    return (
      <Layout title="Error | Instance">
        <Error error={error} />
      </Layout>
    );
  }

  return (
    <Layout
      title={`${currentInstance ? currentInstance.name : "Instance Detail"}`}
    >
      {currentInstance && <InstanceDetail instance={currentInstance} />}
    </Layout>
  );
};

export default InstanceDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const instances = await getInstances();
  const paths = instances.map((instance) => ({
    params: { name: instance.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const instanceName = params?.name as string;
    const currentInstance = await getInstanceByName(instanceName);
    return { props: { currentInstance } };
  } catch (error) {
    return { props: { error } };
  }
};

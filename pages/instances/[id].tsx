import { GetStaticProps, GetStaticPaths } from "next";
import Error from "@/components/Error/Error";
import Layout from "@/components/Layout";
import InstanceDetail from "@/components/InstanceDetail/InstanceDetail";
import { getInstances } from "pages/api/instances/instances.request";
import { getPackagesByInstanceId } from "pages/api/packages/package.request";

type Props = {
  packages?: Package[];
  error?: CustomError;
};

const InstanceDetailPage = (props: Props) => {
  const { packages, error } = props;
  if (error) {
    return (
      <Layout title="Error | Instance">
        <Error error={error} />
      </Layout>
    );
  }

  return (
    <Layout title={`${"Instance Detail"}`}>
      {packages && <InstanceDetail packages={packages} />}
    </Layout>
  );
};

export default InstanceDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const instances = await getInstances();
  const paths = instances.map((instance) => ({
    params: { id: instance._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    const id = params?.id as string;
    const packages = await getPackagesByInstanceId(id);
    return { props: { packages } };
  } catch (error) {
    return { props: { error } };
  }
};

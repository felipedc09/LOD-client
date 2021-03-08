import { Divider, IconButton, TextField } from "@material-ui/core";
import Link from "next/link";
import { MdAddBox } from "react-icons/md";
import Layout from "@/components/Layout";
import InstanceList from "@/components/InstanceList/InstanceList";

const DashboardPage = () => (
  <Layout title="Dashboard">
    <h1>Ckan Repositories</h1>
    <form noValidate autoComplete="off">
      <IconButton aria-label="delete">
        <MdAddBox />
      </IconButton>
      <TextField id="add-instance" label="Instance URL" variant="outlined" />
    </form>
    <Divider variant="middle" />
    <InstanceList />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default DashboardPage;

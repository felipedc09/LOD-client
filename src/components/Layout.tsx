import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "./Footer/Footer";
import { Container } from "@material-ui/core";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "LOD - Ckan analyzer" }: Props) => (
  <Container>
    <Head>
      <title>LOD - {title}</title>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </nav>
    </header>
    {children}
    <Footer />
  </Container>
);

export default Layout;

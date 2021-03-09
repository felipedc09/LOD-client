import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "LOD - Ckan analyzer" }: Props) => (
  <div>
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
    <footer>
      <hr />
      <span>LOD - Ckan analyzer</span>
    </footer>
  </div>
);

export default Layout;

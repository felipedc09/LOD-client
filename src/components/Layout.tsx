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
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
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

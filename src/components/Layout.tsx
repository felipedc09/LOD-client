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
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
      />

      <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
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

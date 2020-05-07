import React from "react";

import Header from "./components/Header";

import Table from "./components/Table";

export default function App() {
  return (
    <>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>

      <Table />
    </>
  );
}

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ChartWrapper from "./ChartWrapper";

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Bar Charts R Us plc</Navbar.Brand>
      </Navbar>
      <Container>
        <ChartWrapper />
      </Container>
    </div>
  );
}

export default App;

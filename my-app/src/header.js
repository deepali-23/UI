import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const MainContainer = styled.div`
  background-color: #191d43;
  width: 100%;
  // height: 10000px;
`;
const Home = styled.span`
  color: #ffffff;
`;
export default function Header() {
  return <MainContainer>{/* <Home>home</Home> */}</MainContainer>;
}

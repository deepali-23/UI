import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const MainContainer = styled.div`
  background-color: #191d43;
  width: 100%;
  height: 100px;
`;
const Home = styled.span`
  color: #ffffff;
`;
const Span = styled.span`
  font-size: 10px;
  color: #ffffff;
`;
export default function Header() {
  return (
    <MainContainer>
      <img src="/public/logo192.svg" />
      <Span>pateints</Span>

      <Home>home</Home>
      <div>
        <div></div>
      </div>
    </MainContainer>
  );
}

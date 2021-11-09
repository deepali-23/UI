import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

export default function Screen() {
  return (
    <div>
      <Row>
        <MainContainer>
          <SubContainer>
            <MainHeading> Resarch. Collaborate. Build.</MainHeading>

            <SubHeading>
              Design And development studio turning ideas into solutions.
            </SubHeading>
            <Row style={{ justifyContent: "space-between" }}>
              <Button>Continue</Button>
              <Button>Products</Button>
              <Button>Our Work</Button>
              <Button>Solutions</Button>
              <Button>More</Button>
            </Row>
          </SubContainer>
        </MainContainer>
      </Row>
    </div>
  );
}

const MainContainer = styled.div`
  width: 100%;
`;
const SubContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 80px;
`;
const MainHeading = styled.span`
  text-align: left;
  font-size: 70px;
  font-weight: 600;
  color: #191919;
`;
const SubHeading = styled.span`
  font: normal normal medium 18px/21px Inter;
  color: #191919;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
`;
const Button = styled.button`
  background: #102c78 0% 0% no-repeat padding-box;
  border-radius: 4px;
  font: normal normal medium 16px/20px Inter;
  color: #ffffff;
  width: 100%;
  max-width: 175px;
  margin-top: 20px;
  display: flex;
`;

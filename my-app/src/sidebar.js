import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: #ecf0f1;
`;
const Container = styled.div`
  width: 100%;
  background-color: #bdd9db;
  margin-top: 80px;
  height: 597px;
  max-width: 1170px;
  border-radius: 10px;
`;
const SideDiv = styled.div`
  width: 100%;
  max-width: 220px;
  background-color: #61a3a8;
  height: 491px;
  padding: 53px 45px;
  border-radius: 10px;
  display: flex;
`;
const Heading = styled.span`
  font-size: 15px;
  color: #ffffff;
`;
const MainHeading = styled.span`
  font-size: 25px;
  color: #ffffff;
`;
const RowDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 25px;
  align-items: center;
  text-align: center;
`;
const RightContainer = styled.div`
  width: 100%;
  padding: 53px 45px;
`;
export default function Sidebar() {
  return (
    <MainContainer>
      <Container>
        <div style={{ display: "flex" }}>
          <SideDiv>
            <Column>
              <Row>
                <img src="/" />
                <MainHeading>creativefuse</MainHeading>
              </Row>
              <RowDiv>
                <Heading>Introduction</Heading>
              </RowDiv>
              <RowDiv>
                <Heading>Human Basic</Heading>
              </RowDiv>
              <RowDiv>
                <Heading>Confirmation</Heading>
              </RowDiv>
            </Column>
          </SideDiv>
          <RightContainer>
            <Content>
              Hey there! is it safe to assume you're in need of some help?
              Well.no worries--we've got yourback! Let's get started on your
              HelpDesk Ticket by filling out the info below.
            </Content>
            <RowSecondDiv>
              <FullName>FullName</FullName>
            </RowSecondDiv>
            <RowSecondDiv>
              <Input placeholder="You can call me" />
            </RowSecondDiv>
            <RowSecondDiv>
              <Company>Company</Company>
            </RowSecondDiv>
            <RowSecondDiv>
              <Input placeholder="I work here" />
            </RowSecondDiv>
            <RowSecondDiv>
              <Email>Email</Email>
            </RowSecondDiv>
            <RowSecondDiv>
              <Input placeholder="You can send status updates here." />
            </RowSecondDiv>
            <RowSecondDiv>
              <Request>Request/Need</Request>
            </RowSecondDiv>
            <RowSecondDiv>
              <Input />
            </RowSecondDiv>
            <RowSecondDiv>
              <Urgency>Urgency</Urgency>
            </RowSecondDiv>
            <RowSecondDiv>
              <Input />
            </RowSecondDiv>
          </RightContainer>
        </div>
      </Container>
    </MainContainer>
  );
}
const RowSecondDiv = styled.div`
  margin-top: 15px;
`;
const Content = styled.span`
  color: #61a3a8;
`;
const FullName = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 8px;
  border: none;
`;
const Company = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Email = styled.span`
  font-size: 15px;

  font-weight: 600;
`;
const Request = styled.span`
  font-size: 15px;

  font-weight: 600;
`;
const Urgency = styled.span`
  font-size: 15px;

  font-weight: 600;
`;

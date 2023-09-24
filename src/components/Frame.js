import React from "react";
import tw from "twin.macro";
import "styled-components/macro";

const Container = tw.div`h-full w-full flex flex-col bg-orange-200 p-2`;

const Frame = ({ children }) => <Container>{children}</Container>;

export default Frame;

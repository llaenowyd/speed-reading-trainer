import React from "react";
import tw from 'twin.macro';
import 'styled-components/macro';

const Container = tw.div`flex flex-row items-center h-12 gap-4 px-2 py-8 border-b`
const Image = tw.img`h-12`
const Text = tw.span`select-none text-xl`

const Header = () => (
  <Container>
    <Image src="logo512.png" alt="Logo" />
    <Text>Speed Reader by a110</Text>
  </Container>
);

export default Header;

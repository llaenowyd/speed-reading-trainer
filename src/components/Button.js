import React from 'react'
import tw, { styled } from 'twin.macro';
import 'styled-components/macro';

const StyledAnchor = styled.a(() => [
  `
    text-shadow: 1px 1px 1px #b97;
  `,
  tw`
    shadow-md
    bg-gradient-to-b
    from-sky-500
    to-sky-600
    rounded-md
    border-solid
    border-[1px]
    border-sky-700
    cursor-pointer
    text-white
    font-bold
    py-0.5
    px-2
    no-underline
    select-none
    active:relative
    active:top-0.5
    hover:from-sky-400
    hover:to-sky-500
  `
])

const Button = ({value, onClick}) => {
  return (
    <StyledAnchor onClick={onClick}>{value}</StyledAnchor>
  )
}

export default Button

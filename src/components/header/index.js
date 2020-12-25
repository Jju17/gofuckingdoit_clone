import React from 'react';
import {
  Container, Title, InputChallenge, ButtonChallenge, Frame
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.InputChallenge = function HeaderInputChallenge({ children, ...restProps }) {
  return <InputChallenge {...restProps}>{children}</InputChallenge>;
};

Header.ButtonChallenge = function HeaderButtonChallenge({ children, ...restProps }) {
  return <ButtonChallenge {...restProps}>{children}</ButtonChallenge>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
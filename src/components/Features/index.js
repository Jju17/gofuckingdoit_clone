import React from 'react';
import { Container, Logo } from './styles/features';

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Features.Logo = function FeaturesLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

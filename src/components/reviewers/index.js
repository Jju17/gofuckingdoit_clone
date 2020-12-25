import React from 'react';
import {
  Container, Title, Tile, Quote, From, Photo
} from './styles/reviewers';

export default function Reviewers({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Reviewers.Title = function ReviewersTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Reviewers.Tile = function ReviewersTile({ children, ...restProps }) {
  return <Tile {...restProps}>{children}</Tile>;
};

Reviewers.Quote = function ReviewersQuote({ children, ...restProps }) {
  return <Quote {...restProps}>{children}</Quote>;
};

Reviewers.From = function ReviewersFrom({ children, ...restProps }) {
  return <From {...restProps}>{children}</From>;
};

Reviewers.Photo = function ReviewersPhoto({ children, ...restProps }) {
  return <Photo {...restProps}>{children}</Photo>;
};
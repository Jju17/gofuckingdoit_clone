import React from 'react';
import {
  Container, Tile, TileTitle, BackgroundImage,
} from './styles/challenges';

export default function Challenges({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Challenges.Tile = function ChallengesTile({ children, ...restProps }) {
  return <Tile {...restProps}>{children}</Tile>;
};

Challenges.TileTitle = function ChallengesTileTitle({ children, ...restProps }) {
  return <TileTitle {...restProps}>{children}</TileTitle>;
};

Challenges.BackgroundImage = function ChallengesBackgroundImage({ children, ...restProps }) {
  return <BackgroundImage {...restProps}>{children}</BackgroundImage>;
};

import React from 'react';
import {
  Header,
  Challenges,
  Features,
  Reviewers
} from '../components';
import jumdoData from '../fixtures/jumbo.json';
import reviews from '../fixtures/reviews.json'

export default function Home() {
  const listOfImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Header>
        <Header.Title>GO FUCKING DO IT</Header.Title>
        <Header.Frame>
          <Header.InputChallenge />
          <Header.ButtonChallenge>⚡️ Go Fucking Do It</Header.ButtonChallenge>
        </Header.Frame>
      </Header>
      <Features>
        {listOfImages.map((img) => (
          <Features.Logo src={`/images/features/${img}.png`} />
        ))}
      </Features>
      <Challenges>
        {jumdoData.map((data) => (
          <Challenges.Tile>
            <Challenges.TileTitle>{data.title}</Challenges.TileTitle>
            <Challenges.BackgroundImage src={data.image} />
          </Challenges.Tile>
        ))}
      </Challenges>
      <Reviewers>
        <Reviewers.Title>2310 people have pledged $297,682</Reviewers.Title>
        {reviews.map(review => (
          <Reviewers.Tile>
            <Reviewers.Quote>
              {review.quote}
              <Reviewers.From>{review.from}</Reviewers.From>
            </Reviewers.Quote>
            <Reviewers.Photo src={review.image} />
          </Reviewers.Tile>
        ))}
      </Reviewers>
    </>
  );
}
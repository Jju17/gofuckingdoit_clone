import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  color: #3C4044;
`;

export const From = styled.a`
  cursor: pointer;
  color: #FF4741;
  font-size: 18px;
  margin-left: auto;
`;

export const Tile = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;

  &:nth-last-child(odd) {
    flex-direction: row-reverse;
    ${From} {
      margin-left: 0;
      margin-right: auto;
    }
  }

  &:nth-last-children(even) {
    
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 27px;
  font-weight: bold;
`;


export const Photo = styled.img`
  height: 250px;
  border-radius: 100%;
  cursor: pointer;
`;
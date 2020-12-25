import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    background: black;
    
    
    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

export const BackgroundImage = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: .4;
    transition: opacity .35s;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/not-found.jpg')}) center center / cover no-repeat;

    
`;

export const TileTitle = styled.h1`
    margin: auto;
    text-align: center;
    color: white;
    pointer-events: none;
    font-family: 'Pacifico', cursive;
    font-size: 28px;
    letter-spacing: 2.5px;
    text-shadow: 2px 2px 4px #000;

    @media (max-width: 850px) {
        font-size: 34px;
    }
`;

export const Tile = styled.div`
    cursor: pointer;
    position: relative;
    width: calc(100% / 3);
    height: 200px;
    display: flex;
    z-index: 5;
    &:hover ${BackgroundImage} {
        opacity: 1;
    }

    @media(max-width: 850px) {
        width: 100%;
    }
    
`;

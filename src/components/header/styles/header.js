import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: url('../images/misc/home-bg.jpg') 50% 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: white;
    font-size: 52px;
    background: #232323;
    text-align: center;
    padding: 20px 20px;
    margin: 50px auto;

    @media (max-width: 800px) {
        margin: 0;
        font-size: 45px;
        padding: 10px 20px;
    }

    @media (max-width: 600px) {
        margin: 0;
        font-size: 30px;
        padding: 10px 20px;
    }
    
`;

export const InputChallenge = styled.input`
    font-size: 25px;
    border: 0;
    padding: 20px 15px;
    text-align: center;

    outline: none;
    &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    }
`;

export const ButtonChallenge = styled.button`
    cursor: pointer;
    border: 0;
    border-bottom: 8px solid #A62F2B;
    background: #FF4741;
    color: white;
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
    box-sizing: border-box;
    outline: none;

    &:focus {
        border-bottom: 2px solid #A62F2B;
    }

`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    height: 50vh;


    @media (max-width: 600px) {
        width: auto;
        margin: 0
        
    }
`;
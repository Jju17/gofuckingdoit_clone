import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin: 20px;
`;

export const Logo = styled.img`
    margin: 15px;
    height: 80px;
    cursor: pointer;

    @media (max-width: 800px) {
        height: 60px
    }

    @media (max-width: 450px) {
        height: 40px
    }
`;

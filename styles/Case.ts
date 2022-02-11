import styled from 'styled-components';

export const CaseMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    & div.case-thumbnail {
        display: flex;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: center top;

        width: 100%;
        height: 100vh;
        margin-bottom: 4rem;
        background-color: #222222;

        & h1 {
            color: #fff;
            font-size: 8rem;
            padding: 2rem;
            margin: 0;
        }
    }
`;

export const CaseStyled = styled.div`
    img {
        width: 100%;
    }
    p {
        font-size: 1.25rem;
        padding: 1rem 10rem;
        margin: 0;
    }
`;

export const LinkStyled = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 2rem;
    left: 2rem;
    
    color: #222;
    border-radius: 50%;
    border: solid 1px #222;
    padding: 1.5rem 1rem;

    transition: all .25s ease;
    mix-blend-mode: screen;

    &:hover {
        color: #fff;
        background-color: #222;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 5rem;
    background-color: #ccc;
    margin-top: 5rem;
`
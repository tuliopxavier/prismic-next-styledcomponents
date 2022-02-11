import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    min-height: 100vh;

    background-color: #ccc;
    padding: 5rem;

    & .thumbnail {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        width: 15rem;
        min-width: 12rem;
        height: 15rem; 
        margin: 1rem;

        background-size: contain;
        background-repeat: no-repeat;

        opacity: .75;
        cursor: pointer;
        transition: all .5s ease;
        
        &:hover {
            opacity: 1;
            transform: scale(1.1);
            filter: drop-shadow(0 0 .75rem #fff);
        }
    }
`;

import styled from 'styled-components';

export default styled.div`
    background: #FF9233;
    border-radius: 0.5em;
    color: white;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr auto;
    grid-auto-flow: column;
    font-size: 0.9em;
    margin: 0.5em;
    padding: 1em;

    &:hover {
        background: #ffa34d;
        cursor: pointer;
    }
    &:active {
        background: #e97f1f;
    }
`;

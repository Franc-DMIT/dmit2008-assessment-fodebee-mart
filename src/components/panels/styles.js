import styled from "styled-components";

const PanelStyles = styled.section `
    flex: 1;
    background-color: white;
    border-radius: 3px;
    margin: 1.5rem;
`

const PanelHeader = styled.header `
    h2 {
        padding: 0.5rem;
        border-radius: 3px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: #2c2f33;
    }
`;

const PanelBody = styled.div `
    margin: ${props => props.margin  || " 3rem"};
`;

export {PanelStyles, PanelBody, PanelHeader}
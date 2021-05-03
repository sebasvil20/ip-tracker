import styled from 'styled-components'

export const BackgroundImage = styled.div`
    width: 100%;
    height: 40vh;
    position: relative;
    background-image: url(${({img}) => img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
`
import styled from "styled-components";


export const MiniPanel = styled.div`
    width: 250px;
    min-width: 250px;
    height: 80%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    position: relative;
    &:after{
        content: '';
        height: 80px;
        width: ${({border}) => border ? '1px' : '0'};
        position: absolute;
        right: 0;
        background-color: #E0E0E0;
        display: block;
    }
`

export const Title = styled.p`
    color: #666666;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
`

export const Info = styled.p`
    color: #333333;
    font-size: 26px;
    font-weight: 600;
`
import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  width: 35%;
  margin: auto;
  display: flex;
  height: 60px;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: white;
  padding: 60px 0 20px;
  width: 100%;
  text-align: center;
`

export const Bar = styled.input`
  width: 85%;
  background: white;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 15px 0px 0px 15px;
  color: #3d3d3d;
`

export const Button = styled.button`
  width: 15%;
  background: #050609;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  transition: all 0.2s ease;
  svg {
    transition: all 0.2s ease;
  }
  &:hover {
    background: #292929;
    svg {
      margin-left: 10px;
    }
  }
`

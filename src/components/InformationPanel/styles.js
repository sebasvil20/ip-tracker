import styled from 'styled-components'

export const PanelContainer = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
  width: 60%;
  margin: 100px auto;
  min-height: 150px;
  background-color: white;
  border-radius: 15px;
  padding: 20px 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  z-index: 10;
`

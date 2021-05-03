import { Panel } from '../Panel'
import { PanelContainer } from './styles'

export const InformationPanel = () => {
  return (
    <PanelContainer>
      <Panel title='IP ADDRESS' information='192.212.174.101' />
      <Panel title='LOCATION' information='Medellín, Colombia. 050016' />
      <Panel title='TIME ZONE' information='UTC - 05:00' />
      <Panel title='ISP' information='Claro' border={false} />
    </PanelContainer>
  )
}

import { InformationPanel } from '../InformationPanel'
import { SearchBar } from '../SearchBar'
import {BackgroundImage} from './styles'

export const Header = () => {
    return(
        <BackgroundImage img="https://i.ibb.co/HzF3FzZ/pattern-bg.png">
            <SearchBar />
            <InformationPanel />
        </BackgroundImage>
    )
}
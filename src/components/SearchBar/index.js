import { SearchBarContainer, Bar, Button, Title } from './styles'

export const SearchBar = () => {
  return (
    <>
      <Title>IP Address tracker</Title>
      <SearchBarContainer>
        <Bar placeholder='Search for any IP address or domain' />
        <Button>
          <svg
            width='11'
            height='14'
            viewBox='0 0 11 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M2 1L8 7L2 13' stroke='white' stroke-width='3' />
          </svg>
        </Button>
      </SearchBarContainer>
    </>
  )
}

import { styled } from 'styled-components'

// Project Styles
export const Container = styled.div`
       border-radius: 25px;
       background-color: #121212;
`

export const Button = styled.a`
        color: white;
        text-decoration: none;
        padding-right: 2em;
        font-size: smaller;
        &:hover {
           color: darkslategrey;     
        }
`
export const Title = styled(h3)
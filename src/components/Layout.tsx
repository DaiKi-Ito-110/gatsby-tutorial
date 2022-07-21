import { Link } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactNode }) => {
    return (
        <Wrapper>
            <title>{pageTitle}</title>
            <nav >
                <ul className='nav-links'>
                    <li className='nav-link-item'><Link to='/' className='nav-link-text'>Home</Link></li>
                    <li className='nav-link-item'><Link to='/about' className='nav-link-text'>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className='heading'>{pageTitle}</h1>
                {children}
            </main>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;

    .heading {
        color: rebeccapurple;
    }
    .nav-links {
        display: flex;
        list-style: none;
        padding-left: 0;
    }
    .nav-link-item {
        padding-right: 2rem;
    }
    .nav-link-text {
        color: black;
    }
`


export default Layout
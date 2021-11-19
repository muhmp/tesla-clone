import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <li><a href="#"></a>Existing Inventory</li>
                <li><a href="#"></a>Used Inventory</li>
                <li><a href="#"></a>Traded-in</li>
                <li><a href="#"></a>Cybertruck</li>
                <li><a href="#"></a>Roadster</li>
                <li><a href="#"></a>Existing Inventory</li>
                <li><a href="#"></a>Existing Inventory</li>
                <li><a href="#"></a>Existing Inventory</li>
            </BurgerNav>


        </Container>
     
    )
}

export default Header


const Container = styled.div `
    min-height:60px;
    position:fixed;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;
    a{
        font-weight:600;
        text-transform: uppercase;
        padding: 0 10px; /*top&bottom = 0; right&left = 10px;*/
        flex-wrap: nowrap;
    }

    @media(max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div `
    
    display:flex;
    align-items: center;

    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right:10px;
        }
`

const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    z-index:100;

`
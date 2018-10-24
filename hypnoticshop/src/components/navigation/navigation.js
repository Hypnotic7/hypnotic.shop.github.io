import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'


//COMPONENTS

//IMAGES
import LogoImg from '../../images/spiral_logo.png';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Divider } from 'semantic-ui-react';


class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    

    render() {
        return (
            <div>
                <Navbar className="navbar-dark bb" color="dark" light>
                <img style={{ height: 50, width: 75 }} alt='logo' src={LogoImg}/>  
                {/* <SearchBox /> */}
                <NavbarToggler className="ml-2" onClick={this.toggleNavbar} />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                    <NavItem>
                        <Divider className="center" style={{backgroundColor: '1', maxWidth: "160"}}/>
                        <NavLink className="f4 lh-cop tw" href="/components/">Aktualności</NavLink>
                    </NavItem>
                    <NavItem>
                    <Divider className="center" style={{backgroundColor: '1', maxWidth: "160"}}/>
                        <NavLink className="f4 lh-copy" href="/components/">O Nas</NavLink>
                    </NavItem>
                    <NavItem>
                    <Divider className="center" style={{backgroundColor: '1', maxWidth: "160"}}/>
                        <NavLink className="f4 lh-copy" href="/components/" color="white" >Oferta</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="/components/">Technologie/Materialy</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink href="/components/">Realizacja/Referencje</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink href="/components/">Do pobrania</NavLink>
                    </NavItem> */}
                    <NavItem className="">
                    <Divider className="center" style={{backgroundColor: '1', maxWidth: "160"}}/>
                        <NavLink className="f4 lh-copy" href="/components/">Kontakt</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="/components/">Kofigurator systemow wyciszen</NavLink>
                    </NavItem> */}
                    <NavItem>
                    <Divider className="center" style={{backgroundColor: '1', maxWidth: "160"}}/>
                        <NavLink className="f4 lh-copy" href="/components/">Wspolpraca Shim-Pol</NavLink>
                    </NavItem>
                    
                    </Nav>
                </Collapse>                 
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
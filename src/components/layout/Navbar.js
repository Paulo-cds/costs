import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../images/costs_logo.png'
import hamburguer from '../../images/hamburguer.svg'
import close from '../../images/close.svg'
import {useState} from 'react'

function Navbar(){
    const [menuList, setMenuList] = useState(false)

    const handleMenu = () => {
        setMenuList(!menuList)        
    }

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Costs'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>                    
                </ul>    

                <div className={styles.menuHamburguer} onClick={handleMenu} >
                    <img src={hamburguer} alt='menuHamburguer'/>
                </div>
                {
                    menuList &&
                    (
                        <>
                            
                            <ul className={styles.listHamburguer}>
                                <li>
                                    <img src={close} alt='close' onClick={handleMenu}/>
                                </li>
                                <li className={styles.item} onClick={handleMenu}>
                                    <Link to='/'>Home</Link>
                                </li>

                                <li className={styles.item} onClick={handleMenu}>
                                    <Link to='/projects'>Projetos</Link>
                                </li>

                                <li className={styles.item} onClick={handleMenu}>
                                    <Link to='/company'>Empresa</Link>
                                </li>

                                <li className={styles.item} onClick={handleMenu}>
                                    <Link to='/contact'>Contato</Link>
                                </li>                    
                            </ul> 
                        </>
                    )
                }
                
            </Container>
        </nav>
    )
}

export default Navbar
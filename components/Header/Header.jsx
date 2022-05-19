import styles from './header.module.css'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'

export default function Header() {
    return (
        <>
            <nav className={styles.navigation}>
                <a href="#" className={styles.logo}>
                    <Image src={Logo} alt="logo" />
                </a>
                <ul className={styles.navigation__menu}>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Perguntas frequentes</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </>

    )
}
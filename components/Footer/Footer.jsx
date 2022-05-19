import styles from './footer.module.css'
import Image from 'next/image'
import UserIcon from '../../public/student.svg'

export default function Footer() {
    return (
        <>
            <footer>
            <div className={styles.footer}>
                <div className={styles.footer__iconContent}>
                <Image src={UserIcon} alt='User image'></Image>
                </div>
                <div className={styles.footer__textContent}>
                <p className={styles.textContent__text}>Não tem uma conta?</p>
                <a href="" className={styles.textContent__link}>Criar agora</a>
                </div>
            </div>
            </footer>
        </>
    )
}
import ButtonAct from "../Buttons/ButtonAct"
import styles from './main.module.css'
import Image from 'next/image'
import MaskImage from '../../public/Mask.png'
import littleDots from '../../public/littleDots.svg'

export default function Main() {
    return (

        <>
            <main className={styles.main__content}>
                <div className={styles.imageContent__dots}>
                    <Image src={littleDots} alt='Bolinhas no canto da tela' />
                </div>

                <div className={styles.main__textContent}>
                    <h1 className={styles.textContent__title}>Estude e compartilhe <span className={styles.title__contrast}>conhecimento</span> </h1>
                    <p className={styles.textContent__subtitle}>Convide um amigo para estudar, compartilhe o aprendizado e mantenham o foco juntos.</p>
                    <ButtonAct />
                </div>

                <div className={styles.main__imageContent}>
                    <Image src={MaskImage} alt='Imagem de um homem sorrindo em frente ao computador' />
                    <div id="lecture" className={styles.imageContent__borderImage}>
                        <div className={styles.borderImage__btn}>?</div>
                    </div>
                </div>


            </main>

        </>
    )

}
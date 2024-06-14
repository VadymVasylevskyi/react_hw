import styles from './ButtonList.module.css'
import Button from '../Button/Button.jsx'
import Apple from '../assets/apple.svg'
import Google from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'

function ButtonList() {
    const srcArray = [
        Apple,
        Google,
        Twitter
    ]

    return (
        <section className={styles.button_list}>
            {srcArray.map((src, index) => (
                <Button key={index} image={src} />
            ))}
        </section>
    )
}

export default ButtonList
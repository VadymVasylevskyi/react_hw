import styles from './Button.module.css'

function Button({image}) {
    return (
        <img src={image} alt="Sign in Button" className={styles.button} />
    )
}

export default Button
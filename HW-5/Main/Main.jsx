import styles from "./Main.module.css"
import ButtonList from '../ButtonList/ButtonList.jsx'

function Main() {
    return (
        <section className={styles.main}>
            <>
                <h1 className={styles.title}>
                    Life is wasted on the lying
                </h1>
                <h2 className={styles.sign}>
                    Sign with
                </h2>
            </>
            <ButtonList />
        </section>
    )
}

export default Main
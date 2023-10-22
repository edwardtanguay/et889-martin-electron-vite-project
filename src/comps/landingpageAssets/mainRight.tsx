import styles from './mainRight.module.css'

interface IProps {
    registered: boolean,
    setRegistered: (registered: boolean) => void
}

export const LPMainRight = ({registered = false, setRegistered}: IProps) => {
    return(
        <section className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <label  className={styles.loginLabel} htmlFor="username">Username</label>
                <input type="text" id="username" className={styles.loginInput}/>
                <label className={styles.loginLabel} htmlFor="password">Password</label>
                <input type="password" id="password" className={styles.loginInput}/>
                <div className={styles.btnContainer}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.loginBtn} onClick={() => setRegistered(!registered)}>Signup</button>
                </div>
            </form>
        </section>
    )
}
import styles from './mainRight.module.css'

export const LPMainRight = ({register = false, setRegister}) => {
    return(
        <section className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <label  className={styles.loginLabel} htmlFor="username">Username</label>
                <input type="text" id="username" className={styles.loginInput}/>
                <label className={styles.loginLabel} htmlFor="password">Password</label>
                <input type="password" id="password" className={styles.loginInput}/>
                <div className={styles.btnContainer}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.loginBtn} onClick={() => setRegister(!register)}>Signup</button>
                </div>
            </form>
        </section>
    )
}
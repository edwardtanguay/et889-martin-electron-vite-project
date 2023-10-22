import { useEffect, useState } from 'react'
import styles from './main.module.css'
import { LPMainLeft } from "./mainLeft"
import { LPMainRight } from "./mainRight"
import { Register } from './register'

export const LPMain = () => {
    const [registered, setRegistered] = useState(true)

    useEffect(() => {

    }, [registered])
    return(
        <main className={styles.main}>
            {registered
                ? (
                    <>
                    <LPMainLeft />
                    <LPMainRight registered={registered} setRegistered={setRegistered} />
                    </>
                )
                : (
                    <>
                    </>
                )
            }
            
        </main>
    )
}
import styles from './styles.module.scss'

export default function InfosOfContact(){
    

    return(
        <div className={styles.container}>
            <div className={styles.listContacts}>
                <ul>
                    <li>
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <a href="https://www.instagram.com/devpedropereira/">devpedropereira</a>
                    </li>
                    <li>
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <a href="https://www.instagram.com/devpedropereira/">devpedropereira</a>
                    </li>
                    <li>
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <a href="https://www.instagram.com/devpedropereira/">devpedropereira</a>
                    </li>
                    <li>
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <a href="https://www.instagram.com/devpedropereira/">devpedropereira</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}
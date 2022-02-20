import styles from './styles.module.scss'
import data from '../../../../data/data.json'

export default function InfosOfContact(){
    const {social} = data
    console.log(social.email)

    return(
        <div className={styles.container}>
            <div className={styles.listContacts}>
                <ul>
                    <li>
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <a href={social.instagram}>@devpedropereira</a>
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
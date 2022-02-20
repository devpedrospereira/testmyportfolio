import styles from './styles.module.scss'

export default function Technology() {


    return (
        <div className={styles.container}>
            <h1>Tecnologias</h1>
            <div className={styles.listContacts}>
                <ul>
                    <li>
                        <div><p>JAVASCRIP</p></div>
                    </li>
                    <li>
                        <div><p>REACTJS</p></div>
                    </li>
                    <li>
                        <div><p>NODEJS</p></div>
                    </li>
                    <li>
                        <div><p>GIT</p></div>
                    </li>
                    <li>
                        <div><p>HTML</p></div>
                    </li>
                    <li>
                        <div><p>CSS</p></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
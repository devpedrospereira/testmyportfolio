import styles from './styles.module.scss'

export default function Experience(){
    

    return(
        <div className={styles.container}>
            <h1>Experiências</h1>
            <div className={styles.listContacts}>
                <ul>
                    <li>
                        <h2>RocketSeat</h2>
                        <p>2019 - Atualmente</p>
                        <p>Community Experience</p>
                    </li>
                    <li>
                        <h2>RocketSeat</h2>
                        <p>2019 - Atualmente</p>
                        <p>Community Experience</p>
                    </li>
                    <li>
                        <h2>RocketSeat</h2>
                        <p>2019 - Atualmente</p>
                        <p>Community Experience</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
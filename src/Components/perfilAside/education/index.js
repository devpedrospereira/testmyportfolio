import styles from './styles.module.scss'

export default function Experience(){
    

    return(
        <div className={styles.container}>
            <h1>Educação</h1>
            <div className={styles.listContacts}>
                <ul>
                    <li>
                        <h2>Secretaria de Educação</h2>
                        <p>2017 - 2018</p>
                        <p>Analise e desenvolvimento de sistemas</p>
                    </li>
                    <li>
                        <h2>Instituto Federal</h2>
                        <p>2018 - 2020</p>
                        <p>Sistemas para Internet</p>
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
import styles from './styles.module.scss'

export default function PerfilPerson(){

    return(
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img  className={styles.useravatar} src="https://avatars.githubusercontent.com/u/71725215?v=4" alt="Foto de Pedro Pereira" />
            </div>

            <div className={styles.infos}>
                <h1 className={styles.name}>Dev Pedro Pereira</h1>
                <p className={styles.stack}>Front-end Developer</p>
            </div>
        </div>
    )
}
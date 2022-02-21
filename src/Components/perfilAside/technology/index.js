import styles from './styles.module.scss'
import data from '../../../../data/data.json'


export default function Technology() {
    const newdata = JSON.parse(JSON.stringify(data))

    const technologys = newdata.technologys.map((item,index) =>{
        const {technology} = item

        return(
            <li key={index}>
                <div><p>{technology}</p></div>
            </li>
        )
    })

    return (
        <div className={styles.container}>
            <h1>Tecnologias</h1>
            <div className={styles.listContacts}>
                <ul>
                    {technologys}
                </ul>
            </div>
        </div>
    )
}
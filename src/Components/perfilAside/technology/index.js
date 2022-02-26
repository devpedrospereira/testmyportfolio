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
            <h1>Habilidades</h1>
            <div className={styles.listTecnology}>
                <h2>Tecnologias</h2>
                <ul>
                    {technologys}
                </ul>
            </div>


        </div>
    )
}
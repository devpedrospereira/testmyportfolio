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
    const language = newdata.languages.map((item,index) =>{
        const {language, level} = item

        return(
            <li key={index}>
                    <p>{language}</p>
                    <p>{level}</p>
            </li>
        )
    })

    const skills = newdata.skills.map((item,index) =>{
        const {skill} = item

        return(
            <li key={index}>
                <p>{skill}</p>
            </li>
        )
    })

    return (
        <div className={styles.container}>
            <h1>Perfil</h1>
            <div className={styles.listTecnology}>
                <h2>Tecnologias</h2>
                <ul>
                    {technologys}
                </ul>
            </div>
            <div className={styles.language}>
                <h2>Idiomas</h2>
                <ul>
                    {language}
                </ul>
            </div>
            <div className={styles.skrills}>
                <h2>Skills</h2>
                <ul>
                    {skills}
                </ul>
            </div>


        </div>
    )
}
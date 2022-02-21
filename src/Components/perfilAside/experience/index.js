import styles from './styles.module.scss'
import data from '../../../../data/data.json'

export default function Experience(){
    const newdata = JSON.parse(JSON.stringify(data))

    const experience = newdata.experiences.map((item,index) => {
        const {instituition, period, job} = item

        return (
            <li key={index}>
            <h2>{instituition}</h2>
            <p>{period}</p>
            <p>{job}</p>
        </li>
        )

    })
    

    return(
        <div className={styles.container}>
            <h1>Experiências</h1>
            <div className={styles.listContacts}>
                <ul>
                    {experience}
                </ul>
            </div>
        </div>
    )
}
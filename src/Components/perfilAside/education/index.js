import styles from './styles.module.scss'
import data from '../../../../data/data.json'


export default function Experience(){
    const newdata = JSON.parse(JSON.stringify(data))

    const educations = newdata.educations.map((item,index) => {
        const {instituition, period, course} = item

        return (
            <li key={index}>
                <h2>{instituition}</h2>
                <p>{period}</p>
                <p>{course}</p>
            </li>
        )
    })
    // console.log(newdata.educations)

    return(
        <div className={styles.container}>
            <h1>Educação</h1>
            <div className={styles.listContacts}>
                <ul>
                    {educations}
                </ul>
            </div>
        </div>
    )
}
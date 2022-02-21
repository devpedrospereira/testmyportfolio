import styles from './styles.module.scss'
import data from '../../../../data/data.json'

export default function InfosOfContact(){

    const newdata = JSON.parse(JSON.stringify(data))

    const infos = newdata.social.map((item,index) => {
        const {id, link, description, img} = item

        return(
            <li key={index.toString() } className={styles.li}>
                <a href={link}>
                    <img src={img} alt={description} />                    
                    {description}
                </a>
            </li>
        )
    })

    return(
        <div className={styles.container}>
            <div className={styles.listContacts}>
                <ul>
                    {infos}
                </ul>
            </div>
        </div>
    )
}
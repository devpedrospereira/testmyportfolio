import styles from './styles.module.scss'
import data from '../../../../data/data.json'

export default function InfosOfContact(){

    const newdata = JSON.parse(JSON.stringify(data))

    const infos = newdata.social.map((item,index) => {
        const {link, description, img} = item

        return(
            <li key={index.toString() } className={styles.li}>
                {/* A função ternaria abaixo, permite abrir uma nova aba, ou não, dependendo se a informação tem link ou não.*/}
                <a href={link} target={(!link)? "_self" : "_blank"} rel="noreferrer">
                    <img src={img} alt={description} />                    
                    <p>{description}</p>
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
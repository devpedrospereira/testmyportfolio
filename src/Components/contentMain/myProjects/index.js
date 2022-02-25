/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import data from '../../../../data/data.json'

export default function MyProjects(){
    const newdata = JSON.parse(JSON.stringify(data))

    const cards = newdata.git.map((item,index) =>{

        const {repository, description, stars, forks, language} = item;

        // o if abaixo, verifica se existe valores dentro das constantes acima, se existir, continuar o return normamente, se não, não retorna nada!
        if (repository) return(
            <div key={index} className={styles.card}>
                <div id={styles.repository}>
                    <img src="./assets/folder.svg" alt="Repositório" />
                    <h2>{repository}</h2>
                </div>

                <div id={styles.description}>
                    <p>{description}</p>
                </div>

                <div id={styles.statistics}>
                    <div id={styles.nambers}>
                        <img src="./assets/star.svg" alt="Estrelas" />
                        <p>{stars}</p>
                        <img src="./assets/git-branch.svg" alt="forcks" />
                        <p>{forks}</p>
                    </div>
                    
                    <div id={styles.language}>
                        
                        <img src="./assets/ellipse.svg" alt="linguagem" />
                        <p>{language}</p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className={styles.container}>
            <section>
                <header className={styles.header}>
                    <h1>Meus Projetos</h1>
                    <h2>Veja todos</h2>
                </header>

                <div className={styles.cards}>
                    {cards}
                </div>
            </section>

        </div>
    )
}
/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import data from '../../../../data/data.json'

export default function MyProjects(){
    const newdata = JSON.parse(JSON.stringify(data))
    console.log(newdata.social[3].link)

    // console.log(newdata.api_github.repos_url)
    const [repository, setRepository] = useState([]);

    // console.log(newdata)
    
    useEffect(() =>{
        // primeiro pega as informações pelo link do perfil, (que esta salvo no data.jason) depois transforma a resposta em json
        fetch(`${newdata.api_github}`)
            .then(response => response.json())
            .then(data => {
                // aqui, com os dados completos do perfil, entra no array de repositorios, e armazena em uma variavel (setRepository(data))
                fetch(data.repos_url)
                    .then(response => response.json())
                    .then(data => setRepository(data))
            })
    },[])

    // console.log(data)

    const cards = repository.map((item,index) =>{

        const {name, description, stargazers_count, forks_count, language, html_url} = item;
        // o if abaixo, verifica se existe valores dentro das constantes acima, se existir, continuar o return normamente, se não, não retorna nada!
        if (name, description) return(
            <a key={index.toString()} href={html_url} target="_blank" rel="noreferrer">
            <div  className={styles.card}>
                <div id={styles.name}>
                    <img src="./assets/folder.svg" alt="Repositório" />
                    <h2>{name}</h2>
                </div>

                <div id={styles.description}>
                    <p>{description}</p>
                </div>

                <div id={styles.statistics}>
                    <div id={styles.nambers}>
                        <img src="./assets/star.svg" alt="stars" />
                        <p>{stargazers_count}</p>
                        <img src="./assets/git-branch.svg" alt="forks" />
                        <p>{forks_count}</p>
                    </div>
                    
                    <div id={styles.language}>
                        
                        <img src="./assets/ellipse.svg" alt="linguagem" />
                        <p>{language}</p>
                    </div>
                </div>
            </div>
            </a>
        )
    })

    return(
        <div className={styles.container}>
            <section>
                <header className={styles.header}>
                    <h1>Meus Projetos</h1>
                    <a href={newdata.social[3].link} target="_blank " rel="noreferrer">Meu Github</a>
                </header>

                <div className={styles.cards}>
                    {cards}
                </div>
            </section>

        </div>
    )
}
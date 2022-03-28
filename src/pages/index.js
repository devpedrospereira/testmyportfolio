import MyProjects from "../Components/contentMain/myProjects"
import Education from "../Components/perfilAside/education"
import Experience from "../Components/perfilAside/experience"
import InfosOfContact from "../Components/perfilAside/infosofcontact"
import Person from "../Components/perfilAside/person/index"
import Technology from "../Components/perfilAside/technology"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.aside}>
          {/* Card do usuario */}
          <Person />
          {/* Card de informações para contato*/}
          <InfosOfContact />

          <Technology/>

          <Experience/>

          <Education/>
          
          <a className={styles.creditWeb} href="https://www.rocketseat.com.br/" target="_blank " rel="noreferrer">Design by RocketSeat</a>
        </section>

        <section className={styles.main}>
          <MyProjects/>
          <a className={styles.creditWeb} href="https://www.rocketseat.com.br/" target="_blank " rel="noreferrer">Design by RocketSeat</a>
        </section>

      </div>
    </>
  )
}

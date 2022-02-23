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
      <body className={styles.container}>
        <section className={styles.aside}>
          {/* Card do usuario */}
          <Person />
          {/* Card de informações para contato*/}
          <InfosOfContact />

          <Technology/>

          <Experience/>

          <Education/>
        </section>

        <section className={styles.main}>
          <MyProjects/>
        </section>

      </body>
    </>
  )
}

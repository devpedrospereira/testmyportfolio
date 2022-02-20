import InfosOfContact from "../Components/perfilAside/infosofcontact"
import Person from "../Components/perfilAside/person/index"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <body className={styles.container}>
        <section className={styles.aside}>
          {/* Card do usuario */}
          <Person />
          {/* Card de informações para contato*/}
          <InfosOfContact />
        </section>

        <section className={styles.main}>

        </section>

      </body>
    </>
  )
}

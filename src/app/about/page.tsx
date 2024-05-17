import Image from "next/image";

import styles from "../style/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci
        accusantium accusamus consectetur possimus, perspiciatis esse ipsum
        necessitatibus sapiente sequi molestias quibusdam a aspernatur expedita
        eligendi quaerat, beatae magni aut?
      </p>
      <Image src="/img/logo.png" width={300} height={300} alt={"Futebol"} />
    </div>
  );
}

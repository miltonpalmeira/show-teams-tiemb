import Link from "next/link";
import styles from "../../style/Card.module.css";
import Image from "next/image";

export default function Card({ team }: { team: iTeams }) {
  return (
    <div className={styles.card}>
      <Image
        src={team.escudo}
        width={120}
        height={120}
        alt={team.nome_popular}
      />
      <p className={styles.acronym}>{team.sigla}</p>
      <h3 className={styles.team}>{team.nome_popular}</h3>
      <Link className={styles.link} href={`/teams/${team.time_id}`}>
        Detalhes
      </Link>
    </div>
  );
}

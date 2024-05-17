import Image from 'next/image';
import styles from '../../style/Team.module.css';

const getTeamsById: (id: string) => Promise<iTeams> = async(id) => {
    const api = `https://api.api-futebol.com.br/v1/times/${id}`;

    const res = await fetch(`${api}`, {
        headers: { Authorization: "Bearer test_d73ac8ff3a3b8a678b5d2be41584b7" },
    });

    return res.json();
}

export default async function Team({params}: any) {
    const { time_id } = params;
    const team = await getTeamsById(time_id);

    return (
        <div className={styles.team_container}>
            <h1 className={styles.title}>{team.nome_popular}</h1>
            <Image src={team.escudo} width={200} height={200} 
                alt={team.nome_popular} 
            />
            <div>
                <h3>Sigla: {team.sigla}</h3>
            </div>
        </div>
    )
}
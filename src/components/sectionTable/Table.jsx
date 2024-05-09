import styles from "./Table.module.css";
import data from "../../utils/constants/provinces.js";

function Table(){
    return(
        <div className={styles.container}>
            <div>
            <h1 className={styles.conteiner_title}>Indonesia</h1>
            <h4 className={styles.conteiner_title_desc}>Data Covid Berdasarkan Indonesia</h4>
            </div>
            <div className={styles.container_table}>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kota</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.provinces.map((province, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{province.kota}</td>
                                <td>{province.kasus}</td>
                                <td>{province.sembuh}</td>
                                <td>{province.dirawat}</td>
                                <td>{province.meninggal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;

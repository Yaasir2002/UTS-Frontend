import styles from "./Count.module.css";
import covidData from "../../utils/constants/indonesia.js";
import CountItem from "../count/count.jsx";

function Count(){
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.container_title}>Indonesia</h1>
                <h4 className={styles.container_title_desc}>Data Covid Berdasarkan Indonesia</h4>
            </div>
            <div className={styles.container_card}>
                {covidData.indonesia.map(count => (
                    <CountItem key={count.status} count={count} /> 
                ))}
            </div>
        </div>
    )
}

export default Count;



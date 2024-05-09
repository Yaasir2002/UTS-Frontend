import styles from './Form.module.css';
import gambar2 from "../../assets/images/gambar2.jpg";

const Form = () => {
    return (
        <div className={styles.addMovieContainer}>
            <div className={styles.leftSection}>
                <img src={gambar2} alt="placeholder" />
            </div>
            <div className={styles.rightSection}>
                <h1>Form Covid</h1>
                <h2>Provinsi</h2>
                <input
                    type="text"
                    placeholder=""
                    
                />
                <h2>Status</h2>
                <input
                    type="text"
                    placeholder=""
                    
                />
                <h2>Jumlah</h2>
                <input
                    type="text"
                    placeholder=""
                    
                />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Form;

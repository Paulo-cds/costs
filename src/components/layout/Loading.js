import  loading from '../../images/loading2.svg'
import styles from './Loading.module.css'


function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='loading'/>
        </div>
    )
}

export default Loading
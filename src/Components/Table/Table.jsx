import styles from './table.module.scss';

const Table = (props) => {
    const { headers, data } = props;
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.headers}>
                {headers?.map((title, index) => {
                    return (
                        <p key={index} className={styles.header}>{title}</p>
                    )
                })}
            </div>
            <div className={styles.rows}>
                {Object.keys(data).map((item) => {
                    return (
                        <div key={item} className={styles.row}>
                            <p>{data[item].name}</p>
                            <p>{data[item].age}</p>
                            <p>{data[item].occupation}</p>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default Table
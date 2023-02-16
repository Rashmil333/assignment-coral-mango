import styles from './gridviewer.module.scss'

const GridViewer = (props) => {
    const { data } = props;
    return (
        <div className={styles.gridMap}>
            {Object.keys(data).map((item) => {
                return (
                    <div className={styles.cardWrapper}>
                        <div key={item} className={styles.card}>
                            <div className={styles.cardContent}>
                                <img src={'https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000'} className={styles.image} />
                                <p className={styles.name}>{data[item].name}</p>
                                <p className={styles.occupation}>{data[item].occupation}</p>
                                <p className={styles.age}> {data[item].age}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GridViewer

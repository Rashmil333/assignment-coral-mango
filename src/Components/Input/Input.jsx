import styles from './input.module.scss';

const Input = (props) => {
    const { label, onChangeHandler, value, isError, varient, placeholder } = props;

    return (
        <div className={styles.inputWrapper}>
            <label className={`${styles.label} ${isError ? styles.error : ''}`}>{label}</label><br />
            <input type='text'
                name={label}
                value={value}
                placeholder={placeholder}
                className={`${styles.input} ${styles[varient]}`}
                onChange={(e) => onChangeHandler(e)}
            />
        </div>
    )
}

export default Input

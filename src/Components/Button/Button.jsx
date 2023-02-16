import styles from './button.module.scss';

const Button = (props) => {
    const { title, onClickhandler } = props;
    return (
        <button className={styles.button} onClick={() => onClickhandler()}>{title}</button>
    )
}

export default Button
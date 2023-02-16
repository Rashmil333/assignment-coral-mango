import { useCallback, useState } from 'react'
import styles from './toggle.module.scss';

const Toggle = (props) => {
    const { label, onchange } = props;
    const [active, setActive] = useState(false);
    const toggleController = useCallback(() => {
        onchange?.(!active);
        setActive(!active);
    }, [active, setActive, onchange]);

    return (
        <div className={styles.toggle} onClick={() => toggleController()}>
            {label?.length ? (<label className={styles.label}>{label}</label>) : null}
            <div className={`${styles.circle} ${active ? styles.active : ''}`} />
        </div>
    )
}

export default Toggle

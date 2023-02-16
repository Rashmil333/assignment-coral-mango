import { Links } from '../../constant';
import WindowSizeHook from '../../hooks/WindowSize/WindowSizeHook';
import Button from '../Button/Button';
import styles from './navbar.module.scss';

const Navbar = () => {
    const screenSize = WindowSizeHook();

    return (
        <div className={styles.navbar}>
            <p className={styles.banner}>Dashboard</p>
            <div className={styles.links}>
                {(screenSize.width > 768 ? Links : []).map((link, index) => {
                    return (
                        <p key={index} className={styles.link}>{link}</p>
                    )
                })}
                <Button title='logout' onClickhandler={() => window.location = '/login'} />
            </div>
        </div>
    )
}

export default Navbar

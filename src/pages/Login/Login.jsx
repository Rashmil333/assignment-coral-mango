import { useCallback, useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { Credentials, Policy } from '../../constant';
import { isObjectEqual, Notify } from '../../helpers/helper';
import styles from './login.module.scss';

const Login = () => {
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErros] = useState({
        username: false,
        password: false
    });
    const formController = useCallback((e) => {
        const target = e.target.name;
        const form = { ...formdata };
        switch (target) {
            case 'username':
                form.username = e.target.value;
                setFormData(form);
                break;
            case 'password':
                form.password = e.target.value;
                setFormData(form);
                break;
            default: console.log('Something is wrong!')
        }
    }, [formdata, setFormData]);

    const submit = useCallback(() => {
        const errorsnew = { ...errors };
        Object.keys(formdata).forEach((item) => {
            errorsnew[item] = formdata[item].length === 0;
        });
        setErros(errorsnew);
        if (isObjectEqual(formdata, Credentials)) {
            // alert('submmited');
            Notify('Login Successfull');
            window.location = '/'
        } else {
            // alert('err');
            Notify('Invalid Credentials');
        }
    }, [errors, setErros, formdata]);

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>Coral Mango</p>
                    <p className={styles.subtitle}>Login To your Account</p>
                    <div className={styles.inputSection}>
                        <Input isError={errors.username} value={formdata.username} label='username' onChangeHandler={formController} />
                        <Input isError={errors.password} value={formdata.password} label='password' onChangeHandler={formController} />
                    </div>
                    <Button title='submit' onClickhandler={submit} />
                </div>
                <p className={styles.policy}>{Policy}<u>Privacy policy</u></p>
            </div>
        </div>
    )
}

export default Login;

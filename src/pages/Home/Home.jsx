import { useCallback, useEffect, useState } from 'react'
import GridViewer from '../../Components/GridViewer/GridViewer';
import Input from '../../Components/Input/Input';
import Navbar from '../../Components/Navbar/Navbar';
import Table from '../../Components/Table/Table';
import Toggle from '../../Components/Toggle/Toggle';
import { API, Headers } from '../../constant';
import { filterBySearch, sortByAge, sortByName } from '../../helpers/helper';
import styles from './home.module.scss';


const Home = () => {
    const [data_, setData] = useState([]);
    const [storedData, setStoreddata] = useState([]);
    const [search, setSearch] = useState('');
    const [name, setname] = useState(false);
    const [age, setAge] = useState(false);
    const [gridview, setGridView] = useState(false);

    const getData = useCallback(async () => {
        const response = await fetch(API);
        const data = await response.json();
        setData(data);
        setStoreddata(data);
    }, [setData, setStoreddata]);


    const onSearchHandler = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const ageHandler = useCallback((status) => {
        setAge(status);
    }, [setAge]);

    const namehandler = useCallback((status) => {
        setname(status);
    }, [setname]);

    const viewhandler = useCallback((status) => {
        setGridView(status);
    }, [setGridView]);

    useEffect(() => {
        var filteredData = filterBySearch(storedData, search);
        if (age) {
            filteredData = sortByAge(filteredData);
        }
        if (name) {
            filteredData = sortByName(filteredData);
        }
        setData(filteredData);
    }, [search, setSearch, name, setname, age, setAge, storedData]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className={styles.dashboardWrapper}>
            <Navbar />
            <div className={styles.searchSection}>
                <Input varient='search' placeholder='Search...' onChangeHandler={onSearchHandler} />
                <div className={styles.filtersSections}>
                    <Toggle label='name' onchange={namehandler} />
                    <Toggle label='age' onchange={ageHandler} />
                    <Toggle label='grid' onchange={viewhandler} />
                </div>
            </div>
            {(age || name || search) ? (<p className={styles.indicator}>You are viewing filtered results!</p>) : null}
            <div className={styles.tableSection}>
                {gridview ? <GridViewer data={data_} /> : <Table headers={Headers} data={data_} />}
            </div>
        </div>
    )
}

export default Home
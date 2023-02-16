import { notification } from 'antd';
export function isObjectEqual(obj1, obj2) {
    var isEqual = true;
    Object.keys(obj1).forEach((key) => {
        const item1 = obj1[key];
        const item2 = obj2[key];
        if (item1 !== item2) {
            isEqual = false;
        }
    });
    return isEqual;
};

export function sortByAge(data) {
    data.sort((a, b) => {
        return (a.age - b.age)
    });
    return data;
};

export function sortByName(data) {
    data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return data;
};
export function filterBySearch(data, searchValue) {
    const filteredData = data.filter((item) => (item.name).toLowerCase().includes((searchValue).toLowerCase()));
    return filteredData;
};

export function Notify(message) {
    notification.open({
        message: '',
        description: message,
        placement: 'top'
    });
};
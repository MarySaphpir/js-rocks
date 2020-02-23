function stringify(obj) {
    let string = '';
    Object.entries(obj).map(([key, value]) => {
        if(typeof value === 'object') {
            string += stringify(value);
        } else {
            string += `${key}: ${value};`;
        }
    });
    return string;
}
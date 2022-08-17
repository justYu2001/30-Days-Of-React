const fetchData = async () => {
    const URL = 'https://api.thecatapi.com/v1/breeds';
    const response = await axios.get(URL);
    return response.data;
}

const getAverageWeight = (data) => {
    const totalWeight = data.reduce((acc, cur) => {
        const [minString, maxString] = cur.weight.metric.split(' - ');
        const average = (parseInt(minString) + parseInt(maxString)) / 2;
        return acc + average;
    }, 0);

    return (totalWeight / data.length).toFixed(2);
};

const getAverageLifeSpan = (data) => {
    const totalLifeSpan = data.reduce((acc, cur) => {
        const [minString, maxString] = cur['life_span'].split(' - ');
        const average = (parseInt(minString) + parseInt(maxString)) / 2;
        return acc + average;
    }, 0);

    return (totalLifeSpan / data.length).toFixed(2);
};

const getCountriesHaveCats = (data) => {
    const result = {};

    data.forEach((cat) => {
        const country = cat.origin;
        if (result[country]) {
            result[country]++;
        } else {
            result[country] = 1;
        }
    });

    return Object.entries(result).sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] > b[0] ? 1 : -1;
        }
    });
};

(async () => {
    const data = await fetchData();
    
    console.log(data);

    console.log(`Average weight: ${getAverageWeight(data)}`);
    console.log(`Average life span: ${getAverageLifeSpan(data)}`);
    const countriesHaveCats = getCountriesHaveCats(data);
    console.log(`There are ${countriesHaveCats.length} countries have cat breeds.`);
    console.log(`The country which has the most cat breeds is ${countriesHaveCats[countriesHaveCats.length - 1][0]} with ${countriesHaveCats[countriesHaveCats.length - 1][1]} cat breeds.`);

    for (const country of countriesHaveCats) {
        console.log(`${country[0]} has ${country[1]} cat breeds.`);
    }
})();
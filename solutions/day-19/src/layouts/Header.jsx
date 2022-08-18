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

const Header = ({ data }) => {
    const averageWeight = getAverageWeight(data);
    const averageLifeSpan = getAverageLifeSpan(data);
    
    return (
        <header className='p-10 text-center shadow-2xl'>
            <h1 className='m-3 text-5xl font-bold'>Cats paradise</h1>
            <p>There are 67 cat breeds</p>
            <p>On average a cat can weight about {averageWeight} Kg and lives {averageLifeSpan} years</p>
        </header>
    );
};

export default Header;
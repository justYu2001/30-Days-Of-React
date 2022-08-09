const PopulationListItem = ({ data, worldPopulation }) => {
    const { country, population } = data;

    const barStyle = {
        width: `${population / worldPopulation * 100}%`,
        height: '30px',
        backgroundColor: '#f2a93b',
        borderRadius: '5px',
    };

    return (
        <div className="population-list-item">
            <h3 style={{ width: '110px' }}>{country}</h3>
            <div style={{ flexGrow:'1' }}>
                <div style={barStyle}></div>
            </div>
            <p style={{ width: '110px', padding: '0 10px', fontWeight: 'bold' }}>
                {population.toLocaleString('en-US')}
            </p>
        </div>
    );
};

const WorldPopulation = ({ data }) => {
    const worldPopulation = data[0].population;

    const populationList = data.map((data) => {
        return <PopulationListItem key={data.country} data={data} worldPopulation={worldPopulation} />;
    });

    return (
        <div style={{ margin: '30px auto', width: '80%' }}>
            <h2>World population</h2>
            <small>Ten most populated countries</small>
            {populationList}
        </div>
    );
};

export default WorldPopulation;
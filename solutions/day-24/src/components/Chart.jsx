import { useState } from 'react';

const ChartTab = ({ onClick, children }) => {
    return (
        <button className='px-6 py-2 m-3 bg-amber-400 cursor-pointer outline-none' onClick={onClick}>
            {children}
        </button>
    );
};

const Bar = ({ title, value, percentage }) => {
    return (
        <li className='flex items-center px-20 my-2'>
            <div className='w-36 text-xl font-bold'>{title}</div>
            <div className='flex-1'>
                <div className='h-6 rounded bg-amber-400' style={{ width: `${percentage}%` }}></div>
            </div>
            <div className='w-36 pl-2 text-xl font-bold'>{value}</div>
        </li>
    );
};

const PopulationChart = ({ data }) => {
    const countryList = data.map((country) => ({
        name: country.name.common,
        population: country.population,
    }));

    countryList.sort((a, b) => b.population - a.population)
    const worldPopulation = countryList.reduce((acc, country) => acc + country.population, 0);
    const topTenCountries = [
        { name: 'World', population: worldPopulation },
        ...countryList.slice(0, 9),
    ];
    
    return (
        <>
            <h3 className='text-xl font-bold text-center'>10 Most populated countries in the world</h3>
            <ul className='py-4'>
                {topTenCountries.map(({ name, population }) => (
                    <Bar 
                        key={name} 
                        title={name} 
                        value={population.toLocaleString('en-US')} 
                        percentage={population / worldPopulation * 100}
                    />
                ))}
            </ul>
        </>
    );
};

const LanguagesChart = ({ data }) => {
    const languagesStatics = {};

    data.forEach((country) => {
        const languages = country.languages || { 'name': '' };

        for (const language of Object.values(languages)) {
            if (!languagesStatics[language]) {
                languagesStatics[language] = 1;
            } else {
                languagesStatics[language]++;
            }
        }
    });

    const languagesList = Object.entries(languagesStatics);
    languagesList.sort((a, b) => b[1] - a[1]);
    const topTenLanguages = languagesList.slice(0, 10);

    return (
        <>
            <h3 className='text-xl font-bold text-center'>10 Most spoken languages in the world</h3>
            <ul className='py-4'>
                {topTenLanguages.map(([ name, number ]) => (
                    <Bar 
                        key={name} 
                        title={name} 
                        value={number} 
                        percentage={number}
                    />
                ))}
            </ul>
        </>
    );
};

const Chart = ({ data }) => {
    const [chart, setChart] = useState('population');

    const updateChartType = (event) => {
        setChart(event.target.innerText.toLowerCase());
    };

    return (
        <div id='chart' className='pt-6 pb-20'>
            <div className='py-2 text-center'>
                <ChartTab onClick={updateChartType}>POPULATION</ChartTab>
                <ChartTab onClick={updateChartType}>LANGUAGES</ChartTab>
            </div>
            {chart === 'population' ? (
                <PopulationChart data={data} />
            ) : (
                <LanguagesChart data={data} />
            )}
        </div>
    );
};

export default Chart;
const getCountries = (data) => {
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

const Condition = ({ country, filter, setFilter, children }) => {
    const [name, number] = country || ['all'];

    const handleClick = () => {
        if (country) {
            setFilter(name);
        } else {
            setFilter('all');
        }
    };

    const color = filter === name ? 'bg-cyan-300 text-white' : 'bg-slate-100 text-gray-400';
    
    return (
        <div 
            className={ 'px-6 py-2 m-2 rounded-full font-bold  cursor-pointer ' + color }
            onClick={handleClick}
        >
            {country ? (
                <>{name.toUpperCase()} ({number})</>
            ) : (
                children
            )}
        </div>
    );
};

const Filter = ({ data, filter, setFilter }) => {
    const countries = getCountries(data);

    return (
        <div className="pb-8">
            <div className='flex flex-wrap w-4/5 mx-auto'>
                {countries.map((country) => (
                    <Condition key={country[0]} country={country} filter={filter} setFilter={setFilter} />
                ))}
                <Condition setFilter={setFilter} filter={filter}>ALL</Condition>
            </div>
        </div>
    );
};

export default Filter;
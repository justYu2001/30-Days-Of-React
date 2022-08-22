import CountryCard from "@/components/CountryCard";

const CountryList = ({ data, keyword }) => {
    const countryList = keyword === '' ? (
        data
    ) : (
        data.filter((country) => (
            country.name.common.toLowerCase().includes(keyword.toLowerCase()))
        )
    );


    return (
        <ul className="grid gap-x-8 gap-y-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-6 bg-slate-100">
            {countryList.map(country => <CountryCard key={country.name.common} country={country} />)}
        </ul>
    );
};

export default CountryList;
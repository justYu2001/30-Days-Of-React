import CatCard from "@/components/CatCard";

const CatList = ({ data, filter }) => {
    return (
        <ul className="p-3 bg-gray-200">
            {filter === 'all' ? (
                data.map((cat) => <CatCard key={cat.id} data={cat} />)
            ) : (
                data.filter((cat) => cat.origin === filter)
                    .map((cat) => <CatCard key={cat.id} data={cat} />)
            )}
        </ul>
    );
};

export default CatList;
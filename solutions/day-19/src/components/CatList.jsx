import CatCard from "@/components/CatCard";

const CatList = ({ data }) => {
    return (
        <ul className="p-3 bg-gray-200">
            {data.map((cat) => <CatCard key={cat.id} data={cat} />)}
        </ul>
    );
};

export default CatList;
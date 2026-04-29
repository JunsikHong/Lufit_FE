interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;

  search: string;
  onChangeSearch: (value: string) => void;
}

const BoardFilter = ({
  categories,
  selectedCategory,
  onChangeCategory,
}: FilterProps) => {
  return (
    <div className="flex gap-2 p-3 overflow-x-auto bg-white border-b">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onChangeCategory(item)}
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border ${
            selectedCategory === item
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default BoardFilter;
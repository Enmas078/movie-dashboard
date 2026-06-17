type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none border border-slate-700"
    />
  );
};

export default SearchBar;
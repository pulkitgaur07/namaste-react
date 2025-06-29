import React, { useState } from "react";

const allItems = [
  "Biryani",
  "Burger",
  "Pizza",
  "Pasta",
  "Shawarma",
  "Chole Bhature",
  "Dosa",
  "Momo",
  "Ice Cream",
  "Pastry",
  "Noodles",
  "Gulab Jamun",
  "Rasmalai",
  "Paratha",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState(["Pizza", "Dosa", "Momo"]);

  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    if (!recent.includes(item)) {
      setRecent([item, ...recent.slice(0, 4)]);
    }
    setQuery(item);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 mt-12">
      <input
        type="text"
        placeholder="Search for dishes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <div className="mt-6 space-y-3">
        {query === "" ? (
          <>
            <h2 className="text-lg font-semibold text-gray-700">Recent Searches</h2>
            <div className="flex flex-wrap gap-2">
              {recent.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 border rounded-full text-sm bg-gray-100 hover:bg-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {filteredItems.length > 0 ? (
              <div className="space-y-2">
                {filteredItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelect(item)}
                    className="cursor-pointer p-3 border rounded hover:bg-orange-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-4">No results found for "{query}"</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
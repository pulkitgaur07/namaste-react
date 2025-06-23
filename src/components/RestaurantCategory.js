import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  return (
    <div className="w-full flex justify-center px-2">
      <div className="w-full lg:w-2/3 m-2 shadow-lg px-4">
        <div
          className="w-full h-12 flex justify-between items-center cursor-pointer"
          onClick={onToggle}
        >
          <span className="font-bold text-base">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">{isOpen ? "⮝" : "⮟"}</span>
        </div>

        <div>{isOpen && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

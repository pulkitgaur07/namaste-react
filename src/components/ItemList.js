import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 my-2 h-44 flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-8/12 h-full">
            <h1 className="font-semibold">{item.card.info.name}</h1>
            <h1 className="font-semibold">₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h1>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 flex justify-center">
            <div className="w-3/4 h-3/4 rounded-lg bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover bg-orange-600" style={{ "--image-url": `url(${IMG_URL+item.card.info.imageId})` }}></div>
            <div className="p-2 w-20 absolute translate-y-28 bg-white rounded-lg text-green-600 text-center font-bold border border-black uppercase">
              Add
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

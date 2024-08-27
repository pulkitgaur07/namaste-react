import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }
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
            <button onClick={() => handleAddItem(item)}>
            <div className="p-2 w-20 absolute -translate-x-28 translate-y-6 bg-white rounded-lg text-green-600 text-center font-bold border border-black uppercase">
              Add
            </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

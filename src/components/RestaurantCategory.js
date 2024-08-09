import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    const [showItems, setShowItems] = useState(false);
    const handleCLick = ()=>{
        showItems === true ? setShowItems(false) : setShowItems(true);
    }
    return (
        <div className="w-full flex justify-center">
            {/* Header */}
            <div className="w-7/12 m-2 shadow-lg px-4">
                <div className="w-full h-12 flex justify-between items-center cursor-pointer" onClick={handleCLick}>
                <span className="font-bold text-base">{data.title} ({data.itemCards.length})</span>
                <span className="text-2xl">{showItems===true ? "⮝" : "⮟"}</span>
                </div>
                <div>
                {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
            {/* Accordian body */}
        </div>
    )
}

export default RestaurantCategory;
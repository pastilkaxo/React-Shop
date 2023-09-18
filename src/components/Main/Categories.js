import "./style/Categories.css"
import React, {useState} from "react";

export default function Categories({handleCategoryChange}){

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
                setSelectedCategory(category);
                handleCategoryChange(category);
    }

    return(
          <section className="categories">
                   <div className="container">
                            <div className="cat-1" onClick={() => handleCategoryClick("All")}><p>All</p></div>
                            <div className="cat-2" onClick={() => handleCategoryClick("Bikes")}><p>Bikes</p></div>
                            <div className="cat-3" onClick={() => handleCategoryClick("Rudders")}><p>Rudders</p></div>
                            <div className="cat-4" onClick={() => handleCategoryClick("Frames")}><p>Frames</p></div>
                   </div>

          </section>
         )  
    };
       



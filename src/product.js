import React from 'react'
import Card from "./components/Card"
import { matchedData } from "./javascript/productSearch"


function product() {

    return (
        <div>
         <div>
            <h3 className="card-search-for"><strong>Search Results for... </strong></h3>
            {
                matchedData.map((data, index) => 
                    <Card data={data} index={index} />
                )
            }
        </div>

        </div>
    )
}

export default product
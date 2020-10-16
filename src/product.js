import React from 'react'

function product() {

    
    function extarctJSON() {
        fetch("./json/products.json")
        .then(res => res.json())
        .then(data => setData(data))  
    }
    
    let productlist;

     function setData(data) {
              productlist = data;
             console.log(productlist);
        }


        return (
            <div>
                <button onClick={extarctJSON} >data</button>
               
            </div>
        )
}

export default product

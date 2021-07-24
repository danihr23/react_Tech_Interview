import React from 'react'
import { useSelector } from 'react-redux'
import './priceField.css'




const PriceField = () => {

    const count = useSelector((store)=> store.count)
   
    const bet = useSelector((store)=> store.bet);
    
    const plays = useSelector(store=> store.plays);

    const store = useSelector((store)=>store)


    console.log(store);
    const price = (Number(plays)*Number(count)*Number(bet)).toFixed(2)
    return (
        <div className='priceField'>
            <h2 className='priceFieldLabel'>Price</h2>
            <h3 className="priceFieldPrice">{price}</h3>
            
        </div>
    )
}

export default PriceField

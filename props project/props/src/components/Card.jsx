import React from 'react'
import { ShoppingCart } from 'lucide-react'
import './Card.css'

const Card = (props) => {

    

    return (
        <div className='card'>
            <img src={props.image} alt={props.name} />
            <div className='content'>
                <div className='top'>
                    <h2>{props.name}</h2><span className='stock'>In Stock: {props.inStock}</span>
                </div>
                <p className='desc'>{props.description}</p>
                <div className='bottom'>
                    <span className='price'>${props.price.toFixed(2)}</span>
                    <button><ShoppingCart size={20} strokeWidth={1.25} /></button>
                </div>
            </div>
        </div>
    )
}

export default Card

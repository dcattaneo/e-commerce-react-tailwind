import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {IoMdClose, IoMdRemove, IoMdAdd} from 'react-icons/io';
import {CartContext} from './../contexts/CartContext';

export const CartItem = ({item})=> {
     const {id, title, image, price, amount} = item;
     const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    return (
        <div className="flex py-2 gap-x-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* Image */}
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} alt="image" />
                </Link>
                <div className='w-full flex flex-col'>
                    {/* Title and remove icon */}
                     <div className='flex justify-between mb-2'>
                        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                            {title}
                        </Link>
                        {/* Remove icon */}
                        <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>   
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
                        </div>
                     </div>
                     <div className='flex gap-x-2 h-[36px] text-sm'>
                        {/* Qty */}
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'> 
                            {/* Decrease icon */}
                            <div onClick={()=> decreaseAmount(id)} className='flex-1 h-full flex 
                                            justify-center items-center cursor-pointer'> 
                                            <IoMdRemove/>
                           </div>
                           {/* amount */}
                           <div className="h-full flex justify-center items-center px-2">{amount}</div>
                           {/* plus icon */}
                           <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center
                                 items-center cursor-pointer">
                                            <IoMdAdd/>
                           </div>
                        </div>
                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around">${price}</div>
                        {/* final price */}
                        <div className="flex-1 flex justify-end items-center text-primary font-medium">
                            {`$${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>


                </div>
                
            </div>
        </div>
    );
};


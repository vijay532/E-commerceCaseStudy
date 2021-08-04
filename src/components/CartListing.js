import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useStateValue } from '../StateProvider'

export default function CartListing() {

  const [{basket}, dispatch] = useStateValue();
  // const [quantity, setQuantity] = useState(1);

  // console.log(basket);

  // function incrementQty(id){
  //   const item=basket.filter((data)=>data==id);
  //   setQuantity(quantity+1);
  // }

  return (
    <table className="table shop-table">
    <tr>
      <th className="b-0">Image</th>
      <th className="b-0">Name</th>
      <th className="b-0">Price</th>
    </tr>
    {basket.map((item, i) => (
      <tr>
        <td>
          <img src={item.image} />
        </td>
        <td>{item.name}</td>
        <td>Rs. {item.price}</td>
      </tr>
    ))}
    <tr>
      <td colspan="3" align="right">
        Subtotal : 4
      </td>
    </tr>
  </table>
  )
}

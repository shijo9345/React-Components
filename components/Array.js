import React from 'react'
// import PropTypes from "prop-types"
const Array = (props) => {
    const {items}=props;
  return (
    <>
    <h2>Item List</h2>
    <ul>
        {
            items.map((item)=>(
                <li>{item.name}</li>
                // <li key={item.id}>{item.name}</li>
            ))
                
      }
    </ul>
    </>
    
  )
}

export default Array;

// Array.propTypes=
// {
//     items:PropTypes.arrayOf(
//         PropTypes.shape(
//             {
//                 id:PropTypes.number,
//                 name:PropTypes.string
//             }
//         )
        
//     )
// }
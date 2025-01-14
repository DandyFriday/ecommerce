import { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  
  const currency = '$';
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false)

  const value = {
    products, 
    currency, 
    delivery_fee,
    search,setSearch,showSearch,setShowSearch
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

// import { createContext } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { products } from '../assets/assets';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = '$';
//   const delivery_fee = 10;

//   const value = {
//     products, 
//     currency, 
//     delivery_fee
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children} {/* Render children props */}
//     </ShopContext.Provider>
//   );
// };

// // Add PropTypes for validation
// ShopContextProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Validate that children is passed
// };

// export default ShopContextProvider;
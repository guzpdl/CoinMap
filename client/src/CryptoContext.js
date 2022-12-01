// import React, { createContext, useContext, useEffect, useState } from 'react'

// const Crypto = createContext()
// const CryptoContext = ({Children} ) => {
//     const [currency, setCurrency] = useState("USD")
//     const [symbol, setSymbol] = useState("$")

//     useEffect(()=> {
//         if (currency === "USD") setSymbol("$")
//         else if( currency === "EUR") setSymbol("€")
//     }, [currency]) 
//   return (
//         <Crypto.Provider value={{currency, symbol, setCurrency}}>
//            {Children} 
//         </Crypto.Provider>
//   ) 
// }

// export default CryptoContext

// export const CryptoState = () => {
//     useContext(Crypto)
// }
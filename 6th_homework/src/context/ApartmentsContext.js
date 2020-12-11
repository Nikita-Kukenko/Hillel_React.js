import React, { useState, useEffect } from 'react';

export const ApartmentsContext = React.createContext([]);

export const ApartmentsContextProvider = ({ children }) => {
  const [apartments, setApartmentsData] = useState(null);

  useEffect(() => {
    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": "2020-12-20",
      "checkOut": "2020-12-31",
      "pageSize": "25",
      "adults1": "1",
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"
    })}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-key": "c2390fc49fmsh53591c296aeb4d9p1f0e77jsn5c4547c05bb7",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "useQueryString": true
      }
    })
     .then(data => data.json())
     .then(data => {
       console.log(data, 'data context');
       return setApartmentsData(data.data.body.searchResults.results);
     })
     .catch((error) => console.log(error))
  }, [])

  return (
    <ApartmentsContext.Provider value={{ apartments: apartments, setData: setApartmentsData }}>
      { children }
    </ApartmentsContext.Provider>
  )
}
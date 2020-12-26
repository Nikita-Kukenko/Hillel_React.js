import React from 'react';

import { ApartmentsContextProvider } from './context/ApartmentsContext';
import { ApartmentCardsWrapper } from './component/ApartmentCardWrapper/ApartmentCardsWrapper';
// import { ApartmentCards } from './atomic/molecules/index.js'

function App() {
  return (
    <ApartmentsContextProvider>
      <ApartmentCardsWrapper />
    </ApartmentsContextProvider>
    // <ApartmentCards />

  );
}

export default App;

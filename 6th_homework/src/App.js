import React from 'react';

import { ApartmentsContextProvider } from './context/ApartmentsContext';
import { ApartmentCardsWrapper } from './component/ApartmentCardWrapper/ApartmentCardsWrapper';

function App() {
  return (
    <ApartmentsContextProvider>
      <ApartmentCardsWrapper />
    </ApartmentsContextProvider>
  );
}

export default App;

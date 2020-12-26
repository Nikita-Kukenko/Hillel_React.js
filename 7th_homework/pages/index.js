import React from 'react';

import { ApartmentCardsWrapper } from '../src/atomic/template/index.js';
import { ApartmentsContextProvider } from '../src/atomic/organisms/context/ApartmentsContext.js';

export default function Apartments() {
  return (
    <ApartmentsContextProvider>
      <ApartmentCardsWrapper />
    </ApartmentsContextProvider>
  );
}

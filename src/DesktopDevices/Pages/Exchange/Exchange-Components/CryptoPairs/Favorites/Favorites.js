import React from 'react';

// Components
import PairsTable from '../PairsTable/PairsTable';

export default function Favorites({ favorites }) {
  return <PairsTable data={favorites} />;
}

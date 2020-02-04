import React from 'react';

// Components
import PairsTable from '../PairsTable/PairsTable';

export default function ALTS({ altsData }) {
  return <PairsTable data={altsData['2']} />;
}

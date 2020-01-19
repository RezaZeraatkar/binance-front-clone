import React from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';

export default function USD ({ usdData }) {
  return <PairsTable data={usdData['3']} />;
}

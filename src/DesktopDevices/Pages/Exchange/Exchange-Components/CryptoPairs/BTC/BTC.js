import React from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';

export default function BTC ({ btcData }) {
  return <PairsTable data={btcData['1']} />;
}

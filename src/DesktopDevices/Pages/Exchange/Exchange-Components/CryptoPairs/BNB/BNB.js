import React from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';

export default function BNB ({ bnbData }) {
  return <PairsTable data={bnbData['0']} />;
}

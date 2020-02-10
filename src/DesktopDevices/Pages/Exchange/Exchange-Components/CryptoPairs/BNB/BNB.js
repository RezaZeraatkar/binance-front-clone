import React, { useMemo } from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';
import pairsDataLoader from '../pairsDataLoader/pairsDataLoader';

export default function BNB({ bnbData }) {
  // Prepare data for pairs table
  const data = useMemo(() => pairsDataLoader(bnbData), [bnbData]);
  return <PairsTable data={data} />;
}

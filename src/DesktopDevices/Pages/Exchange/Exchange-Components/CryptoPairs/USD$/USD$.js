import React, { useMemo } from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';
import pairsDataLoader from '../pairsDataLoader/pairsDataLoader';

export default function USD({ usdData }) {
  // Prepare data for pairs table
  const data = useMemo(() => pairsDataLoader(usdData), [usdData]);
  return <PairsTable data={data} />;
}

import React, { useMemo } from 'react';
// Components
import PairsTable from '../PairsTable/PairsTable';
import pairsDataLoader from '../pairsDataLoader/pairsDataLoader';

export default function BTC({ btcData }) {
  // Prepare data for pairs table
  const data = useMemo(() => pairsDataLoader(btcData), [btcData]);
  return <PairsTable data={data} />;
}

import React, { useMemo } from 'react';

// Components
import PairsTable from '../PairsTable/PairsTable';
import pairsDataLoader from '../pairsDataLoader/pairsDataLoader';

export default function ALTS({ altsData }) {
  // Prepare data for pairs table
  const data = useMemo(() => pairsDataLoader(altsData), [altsData]);
  return <PairsTable data={data} />;
}

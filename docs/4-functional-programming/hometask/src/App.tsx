import { useState, useEffect, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account, Selected } from '../types';
import { dataConverter } from './helpers/dataConverter';

import { updateFilteredData } from './helpers/updateFilteredData'

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [filteredData, setFilteredData] = useState<Row[]>(undefined);
  const [selected, setSelected] = useState<Selected>({
    filters: [],
    searchValue: '',
    sortingOrder: 'asc',
  });

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()])
      .then(([images, users, accounts]: [Image[], User[], Account[]]) =>
        dataConverter(users, accounts, images))
      .then(rows => {
        setData(rows);
        setFilteredData(rows);
      });
  }, [])

  useEffect(() => {
    if (data) {
      const updatedData = updateFilteredData(data, selected);
      setFilteredData(updatedData.length ? updatedData : []);
    }
  }, [data, selected]);

  const memoSort = useMemo(() => {
    return <Sort selected={selected} updateSelected={setSelected} />
  }, [selected])

  const memoFilters = useMemo(() => {
    return <Filters selected={selected} updateSelected={setSelected} />
  }, [selected])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            {memoFilters}
            {memoSort}
          </div>
          <Search selected={selected} updateSelected={setSelected} />
        </div>
        {filteredData?.length ? <Table rows={filteredData} /> : <p>Loading data...</p>}
      </div>
    </StyledEngineProvider>
  );
}

export default App;

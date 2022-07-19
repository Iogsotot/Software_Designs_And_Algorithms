import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';
import { dataConverter } from './helpers/dataConverter';

function App() {
  const [data, setData] = useState<Row[]>(undefined);

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()])
      .then(([images, users, accounts]: [Image[], User[], Account[]]) =>
        dataConverter(users, accounts, images))
      .then(rows => {
        setData(rows);
      });
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        {data?.length ? <Table rows={data} /> : <p>Loading data...</p>}
      </div>
    </StyledEngineProvider>
  );
}

export default App;

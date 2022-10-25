import React from 'react';
import { Table } from '../table';
import './styles.globals.less';
import classes from './styles.module.less';

export const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Table />
    </div>
  );
};

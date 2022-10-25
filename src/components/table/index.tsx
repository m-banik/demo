import React from 'react';
import moment from 'moment';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useLocalReducer, actions } from './useLocalReducer';
import { CandidatesApi } from '@Api/CandidatesApi';
import { CandidateInterface } from '@Common/types';
import classes from './styles.module.less';

const candidatesApi = new CandidatesApi();

const columns: GridColDef[] = [
  {
    field: 'index',
    headerName: '#',
    width: 25,
    type: 'number'
  },
  { field: 'name', headerName: 'Name', width: 140, type: 'string' },
  {
    field: 'currentJobTitle',
    headerName: 'Current job title',
    width: 160,
    type: 'string'
  },
  {
    field: 'currentCompany',
    headerName: 'Current company',
    width: 160,
    type: 'string'
  },
  {
    field: 'tenureInCurrentRole',
    headerName: 'Tenure in current role',
    width: 180,
    type: 'string',
    valueGetter: (params: GridValueGetterParams) => `${params.value} months`
  },
  {
    field: 'salaryInformation',
    headerName: 'Salary',
    width: 70,
    type: 'string',
    valueGetter: (params: GridValueGetterParams) =>
      params.value ? `$${params.value}` : '-'
  },
  {
    field: 'cvUploadTimeStamp',
    headerName: 'Last time CV was uploaded',
    width: 200,
    type: 'string',
    valueGetter: (params: GridValueGetterParams) =>
      moment(params.value).format('DD-MM-yy')
  },
  {
    field: 'lastContactTimeStamp',
    headerName: 'Last contact',
    width: 100,
    type: 'string',
    valueGetter: (params: GridValueGetterParams) =>
      moment(params.value).format('DD-MM-yy')
  }
];

export const Table: React.FC = () => {
  const { state, dispatch } = useLocalReducer();

  const rows = React.useMemo(
    () => state.rows.map((row, index) => ({ index: index + 1, ...row })),
    [state]
  );

  const setRows = React.useCallback(
    (newRows: CandidateInterface[]) => dispatch(actions.setRows(newRows)),
    [dispatch]
  );

  React.useEffect(() => {
    candidatesApi.getCandidates('people').then(setRows);
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ height: 375 }} className={classes.table}>
      <DataGrid
        rows={rows}
        columns={columns}
        classes={{
          root: classes.root,
          columnHeaders: classes.columnHeaders,
          row: classes.row,
          footerContainer: classes.footerContainer
        }}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

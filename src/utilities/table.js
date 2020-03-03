
import React, { useState, useEffect, forwardRef } from "react";
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Paper, Chip } from '@material-ui/core';
import { AddBox, ArrowUpward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn } from '@material-ui/icons';

import CustomizedSnackbars from './errorHandler';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Table(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    columns: null,
    renderColumns: null,
    filters: null,
    data: null,
    hasError: false,
    error: null
  });

  function getColumns(records) {
    const columns = []
    for (const key in records[0]) {
      columns.push({ title: key.replace('_', ' '), field: key })
    }
    return columns.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  }

  function renderFilters() {
    return <Paper className={classes.root}>
      {state.filters.map(filter => {
        return (
          <Chip
            key={filter.key}
            label={filter.label}
            onClick={() => handleClick(filter)}
            className={classes.chip}
            variant={filter.active ? "default" : "outlined"}
            color={"primary"}
          />
        );
      })}
    </Paper>
  }

  function handleClick(selectedFilter) {
    const filters = state.filters.map(filter => { return { ...filter, active: filter.key === selectedFilter.key ? !selectedFilter.active : filter.active } })
    setState({ ...state, filters, renderColumns: createColumnsByFilters(filters, state.columns) })
  }

  function verifyFilter(filters, column) {
    let value = true
    for (const filter of filters) {
      if (filter === column.title) {
        value = true
        break
      } else {
        value = false
      }
    }
    return value
  }

  function createColumnsByFilters(filters, columns) {
    const colums = []
    for (let index = 0; index < filters.length; index++) {
      if (filters[index].active) {
        colums.push(columns[index])
      }
    }
    return colums.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  }

  async function createOrUpdateRow(dataToCreate, method) {
    try {
      const response = await fetch(props.url, {
        method: method,
        body: JSON.stringify(dataToCreate),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const newData = await response.json()
      setState(prevState => {
        const data = [...prevState.data];
        data.push(newData);
        return { ...prevState, data };
      });
    } catch (error) {
      console.error(error)
      setState(prevState => {
        return {
          ...prevState,
          hasError: true,
          error: error
        }
      })
    }
  }

  useEffect(() => {
    try {
        const columns = getColumns(props.data)
        const initialFilters = props.filters || []
        const filters = columns.map((column, index) => {
          return {
            key: index,
            label: column.title,
            active: verifyFilter(initialFilters, column)
          }
        }).sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0))
        setState({
          data : props.data,
          columns,
          renderColumns: createColumnsByFilters(filters, columns),
          filters
        })
    } catch (error) {
      console.error(error)
      setState({
        hasError: true,
        error: error
      })
    }
  }, [props.filters, props.url])

  if (!state.data) {
    return <CircularProgress />;
  }

  if (state.hasError) {
    return <CustomizedSnackbars open={true} message={"haaaa"} type={"error"} />
  }

  return (
    <React.Fragment>
      {renderFilters()}
      <MaterialTable
        title={props.title}
        icons={tableIcons}
        columns={state.renderColumns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                createOrUpdateRow(newData, 'POST')
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </React.Fragment>
  );
}
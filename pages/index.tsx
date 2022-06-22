import { useState } from 'react';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

import AddCard from '../Components/AddCard';
import GridCard from '../Components/GridCard';

import { useAppDispatch, useAppSelector } from '../State/Hooks';
import { createTodoListAction } from '../State/Slice';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Grid
} from '@mui/material';

import PageTemplate from '../Components/PageTemplate';

const Home: NextPage = () => {

  const dispatch = useAppDispatch();

  const todoMap = useAppSelector(state => state.data);

  const [showDialog, setShowDialog] = useState(false);
  const [listName, setListName] = useState('');

  const handleDialogAddClick = () => {
    dispatch(createTodoListAction(listName));
    setListName('');
    setShowDialog(false);
  }
  const handleDialogClose = () => {
    setListName('');
    setShowDialog(false);
  }

  return (
    <PageTemplate>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <AddCard onClick={() => setShowDialog(true)} />
        {Object.values(todoMap).map(it => (
          <GridCard key={it.id} todoList={it} />
        ))}
      </Grid>
      <Dialog open={showDialog} fullWidth >
        <DialogTitle align='center'>Create new list</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            value={listName}
            onChange={e => setListName(e.target.value)}
            label="List Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogAddClick} variant="contained" color="success" disabled={listName.length < 3}>Add</Button>
        </DialogActions>
      </Dialog>
    </PageTemplate>
  )
}

export default Home

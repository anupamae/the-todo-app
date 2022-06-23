import styles from './Index.module.scss';

import { useState } from 'react';
import type { NextPage } from 'next';

import AddCard from '../Components/AddCard';
import GridCard from '../Components/GridCard';

import { useAppDispatch, useAppSelector } from '../State/Hooks';
import { createTodoListAction } from '../State/Slice';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField
} from '@mui/material';

const Index: NextPage = () => {

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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <AddCard onClick={() => setShowDialog(true)} />
      {Object.values(todoMap).map(it => (
        <GridCard key={it.id} todoList={it} />
      ))}

      <Dialog open={showDialog} fullWidth >
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
    </Grid>
  )
}

export default Index

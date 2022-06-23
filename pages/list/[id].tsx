import styles from './TodoList.module.scss';

import React, { useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Fab,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField
} from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../State/Hooks';
import { insertTodoItemAction, removeTodoItemAction, toggleTodoDoneAction } from '../../State/Slice';

const TodoList: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const listId = typeof id === 'string' ? id : ''
  if (listId === '') {
    return (<h1>404 - Page Not Found</h1>)
  }

  const dispatch = useAppDispatch();

  const handleToggle = (itemId: string) => () => {
    dispatch(toggleTodoDoneAction([listId, itemId]))
  }

  const handleDelete = (itemId: string) => () => {
    dispatch(removeTodoItemAction([listId, itemId]))
  }

  const todoList = useAppSelector(state => state.data[listId]);

  const fabGreenStyle = {
    color: 'common.white',
    bgcolor: '#138D75',
    '&:hover': {
      bgcolor: '#45B39D',
    },
  }

  const [showDialog, setShowDialog] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');

  const handleDialogAddClick = () => {
    dispatch(insertTodoItemAction([listId, todoTitle]));
    setTodoTitle('');
    setShowDialog(false);
  }

  const handleDialogClose = () => {
    setTodoTitle('');
    setShowDialog(false);
  }

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && todoTitle.length > 2) { 
      event.preventDefault(); 
      handleDialogAddClick(); 
    }
  }

  return (
    <Box className={styles.box}>
      <h1>{todoList.name}</h1>
      <List dense sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        {
          todoList.list.map(it => {
            const labelId = `checkbox-list-label-${it.id}`;
            return (
              <ListItem
                key={it.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={handleDelete(it.id)}>
                    <Icon>delete</Icon>
                  </IconButton>
                }
                disablePadding>
                <ListItemButton role={undefined} onClick={handleToggle(it.id)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={it.completed}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={it.title} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
      <Fab sx={{ ...fabGreenStyle }} aria-label="add" onClick={() => setShowDialog(true)}>
        <Icon>add</Icon>
      </Fab>
      <Dialog open={showDialog} fullWidth >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyDown={handleDialogKeyDown}
            label="Task Name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogAddClick} variant="contained" color="success" disabled={todoTitle.length < 3}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default TodoList

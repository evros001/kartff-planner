import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main/main';
import SignUp from './components/SignUp/signup';
import LogIn from './components/LogIn/login';
import Roster from './components/Roster/Roster';
import Users from './components/Users/Users';
import axios from 'axios';
import './App.css';

function App() {
  // const [itemText, setItemText] = useState('');
  // const [listItems, setListItems] = useState([]);
  // const [isUpdating, setIsUpdating] = useState('');
  // const [updateItemText, setUpdateItemText] = useState('');

  // // nfl player state vars
  // const [playerNameText, setPlayerNameText] = useState('');

  // // add new todo item to database
  // const addItem = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
  //     setListItems(prev => [...prev, res.data]);
  //     setItemText('');
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // // Create function to fetch all todo items from database -- we will use useEffect hook
  // useEffect(()=>{
  //   const getItemsList = async () => {
  //     try{
  //       const res = await axios.get('http://localhost:5500/api/items')
  //       setListItems(res.data);
  //       console.log('render')
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   getItemsList()
  // },[]);

  // // Delete item when click on delete
  // const deleteItem = async (id) => {
  //   try{
  //     const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
  //     const newListItems = listItems.filter(item=> item._id !== id);
  //     setListItems(newListItems);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // // Update item
  // const updateItem = async (e) => {
  //   e.preventDefault()
  //   try{
  //     const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {item: updateItemText})
  //     console.log(res.data)
  //     const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
  //     const updatedItem = listItems[updatedItemIndex].item = updateItemText;
  //     setUpdateItemText('');
  //     setIsUpdating('');
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // before updating item we need to show input field where we will create our updated item
  // const renderUpdateForm = () => (
  //   <form className="update-form" onSubmit={(e)=>{updateItem(e)}} >
  //     <input className="update-new-input" type="text" placeholder="New Item" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText} />
  //     <button className="update-new-btn" type="submit">Update</button>
  //   </form>
  // )


  const user = localStorage.getItem("token");

  return (
    <div className="App">
      {/* <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Todo Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {
          listItems.map(item => (
          <div className="todo-item">
            {
              isUpdating === item._id
              ? renderUpdateForm()
              : <>
                  <p className="item-content">{item.item}</p>
                  <button className="update-item" onClick={()=>{setIsUpdating(item._id)}}>Update</button>
                  <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Delete</button>
                </>
            }
          </div>
          ))
        }
      </div> */}
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        {user && <Route path="/roster" exact element={<Roster />} />}
        <Route path="/users" exact element={<Users />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/roster" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
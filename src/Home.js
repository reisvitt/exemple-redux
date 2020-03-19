import React from 'react';
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
import { Provider } from 'react-redux'
import store from './store'

function Home() {
  return (

    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  );
}

export default Home;

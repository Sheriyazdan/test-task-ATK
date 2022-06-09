import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import Profile from './components/Profile';
import News from './components/News';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
        <Route path="/news" element={<News />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState({
    pseudo: "",
    email: "",
    password: "",
  });

  const { pseudo, email, paswword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost/api/add`, user);
    let history = useHistory();
    history.push('/all')
  };
};

export default App;

import React, { useEffect, useState } from "react";
import { validation } from "../../validation";
import style from './form.module.css';
import logo from '../../../src/img/logo.png';

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "greidykp@gmail.com",
    password: "123456",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [typePassword, setTypePassword] = useState("password");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(userData.password !== '' && userData.email !== '' && errors.email === '' && errors.password === ''){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [userData, errors])
  

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if(property === "password"){
      setTypePassword("text")
      setTimeout(() => {
        setTypePassword("password")
      }, 800);
    }
    setUserData({ ...userData, [property]: value });
    validation({...userData, [property]: value}, setErrors, errors, property);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);

    if(Object.keys(errors).length === 0 ){
        setUserData({
            email: "",
            password: "",
        });
        setErrors({
            email: "",
            password: "",
        });
    }
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="Logo Rick and Morty" />
      </div>
      <h2>Welcome!</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.field}>
          <label htmlFor="email">Email:</label>
          <input
            className={errors.email ? style.error : style.success}
            type="text"
            name="email"
            value={userData.email}
            placeholder="Enter your email..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.email}</p>
        </div>
        <div className={style.field}>
          <label htmlFor="password">Password:</label>
          <input
            className={errors.password ? style.error : style.success}
            type={typePassword}
            name="password"
            value={userData.password}
            placeholder="Password..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.password}</p>
        </div>
            <button disabled={disabled} className={style.loginButton} type="submit">Log In</button>
      </form>
    </div>
  );
}

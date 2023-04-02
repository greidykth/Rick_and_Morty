import React, { useEffect, useState } from "react";
import { validation } from "../../validation";
import style from './form.module.css';

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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
      <h2>Iniciar Sesión</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.field}>
          <label htmlFor="email">Email:</label>
          <input
            className={errors.email ? style.error : style.success}
            type="text"
            name="email"
            value={userData.email}
            placeholder="Introduce tu email..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.email}</p>
        </div>
        <div className={style.field}>
          <label htmlFor="password">Password:</label>
          <input
            className={errors.password ? style.error : style.success}
            type="text"
            name="password"
            value={userData.password}
            placeholder="Introduce tu password..."
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.password}</p>
        </div>
            <button disabled={disabled} className={style.loginButton} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

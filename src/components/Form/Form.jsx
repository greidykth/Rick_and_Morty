import React, { useState } from "react";
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

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [property]: value });
    validation({...userData, [property]: value}, setErrors, errors);
    console.log(Object.values(errors));

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
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
        <div>
          <label htmlFor="password">Password</label>
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
        {
            userData.password !== '' && userData.email !== '' && errors.email === '' && errors.password === '' && //funcion disable submit
            <button type="submit">Submit</button> // poner disable enable
        } 
      </form>
    </div>
  );
}

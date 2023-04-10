const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validation(form, setErrors, errors, property) {
  console.log(property);
  //email validation
  if(property === 'email'){
    if (!form.email) {
      setErrors(oldErrors => ({...oldErrors,
        email: "El nombre de usuario no puede estar vacío.",
      }));
    } else if (form.email.length > 35) {
      setErrors(oldErrors => ({...oldErrors,
        email: "El nombre de usuario no puede tener más de 35 caracteres.",
      }));
    } else if (!regexEmail.test(form.email)) {
      setErrors(oldErrors => ({...oldErrors,
        email: "El nombre de usuario debe ser un email",
      }));
    } else {
      setErrors(oldErrors => ({...oldErrors,
         email: "" 
        }));
    }
  }

    //password validation
    if(property === 'password'){
      if (form.password.length < 6 || form.password.length > 10) {
        setErrors(oldErrors => ({...oldErrors,
          password:
          "La contraseña debe tener entre 6 y 10 caracteres.",
        }));
      } else if (!/\d/.test(form.password)) {
        setErrors(oldErrors => ({...oldErrors,
          password: "La contraseña debe tener al menos un número.",
        }));
      } else {
        setErrors(oldErrors => ({...oldErrors, 
          password: "" 
        }));
      }
    }
  }

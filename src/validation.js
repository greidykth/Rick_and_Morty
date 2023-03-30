const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function validation(form, setErrors, errors) {
  //email validation
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
        email: "El nombre de usuario tiene que ser un email",
      }));
    } else {
      setErrors(oldErrors => ({...oldErrors,
         email: "" 
        }));
    }

    //password validation
    if (form.password.length < 6 || form.password.length > 10) {
      setErrors(oldErrors => ({...oldErrors,
        password:
          "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.",
      }));
    } else if (!/\d/.test(form.password)) {
      setErrors(oldErrors => ({...oldErrors,
        password: "La contraseña tiene que tener al menos un número.",
      }));
    } else {
      setErrors(oldErrors => ({...oldErrors, 
        password: "" 
    }));
    }
  }


module.exports = {
  validation,
};

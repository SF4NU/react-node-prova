import React, { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pwd: "",
  });
  const [pwdCheck, setPwdCheck] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function toCheckPwd(e) {
    setPwdCheck((p) => (p = e.target.value));
    console.log(pwdCheck);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.pwd === pwdCheck) {
        const response = await axios.post(
          "http://localhost:2121/api/users/register",
          formData
        );
        setFormData({
          user: "",
          email: "",
          pwd: "",
        });
        setPwdCheck("");
      } else {
        console.log("Password doesnt match");
      }
    } catch (error) {
      console.error("Error registering:", error.response.data);
    }
  };

  return (
    <>
      <section className="container">
        <div className="main-form">
          <div className="div-registration">
            <h1>Registration</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="info">
              <div className="name">
                Nome utente:{" "}
                <input
                  onChange={handleChange}
                  value={formData.user}
                  type="text"
                  placeholder="SqualoPazzo34"
                  name="user"
                />
              </div>
              <div className="surname">
                Email:{" "}
                <input
                  onChange={handleChange}
                  value={formData.email}
                  type="text"
                  placeholder="Rossi"
                  name="email"
                />
              </div>
              <div className="email">
                Password:{" "}
                <input
                  onChange={handleChange}
                  value={formData.pwd}
                  type="password"
                  placeholder="●●●●●●●●"
                  name="pwd"
                />
              </div>
              <div className="tel">
                Conferma Password:{" "}
                <input
                  onChange={toCheckPwd}
                  type="password"
                  placeholder="●●●●●●●●"
                  value={pwdCheck}
                />
              </div>
            </div>
            <div className="privacy">
              <input type="checkbox" name="check" id="check" />
              <p>
                Acconsento che i dati forniti saranno trattati nel rispetto
                delle normative sulla privacy vigenti.
              </p>
            </div>
            <div className="submit">
              <input
                type="submit"
                value={"Sign-up"}
                className="submit-button"></input>
            </div>
          </form>
          <div className="main-form-2">
            <div>
              <h1>Login</h1>
            </div>
            <div className="info-2">
              <div className="username">
                Username: <input type="text" placeholder="SqualoPazzo34" />
              </div>
              <div className="password">
                Password: <input type="password" placeholder="●●●●●●●●" />
              </div>
              <div className="password2">
                Conferma Password:{" "}
                <input type="password" placeholder="●●●●●●●●" />
              </div>
            </div>
            <div className="submit">
              <label className="submit-button" type="submit">
                Sign-in
              </label>
            </div>
          </div>
          <div className="second-form">
            <div className="signed">
              <h1 className="goToLogin">To Sign-in</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;

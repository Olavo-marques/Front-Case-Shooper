import React, { useState, useEffect } from "react";
import { URL_BASE } from "../constants/url";
import { GlobalContext } from "./GlobalContext"
import axios from "axios";

export default function GlobalState(props) {
  const token = localStorage.getItem("token")
  const [currentUser, setCurrentUser] = useState({})

  const getProfile = () => {
    console.log("entrei em getProfile")

    if (token) {
      axios.get(`${URL_BASE}user/profile`, {
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          console.log("res", res)
          setCurrentUser(res.data.user)
        })
        .catch((err) => {
          console.log("err getProfile", err)
          // alert("Ocorreu um erro em localizar seus dados tente novamente")
        })
    } else {
    }
  }

  useEffect(() => {
    getProfile()
  }, [token])

  const values = {
    currentUser,
    setCurrentUser,
  }

  const Provider = GlobalContext.Provider

  return <Provider value={values}>{props.children}</Provider>
}
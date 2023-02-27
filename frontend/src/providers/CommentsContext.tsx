import React, { createContext, useState } from "react";
import { api } from "../api/api";


export const CommentContext = createContext({});

function CommentProvider({children}:any){

  const token = localStorage.getItem("@TOKEN");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  async function commentcreate(formData:any){

    //Como fazer uma rota para incluir um comentario dentro de determinado post
    try {
      const response = await api.post("/post", formData, { headers });
     
      const message = response.data.message
      alert({message});
    } catch (error) {
      
      alert("Tente novamente");
    }
  };

  return (
    <>
      <CommentContext.Provider value={{ commentcreate }}>
        {children}
      </CommentContext.Provider>
    </>
  );
};

export default CommentProvider;

import React, { createContext, useState } from "react";
import { api } from "../api/api";


export const PostContext = createContext({});

function PostProvider({children}:any){

  const token = localStorage.getItem("@TOKEN");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  async function postcreate(formData:any){
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
      <PostContext.Provider value={{ postcreate }}>
        {children}
      </PostContext.Provider>
    </>
  );
};

export default PostProvider;

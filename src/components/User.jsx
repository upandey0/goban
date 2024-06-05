import { useRecoilValue } from "recoil";
import { responseState } from "../recoil/atoms";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react";
import Typography from '@mui/material/Typography';

  


const User = () => {
  const { data, loading, error } = useRecoilValue(responseState);

  if (loading) {
    return <div className="flex items-center justify-center"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center"><p>{error}</p></div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div className="flex items-center justify-center"><p>No data available</p></div>;
  }

  return (
    <div className="flex flex-col items-center">
      {data.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-200 p-4 mb-2 rounded"
        >
         <div className="flex flex-col items-center justify-center">
            <h2>Name : {todo.name}</h2>
            <h3>Email : {todo.email}</h3>
            <h4> Address: {todo.address.street},{todo.address.suite}{todo.address.city}</h4>
         </div>
        </div>
      ))}
    </div>
  );
};

export default User;

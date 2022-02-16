import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const addUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newAgee = { age: age + 1 };
    await updateDoc(userDoc, newAgee);
  };

  return (
    <div className="App">
      {/* <h1 style={{ color: "red" }}>App Page</h1> */}
      <input
        type="text"
        placeholder="Enter Name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age..."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      {users.map((user) => {
        return (
          <div key={Math.random()}>
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increment Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

/*
  const [newName, setNewName] = useState();
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const addUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

 ******************************************************************************

<input
        type="text"
        placeholder="Enter Name.. "
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age.. "
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      {users.map((user) => {
        return (
          <div key={Math.random()}>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        );
      })}
*/

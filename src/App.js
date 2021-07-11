import './App.css';
import Table from './Components/Table'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [table, setTable] = useState([
    { id: 1, name: 'John', age: 34, email: 'john@email.com' },
    { id: 2, name: 'Anna', age: 22, email: 'anna@email.com' },
  ])

  const [nameValue, setNameValue] = useState('')
  const [ageValue, setAgeValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const [editMode, setEditMode] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const handleAddRecord = () => {
    if (!nameValue || !ageValue || !emailValue) return
    setTable([...table, { id: uuidv4(), name: nameValue, age: ageValue, email: emailValue }])
    setNameValue('')
    setAgeValue('')
    setEmailValue('')
  }

  const handleChangeNameValue = (e) => {
    setNameValue(e.target.value)
  }

  const handleChangeAgeValue = (e) => {
    setAgeValue(e.target.value)
  }

  const handleChangeEmailValue = (e) => {
    setEmailValue(e.target.value)
  }

  const handleDelete = (id) => {
    const tableCopy = [...table]
    const filteredTable = tableCopy.filter(el => el.id !== id)
    setTable(filteredTable)
  }

  const handleEdit = (id, name, age, email) => {
    setEditMode(prev => !prev)
    setCurrentId(id)
    setNameValue(name)
    setAgeValue(age)
    setEmailValue(email)
  }

  const handleGenerateEdited = () => {
    if (!nameValue || !ageValue || !emailValue) return
    setTable(prev => prev.map(item => item.id === currentId ? { id: currentId, name: nameValue, age: ageValue, email: emailValue } : item))
    setNameValue('')
    setAgeValue('')
    setEmailValue('')
    setEditMode(prev => !prev)
  }

  const handleSort = (type) => {
    const tableCopy = [...table]
    if (type === 'name') {
      const sortedTable = tableCopy.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setTable(sortedTable)
    } else if (type === 'age') {
      const sortedTable = tableCopy.sort((a, b) => (a.age > b.age) ? 1 : -1)
      setTable(sortedTable)
    } else {
      const sortedTable = tableCopy.sort((a, b) => (a.email > b.email) ? 1 : -1)
      setTable(sortedTable)
    }
  }

  return (
    <div className="App">
      <Table
        table={table}
        handleAddRecord={handleAddRecord}
        handleChangeNameValue={handleChangeNameValue}
        handleChangeAgeValue={handleChangeAgeValue}
        handleChangeEmailValue={handleChangeEmailValue}
        nameValue={nameValue}
        ageValue={ageValue}
        emailValue={emailValue}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editMode={editMode}
        currentId={currentId}
        handleGenerateEdited={handleGenerateEdited}
        handleSort={handleSort}
      />
    </div>
  );
}

export default App;

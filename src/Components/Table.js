import React from 'react';
import '../Style/Table.css'
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

const Table = (props) => {

	const renderedTable = props.table.map((item) => {
		return (
			<tr key={item.id}>
				<td>{item.name}</td>
				<td>{item.age}</td>
				<td>{item.email}</td>
				{props.editMode ? null : <td><AiFillEdit onClick={() => props.handleEdit(item.id, item.name, item.age, item.email)} /></td>}
				{props.editMode ? null : <td><FaTrash onClick={() => props.handleDelete(item.id)} /></td>}
			</tr>
		)
	}
	)

	return (
		<div>
			<div>
				{props.editMode ? null : <button onClick={props.handleAddRecord}>Add</button>}
				{props.editMode ? <button onClick={props.handleGenerateEdited}>Accept</button> : null}
				<input type="text" name="name" placeholder="Name" value={props.nameValue} onChange={props.handleChangeNameValue} />
				<input type="text" name="age" placeholder="Age" value={props.ageValue} onChange={props.handleChangeAgeValue} />
				<input type="text" name="email" placeholder="E-mail" value={props.emailValue} onChange={props.handleChangeEmailValue} />
				<h2>Sort by:</h2>
				<button onClick={() => props.handleSort('name')}>Name</button>
				<button onClick={() => props.handleSort('age')}>Age</button>
				<button onClick={() => props.handleSort('email')}>E-mail</button>
			</div>
			<table className="students">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>E-mail</th>
						<th></th>
						<th></th>
					</tr>
					{renderedTable}
				</tbody>
			</table>
		</div>
	)
}

export default Table

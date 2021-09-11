import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ setInputText, setTodos, inputText, todos }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { id: uuidv4(), text: inputText, completed: false }]);
		setInputText('');
	};

	return (
		<form>
			<input
				type='text'
				className='todo-input'
				value={inputText}
				onChange={inputTextHandler}
			/>
			<button className='todo-button' type='submit' onClick={submitTodoHandler}>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;

import React, { useState, useEffect } from 'react';
import Form from './Form';
import Todos from './Todos';

const TodoList = () => {
	const [inputText, setInputText] = useState('');
	const [status, setStatus] = useState('all');
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFileredTodos] = useState([]);

	useEffect(() => {
		// Get to local storage
		const getLocalTodos = () => {
			if (localStorage.getItem('todos') === null) {
				localStorage.setItem('todos', JSON.stringify([]));
			} else {
				let todoLocal = JSON.parse(localStorage.getItem('todos'));
				setTodos(todoLocal);
			}
		};
		getLocalTodos();
	}, []);

	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case 'completed':
					setFileredTodos(todos.filter((todo) => todo.completed === true));
					break;
				case 'uncompleted':
					setFileredTodos(todos.filter((todo) => todo.completed === false));
					break;
				default:
					setFileredTodos(todos);
					break;
			}
		};

		// Save to local storage
		const saveLocalTodos = () => {
			localStorage.setItem('todos', JSON.stringify(todos));
		};

		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	return (
		<React.Fragment>
			<Form
				setInputText={setInputText}
				setTodos={setTodos}
				setStatus={setStatus}
				inputText={inputText}
				todos={todos}
			/>
			<Todos todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
		</React.Fragment>
	);
};

export default TodoList;

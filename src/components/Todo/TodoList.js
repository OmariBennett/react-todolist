import React, { useState } from 'react';
import Form from './Form';
import Todos from './Todos';

const TodoList = () => {
	const [inputText, setInputText] = useState('');
	const [status, setStatus] = useState('all');
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFileredTodos] = useState([]);

	return (
		<React.Fragment>
			<Form
				setInputText={setInputText}
				inputText={inputText}
				setTodos={setTodos}
				todos={todos}
				setStatus={setStatus}
			/>
			<Todos setTodos={setTodos} todos={todos} />
		</React.Fragment>
	);
};

export default TodoList;

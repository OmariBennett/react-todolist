import React, { useState } from 'react';
import Form from './Form';
import Todos from './Todos';

const TodoList = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<React.Fragment>
			<Form
				setInputText={setInputText}
				inputText={inputText}
				setTodos={setTodos}
				todos={todos}
			/>
			<Todos todos={todos} />
		</React.Fragment>
	);
};

export default TodoList;

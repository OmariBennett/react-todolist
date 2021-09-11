import React from 'react';
import Form from './Form';
import Todos from './Todos';

const TodoList = () => {
	return (
		<React.Fragment>
			<Form />
			<Todos />
		</React.Fragment>
	);
};

export default TodoList;

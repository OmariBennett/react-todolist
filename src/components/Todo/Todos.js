import React from 'react';
import Todo from '../Todo';

const Todos = ({ todos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{todos.map((todo) => {
					return <Todo key={todo.id} todo={todo} />;
				})}
			</ul>
		</div>
	);
};

export default Todos;

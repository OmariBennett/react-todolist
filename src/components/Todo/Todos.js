import React from 'react';
import Todo from '../Todo';

const Todos = ({ setTodos, todos, filteredTodos }) => {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.map((todo) => {
					return (
						<Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
					);
				})}
			</ul>
		</div>
	);
};

export default Todos;

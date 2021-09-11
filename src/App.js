import React from 'react';
import TodoList from './components/Todo/TodoList';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<header>
				<h1>React Todo List</h1>
			</header>
			<TodoList />
		</React.Fragment>
	);
}

export default App;

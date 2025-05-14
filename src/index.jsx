import React from 'react' // import react untuk membuat component
import ReactDOM from 'react-dom/client' // import react-dom/client untuk render component ke DOM
import App from './App' // import App component untuk membuat aplikasi utama dari file App.jsx

ReactDOM.createRoot(document.getElementById('root')).render( // render App component ke DOM dengan id root
	<React.StrictMode>
		<App /> {/* render App component ke DOM */}
	</React.StrictMode>
)
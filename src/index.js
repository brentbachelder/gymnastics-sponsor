import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from './providers/global';
import ScrollToTop from './components/scollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Global>
				<ScrollToTop />
				<App />
			</Global>
		</BrowserRouter>
	</React.StrictMode>
);

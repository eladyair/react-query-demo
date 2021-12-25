import React from 'react';
import ReactDOM from 'react-dom';

// 3rd Paties
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-location';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Routes
import { routes, location } from './routes/router';

// Components
import App from './App';

// Styles
import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Router routes={routes} location={location}>
            <App />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>,
    document.getElementById('root')
);

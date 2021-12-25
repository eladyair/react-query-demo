// 3rd Paties
import { Outlet, Link } from 'react-location';

// Styles
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/super-heroes'>Traditional Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-parallel-queries'>RQ Parallel Queries</Link>
                        </li>
                        <li>
                            <Link to='/rq-dynamic-parallel-queries'>RQ Dynamic Parallel Queries</Link>
                        </li>
                        <li>
                            <Link to='/rq-dependent-queries'>RQ Dependent Queries</Link>
                        </li>
                        <li>
                            <Link to='/rq-paginated-queries'>RQ Paginated Queries</Link>
                        </li>
                        <li>
                            <Link to='/rq-infinite-queries'>RQ Infinite Queries</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};

export default App;

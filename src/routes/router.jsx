import React from 'react';

// 3rd Paties
import { ReactLocation } from 'react-location';
// import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/home/home';
import SuperHeroes from '../pages/superheroes/superheroes';
import RQSuperHeroes from '../pages/rq-superheroes/rqsuperheroes';
import RQSuperHero from '../pages/rq-superhero/rq-superhero';
import ParallelQueries from '../pages/parallel-queries/parallel-queries';
import DynamicParallelQueries from '../pages/dynamic-parallel-queries/dynamic-parallel-queries';
import DependentQueries from '../pages/dependent-queries/dependent-queries';
import PaginatedQueries from '../pages/paginated-queries/paginated-queries';
import InfiniteQueries from '../pages/infinite-queries/infinite-queries';

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/super-heroes',
        element: <SuperHeroes />
    },
    {
        path: '/rq-super-heroes',
        element: <RQSuperHeroes />
    },
    {
        path: '/rq-super-hero/:heroId',
        element: <RQSuperHero />
    },
    {
        path: '/rq-parallel-queries',
        element: <ParallelQueries />
    },
    {
        path: '/rq-dynamic-parallel-queries',
        element: <DynamicParallelQueries />
    },
    {
        path: '/rq-dependent-queries',
        element: <DependentQueries />
    },
    {
        path: '/rq-paginated-queries',
        element: <PaginatedQueries />
    },
    {
        path: '/rq-infinite-queries',
        element: <InfiniteQueries />
    }
];

export const location = new ReactLocation();

// const Routes = () => {
//     return (
//         <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/super-heroes' component={SuperHeroes} />
//             <Route path='/rq-super-heroes' component={RQSuperHeroes} />
//             <Route path='/rq-super-heroes/:id' component={RQSuperHero} />
//         </Switch>
//     );
// };

// export default Routes;

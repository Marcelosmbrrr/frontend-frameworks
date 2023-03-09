import * as React from 'react';
import { Layout } from '../components/layout/Layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages/auth/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Counter } from '../pages/dashboard/counter';
import { TodoList } from '../pages/dashboard/todoList';
import { Memos } from '../pages/dashboard/memos';
import { Profile } from '../pages/dashboard/profile';
import { NotFound } from '../pages/404/notFound';

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/internal" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="todolist" element={<TodoList />} />
                    <Route path="memoization" element={<Memos />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
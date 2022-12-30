import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Admin from '../layouts/Admin';
import Auth from '../layouts/Auth';

const Loging = lazy(async () => await import('../views/auth/login'));
const SendResetLink = lazy(async () => await import('../views/auth/send-reset-link'));

const Home = lazy(async () => await import('../views/home'));
const Editorial = lazy(async () => await import('../views/editorial'));
const Map = lazy(async ()=> await import('../views/map'))

const LoadingPage = (): JSX.Element => {
	return <>Loading...</>;
};

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		errorElement: <>Error 404</>,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/editorial',
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Editorial />
					</Suspense>
				),
			},
			{
				path: '/map',
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Map />
					</Suspense>
				),
			},
		],
	},
	{
		path: '/login',
		element: <Auth />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<>Loadin ...</>}>
						<Loging />
					</Suspense>
				),
			},
		],
	},
	{
		path: '/sendresetlink',
		element: <Auth />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<>Loadin ...</>}>
						<SendResetLink />
					</Suspense>
				),
			},
		],
	},
];

export default createBrowserRouter(routes);

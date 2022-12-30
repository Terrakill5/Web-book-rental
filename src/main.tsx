import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@popperjs/core';
import 'bootstrap';
import 'perfect-scrollbar';
import './template/js/custom.js';
import './template/js/sidebarmenu.js';

import './styles/app.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import router from './router';
import { RouterProvider } from 'react-router-dom';

library.add(fas, far);

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

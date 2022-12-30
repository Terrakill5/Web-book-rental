import { Outlet } from 'react-router-dom';
import FooterPage from './components/FooterPage';
import HeaderPage from './components/HeaderPage';
import LeftSidebar from './components/LeftSidebar';

const Admin = (): JSX.Element => {
	return (
		<section id="main-wrapper">
			<HeaderPage />

			<LeftSidebar />

			<div className="page-wrapper">
				<div className="container-fluid">
					<Outlet />
				</div>
			</div>

			<FooterPage />
		</section>
	);
};

export default Admin;

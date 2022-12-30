import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoIcon from '../../template/images/logo-icon.png';
import logoText from '../../template/images/logo-text.png';

const HeaderPage = (): JSX.Element => {
	return (
		<header className="topbar">
			<nav className="navbar top-navbar navbar-expand-md navbar-dark">
				<div className="navbar-header">
					<a className="navbar-brand" href="/">
						<b>
							<img src={logoIcon} alt="homepage" className="light-logo img-fluid" />
						</b>
						<span>
							<img src={logoText} className="light-logo img-fluid" alt="homepage" />
						</span>
					</a>
				</div>

				<div className="navbar-collapse">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<a className="nav-link nav-toggler d-block d-md-none" href="#">
								<FontAwesomeIcon icon="fa-solid fa-bars" />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link sidebartoggler d-none d-md-block" href="#">
								<FontAwesomeIcon icon="fa-solid fa-bars" />
							</a>
						</li>
					</ul>

					<ul className="navbar-nav my-lg-0 pe-2">
						<li className="nav-item dropdown u-pro">
							<a
								className="nav-link dropdown-toggle profile-pic"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<FontAwesomeIcon icon="fa-solid fa-circle-user" />
								<span className="hidden-md-down ms-1">
									Abel Palomino &nbsp;
									<FontAwesomeIcon icon="fa-solid fa-angle-down" />
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-end animated flipInY">
								<a href="#" className="dropdown-item">
									<FontAwesomeIcon icon="fa-regular fa-user" />
									Mi perfil
								</a>
								<a href="#" className="dropdown-item">
									<FontAwesomeIcon icon="fa-solid fa-gear" />
									Configuración
								</a>
								<div className="dropdown-divider"></div>
								<a href="#" className="dropdown-item">
									<FontAwesomeIcon icon="fa-solid fa-power-off" />
									Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default HeaderPage;

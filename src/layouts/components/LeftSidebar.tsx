import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LeftSidebar = (): JSX.Element => {
	return (
		<aside className="left-sidebar">
			<div className="scroll-sidebar">
				<nav className="sidebar-nav">
					<ul id="sidebarnav">
						<li className="user-pro">
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fas fa-user-circle" />
									<span className="hide-menu">Abel Palomino</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<a href="#">
										<FontAwesomeIcon icon="fa-regular fa-user" />
										Mi perfil
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon="fa-solid fa-gear" />
										Configuración
									</a>
								</li>
								<li>
									<a href="#">
										<FontAwesomeIcon icon="fa-solid fa-power-off" />
										Logout
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-small-cap">--- ADMIN</li>
						<li>
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fa-solid fa-users-gear" />
									<span className="hide-menu">Administradores</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<Link to="/editorial">Editoriales</Link>
								</li>
							</ul>
						</li>
						<li className="nav-small-cap">--- GENERAL</li>
						<li>
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />
									<span className="hide-menu">Mantenedores</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<a href="#">Libros</a>
								</li>
							</ul>
						</li>
						<li>
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fa-solid fa-boxes-stacked" />
									<span className="hide-menu">Biblioteca</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<a href="#">Prestamos</a>
								</li>
							</ul>
						</li>
						<li className="nav-small-cap">--- TIENDA</li>
						<li>
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fa-solid fa-store" />
									<span className="hide-menu">Venta</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<a href="#">item 1.1</a>
								</li>
								<li>
									<a href="#">item 1.1</a>
								</li>
							</ul>
						</li>
						<li>
							<a className="has-arrow" href="#" aria-expanded="false">
								<span className="nav-item-content">
									<FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
									<span className="hide-menu">Items</span>
								</span>
							</a>
							<ul aria-expanded="false" className="collapse">
								<li>
									<a href="#">item 1.1</a>
								</li>
								<li>
									<a href="#">item 1.2</a>
								</li>
								<li>
									<a className="has-arrow" href="#" aria-expanded="false">
										Menu 1.3
									</a>
									<ul aria-expanded="false" className="collapse">
										<li>
											<a href="#">item 1.3.1</a>
										</li>
										<li>
											<a href="#">item 1.3.2</a>
										</li>
										<li>
											<a href="#">item 1.3.3</a>
										</li>
										<li>
											<a href="#">item 1.3.4</a>
										</li>
									</ul>
								</li>
								<li>
									<a className="has-arrow" href="#" aria-expanded="false">
										Menu 1.4
									</a>
									<ul aria-expanded="false" className="collapse">
										<li>
											<a href="#">item 1.4.1</a>
										</li>
										<li>
											<a href="#">item 1.4.2</a>
										</li>
										<li>
											<a href="#">item 1.4.3</a>
										</li>
										<li>
											<a href="#">item 1.4.4</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">item 1.5</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default LeftSidebar;

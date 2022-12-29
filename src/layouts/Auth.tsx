import { Outlet } from 'react-router-dom';
import logo from '../template/images/logo.png';
import bgMain from '../template/images/bg-main.jpg';

const Auth = (): JSX.Element => {
	return (
		<section id="wrapper" className="login-register" style={{ backgroundImage: `url(${bgMain})` }}>
			<article className="ui-auth-about-sistem">
				<div className="card">
					<div className="card-body">
						<h1 className="text-primary fw-bold">
							Bibliotica Web <span className="text-version"> v1.0</span>
						</h1>
						<p className="text-primary fw-bold mb-2">Sistema control de prestamos</p>
					</div>
				</div>
			</article>
			<article className="ui-auth-form-container">
				<div className="card border-0 w-100">
					<div className="card-body">
						<div className="text-center mt-2 mb-5">
							<a href="#">
								<img src={logo} alt="Home" className="img-fluid" />
							</a>
						</div>

						<Outlet />
					</div>
				</div>
			</article>
		</section>
	);
};

export default Auth;

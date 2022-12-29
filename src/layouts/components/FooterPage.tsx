const FooterPage = (): JSX.Element => {
	return (
		<footer className="footer">
			© {new Date().getFullYear()} <span className="mx-1 fw-bold">Prestamo Libros</span> v1.0
			Desarrollado por
			<a href="#">Pirqana</a>
		</footer>
	);
};

export default FooterPage;

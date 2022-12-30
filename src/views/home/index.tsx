import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const index = (): JSX.Element => {
	return (
		<>
			<Row className="page-titles">
				<Col className="col-auto">
					<ol className="breadcrumb py-1">
						<li className="breadcrumb-item text-nowrap">Home</li>
						<li className="breadcrumb-item text-nowrap active">Index</li>
					</ol>
				</Col>
				<Col className="d-flex justify-content-end align-items-center">
					<div>
						<Button variant="primary" size="sm">
							Primary
						</Button>{' '}
						<Button variant="secondary" size="sm">
							Secondary
						</Button>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<Card>
						<Card.Body>
							<h2 className="text-muted">Bienvenido al sistema</h2>
							<h3 className="h5">Jose Briceño</h3>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useFormik } from 'formik';
import { EditorialService } from '../../services';
import { EditorialModel, FilterPage, RequestPagination, ResponsePagination } from '../../types';

const index = (): JSX.Element => {
	// Attributes
	const [dataEditorial, setDataEditorial] = useState<ResponsePagination<EditorialModel>>();
	const [searchFilter, setSearchFilter] = useState<RequestPagination<EditorialModel>>({
		page: 1,
		perPage: 10,
	});

	const formik = useFormik<EditorialModel>({
		initialValues: {
			codigo: '',
			nombre: '',
		},
		onSubmit: values => {
			setSearchFilter(prev => {
				return {
					...prev,
					page: 1,
					filter: values,
				};
			});
		},
	});

	// Hooks
	useEffect(() => {
		console.log('useEffect');
		void paginatedSerachEditoriales();
	}, [searchFilter]);

	// Vendor
	const columnHelper = createColumnHelper<EditorialModel>();

	const columns = [
		columnHelper.accessor('id', {
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('codigo', {
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('nombre', {
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('fechaRegistro', {
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('estado', {
			cell: info => info.getValue(),
		}),
	];

	const table = useReactTable<EditorialModel>({
		data: dataEditorial?.data ?? [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	// Methods
	const paginatedSerachEditoriales = async (): Promise<void> => {
		const response = await EditorialService.paginatedSearch(searchFilter);
		const data: ResponsePagination<EditorialModel> = response.data;

		console.log('busqueda pagianda', data);

		setDataEditorial(data);
	};

	const handleGotoPage = (payload: FilterPage): void => {
		console.log('gotoPage', payload);

		setSearchFilter(prev => {
			return {
				...prev,
				page: payload.page,
				perPage: payload.perPage,
			};
		});
	};

	return (
		<>
			<Row className="page-titles">
				<Col className="col-auto">
					<ol className="breadcrumb py-1">
						<li className="breadcrumb-item text-nowrap">Administradores</li>
						<li className="breadcrumb-item text-nowrap active">Editoriales</li>
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
					<Card className="mb-2">
						<Card.Header className="d-flex justify-content-between">
							Búsqueda
							<div>
								<Button variant="primary" size="sm" onClick={() => formik.handleSubmit()}>
									Buscar
								</Button>
							</div>
						</Card.Header>
						<Card.Body>
							<Row className="g-3">
								<Col xs={12} sm={6} md={4} xxl={3}>
									<Form.Label>Codigo</Form.Label>
									<Form.Control
										type="text"
										size="sm"
										name="codigo"
										value={formik.values.codigo ?? ''}
										onChange={formik.handleChange}
									/>
								</Col>
								<Col xs={12} sm={6} md={4} xxl={3}>
									<Form.Label>Nombre</Form.Label>
									<Form.Control
										type="text"
										size="sm"
										name="nombre"
										value={formik.values.nombre ?? ''}
										onChange={formik.handleChange}
									/>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card>
						<Card.Header>Listado de editoriales</Card.Header>
						<Card.Body>
							<Table>
								<thead>
									{table.getHeaderGroups().map(headerGroup => (
										<tr key={headerGroup.id}>
											{headerGroup.headers.map(header => (
												<th key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(header.column.columnDef.header, header.getContext())}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody>
									{table.getRowModel().rows.map(row => (
										<tr key={row.id}>
											{row.getVisibleCells().map(cell => (
												<td key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</Table>

							<div className="d-flex justify-content-between align-items-center flex-wrap">
								<div className="d-flex justify-content-between align-items-center py-1">
									<div className="pe-2">
										Mostrando resgistro del
										<span className="fw-bold"> {dataEditorial?.from ?? 0}</span> al
										<span className="fw-bold"> {dataEditorial?.to ?? 0}</span> de un total de
										<span className="fw-bold"> {dataEditorial?.total ?? 0}</span> registros
									</div>
								</div>
								<Pagination size="sm">
									<Pagination.First
										disabled={dataEditorial?.currentPage === 1}
										onClick={() =>
											handleGotoPage({
												page: 1,
												perPage: dataEditorial?.perPage ?? 10,
											})
										}
									/>
									<Pagination.Prev
										disabled={dataEditorial?.currentPage === 1}
										onClick={() =>
											handleGotoPage({
												page: (dataEditorial?.currentPage ?? 0) - 1,
												perPage: dataEditorial?.perPage ?? 10,
											})
										}
									/>

									<Pagination.Ellipsis />

									<Pagination.Next
										disabled={dataEditorial?.currentPage === dataEditorial?.lastPage}
										onClick={() =>
											handleGotoPage({
												page: (dataEditorial?.currentPage ?? 0) + 1,
												perPage: dataEditorial?.perPage ?? 10,
											})
										}
									/>
									<Pagination.Last
										disabled={dataEditorial?.currentPage === dataEditorial?.lastPage}
										onClick={() =>
											handleGotoPage({
												page: dataEditorial?.lastPage ?? 0,
												perPage: dataEditorial?.perPage ?? 10,
											})
										}
									/>
								</Pagination>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;

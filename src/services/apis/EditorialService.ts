import axios, { AxiosResponse } from 'axios';
import { stringify } from 'qs';

import { API_BASE_URL } from '../../constants/env';
import { EditorialModel, RequestPagination, ResponsePagination } from '../../types';

export const findAll = async (): Promise<AxiosResponse<EditorialModel[]>> =>
	await axios.get<EditorialModel[]>(`${API_BASE_URL}/api/editorial`);

export const paginatedSearch = async (
	payload: RequestPagination<EditorialModel>,
): Promise<AxiosResponse<ResponsePagination<EditorialModel>>> => {
	const queryParams: string = stringify(payload, { allowDots: true });

	const response = await axios.get<ResponsePagination<EditorialModel>>(
		`${API_BASE_URL}/api/editorial/paginatedsearch?${queryParams}`,
	);

	return response;
};

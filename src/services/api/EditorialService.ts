import axios, { AxiosResponse } from 'axios';

import { API_BASE_URL } from '../../constants/env';
import { EditorialModel } from '../../types';

export const findAll = async (): Promise<AxiosResponse<EditorialModel[]>> =>
	await axios.get<EditorialModel[]>(`${API_BASE_URL}/api/editorial`);

import { CANDIDATES_BASE_URL } from './baseUrls';
import { MakeRequestType } from '@Common/types';

export const makeRequestViaFetch: MakeRequestType = async (params) => {
  let url = params.baseUrl || CANDIDATES_BASE_URL;

  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  let requestBody: URLSearchParams | undefined;

  switch (params.method) {
    case 'GET':
      url += `/${params.jobId}`;
      break;
    case 'POST':
    default:
      break;
  }

  const response = await fetch(url, {
    method: params.method,
    headers,
    body: requestBody ? JSON.stringify(requestBody) : requestBody
  });

  if (!response.ok) {
    throw new Error(
      'An error occurred while trying to connect with the server!'
    );
  }

  return response.json();
};

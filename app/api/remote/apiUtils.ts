import API_CONFIG from './apiConfig';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions extends RequestInit {
  method: HttpMethod;
}

export const fetchData = async <T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T> => {
  const { apiUrl } = API_CONFIG;
  const url = `${apiUrl}/${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
   // Authorization: `Bearer ${apiKey}`,
    ...options?.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
     headers,
    });

    console.log(response)
    if (!response.ok) {
      const errorMessage = `HTTP error! Status: ${response.status}`;
      const responseBody = await response.json();
      console.error(errorMessage, responseBody);
      return (responseBody);
    }

    return await response.json() as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

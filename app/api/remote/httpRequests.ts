import { fetchData } from './apiUtils';

export const get = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetchData(endpoint);
    return response as T;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export const post = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await fetchData(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response as T;

  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};

export const put = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await fetchData(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response as T;
  } catch (error) {
    console.error(`Error updating data at ${endpoint}:`, error);
    throw error;
  }
};


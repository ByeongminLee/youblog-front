const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.youblog.site';

type MethodType = 'GET' | 'POST';

export const fetcher = async (path: string, method: MethodType, body?: any) => {
  const options: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    try {
      options.body = body;
    } catch (error) {
      console.error('Error serializing request body to JSON:', error);
      throw error;
    }
  }

  try {
    console.log('BASE_URL + path, options', BASE_URL + path, options);
    const res = await fetch(BASE_URL + path, options);

    if (!res.ok) {
      const errorMessage = `Network response was not ok. Status: ${res.status}, ${res.statusText}`;
      throw new Error(errorMessage);
    }

    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

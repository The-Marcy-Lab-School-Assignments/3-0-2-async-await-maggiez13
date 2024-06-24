export const fetchHandler = async (url, options ={}) => {
  try {
    /** FEEDBACK: Great job getting all test cases to pass! */
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Fetch failed with status - ${response.status}, ${response.status.text}`);
    }
    // checking if response is json 
    const contentType = response.headers.get('content-type');
    if (contentType !== null && contentType.includes('application/json')) {
      const jsonData = await response.json();
      return [jsonData, null]
    }
    // Get text response if not JSON
    const textData = await response.text(); 
    return [textData, null]; 
    
  } 
  catch (error) {
    console.warn(error);
    return [null, error];
  }
};




export function handleApiError(error: any): string {
  console.error('API Error:', error);
  
  if (error.response?.data) {
    const errorData = error.response.data;
    
    if (errorData.errors?.message) {
      return errorData.errors.message;
    }
    
    if (errorData.errors) {
      const errorFields = Object.keys(errorData.errors);
      if (errorFields.length > 0) {
        const firstField = errorFields.find(field => field !== 'message');
        if (firstField && Array.isArray(errorData.errors[firstField])) {
          return errorData.errors[firstField][0];
        }
      }
      return 'Validation error occurred';
    }

    if (errorData.message) {
      return errorData.message;
    }
  }
  
  return 'Network error occurred';
}
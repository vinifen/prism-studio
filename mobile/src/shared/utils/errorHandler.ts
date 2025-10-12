export function handleApiError(error: any): string {
  console.error('API Error:', error);
  
  if (error.response?.data) {
    const errorData = error.response.data;
    
    // Handle specific error message from backend
    if (errorData.errors?.message) {
      return errorData.errors.message;
    }
    
    // Handle validation errors - show first error found
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
    
    // Handle general error message
    if (errorData.message) {
      return errorData.message;
    }
  }
  
  // Fallback for network or unknown errors
  return 'Network error occurred';
}
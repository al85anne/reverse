const API_ENDPOINTS = {
    getEvent: 'events',
    getEventById: (id: number) => `events/${id}`,
    postTransaction: 'transactions',
    createCustomer: 'customers',
  };
  
  export default API_ENDPOINTS;
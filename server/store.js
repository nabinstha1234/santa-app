const pendingRequests = [];

module.exports = {
  addRequest: (req) => {
    pendingRequests.push(req);
  },
  clearRequests: () => {
    pendingRequests.length = 0;
  },
  removeRequest: (req) => {
    const index = pendingRequests.indexOf(req);
    if (index > -1) {
      pendingRequests.splice(index, 1);
    }
  },
  getRequestCount: () => {
    return pendingRequests.length;
  },
  getFirstRequest: () => {
    return pendingRequests[0];
  },
  getLastRequest: () => {
    return pendingRequests[pendingRequests.length - 1];
  },
  getNthRequest: (n) => {
    return pendingRequests[n];
  },
  getPendingRequests: () => {
    return pendingRequests;
  },
};

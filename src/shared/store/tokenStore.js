// src/shared/store/tokenStore.js
let accessToken = null;

const tokenStore = {
  get: () => accessToken,
  set: (token) => { accessToken = token; },
  clear: () => { accessToken = null; },
};

export default tokenStore;
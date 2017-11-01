class Auth {
  static currentUser = null;

  static setToken(token) {
    return window.localStorage.setItem('token', token);
  }

  static getToken() {
    return window.localStorage.getItem('token');
  }

  static setCurrentUser(user){
    this.currentUser = user;
  }

  static getCurrentUser() {
    return this.currentUser;
  }

  static isAuthenticated() {
    return !!this.getToken();
  }

  static logout() {
    this.currentUser = null;
    window.localStorage.removeItem('token');
  }

  static getPayload() {
    const token = this.getToken();
    if(!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }
}

export default Auth;

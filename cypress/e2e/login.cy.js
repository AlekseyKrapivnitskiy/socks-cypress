import HomePage from '../pages/HomePage'

describe('Login test', () => {
    it('Login positive', () => {
      const home = new HomePage();

      home.open();
      home.logIn('test1', 123);
    })
  })
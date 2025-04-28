class AppController {
  getHome(req, res) {
    res.send('Welcome to the API!');
  }
}

export const appController = new AppController();

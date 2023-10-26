const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.inicio(app);
routes.saveTarefa(app);
routes.getEsp(app);
routes.searchEsp(app);
routes.home(app);
routes.saveTarefa(app);
routes.alterTarefa(app);
routes.getTarefaEsp(app);
import {sequelize} from './src/db'; // Cambio aquí
import server from './src/app';

sequelize.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001');
    });
});
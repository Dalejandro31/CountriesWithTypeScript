import dotenv from 'dotenv';
import { Sequelize} from 'sequelize';
import fs from 'fs';
import path from 'path';
dotenv.config();
const{
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

const basename= path.basename(__filename);
const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file: string) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
    .forEach((file: string) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)).default(sequelize));
    })

modelDefiners.forEach(model =>model(sequelize));


const{Country, Activity} = sequelize.models;

Activity.belongsToMany(Country,{through: 'ActivityCountry', timestamps: false});
Country.belongsToMany(Activity,{through: 'ActivityCountry', timestamps: false})

export {sequelize, Country, Activity};
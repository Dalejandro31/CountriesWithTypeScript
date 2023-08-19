require('dontenv').config();
const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');

const{
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    loggin: false,
    native: false,
});

const basename= path.basename(__filename);
const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file: string) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
    .forEach((file: string) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    })

modelDefiners.forEach(model =>model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const{Country, Activity} = sequelize.models;

Activity.belongsToMany(Country,{through: 'ActivityCountry', timestamp: false});
Country.belongsToMany(Activity,{through: 'ActivityCountry', timestamp: false})

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}
"use strict";
const server = require('./src/app.ts');
const { conn } = require('./src/db.ts');
conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001');
    });
});

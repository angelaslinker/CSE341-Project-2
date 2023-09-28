const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Makeup Api',
        description: 'Makeup Api'
    },
    host: 'localhost:3030',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
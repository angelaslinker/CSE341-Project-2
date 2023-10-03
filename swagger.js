const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Makeup and Skincare API',
        description: 'API for Makeup and Skincare Products',
    },
    host: 'localhost:3030',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
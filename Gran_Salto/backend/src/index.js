const app = require('./app');
const path = require('path');
require('dotenv').config();
require('./database');

//settings
app.set('port', 3000);

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
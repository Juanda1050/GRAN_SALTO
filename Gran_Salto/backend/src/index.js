const app = require('./app');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

//settings
app.set('port', 3000);

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const cors = require('cors');
const vars = require('../config/vars');

module.exports = ({ app }) => {
  const origins = vars.origins;
// TODO: * for now, change it to the varaible that can be passed through the env variable
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
};

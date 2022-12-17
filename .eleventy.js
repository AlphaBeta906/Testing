require('dotenv').config();

module.exports = config => {
    config.addGlobalData('env', process.env);

    return {
        dir: {
            input: 'src',
            output: '_site',
        }
    };
}
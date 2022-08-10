if(process.env.NODE_ENV === 'prodection'){
    module.exports = require('./prodection');
}else{
    module.exports = require('./dev')
}
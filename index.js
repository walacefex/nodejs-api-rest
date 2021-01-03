const customExpress = require('./config/customExpress')
const app = customExpress();
app.listen(3000, () => console.log('serdidor rodando na porta 3000'));


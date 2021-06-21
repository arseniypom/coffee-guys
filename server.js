const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});
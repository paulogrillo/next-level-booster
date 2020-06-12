import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);



// Roya: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Get: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// Get http://localhost:3333/users = Listar usuários

// Get http://localhost:3333/users/5 = Listar um único usuários com ID

// Request param: Parâmetros que vem na própria rota que identificam // um recurso
// Query param: São parâmetros que vem na própria rota, geralemnte // // opcionais para filtros.
// Request Body: Parâmetros para criação/atualização de informações
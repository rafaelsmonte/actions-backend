import express, { Application } from 'express';
import versionRoute from './routes/versionRoute';

const app: Application = express();

app.use('/', versionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
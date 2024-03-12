import express from 'express';
import multer from 'multer';
import { storage } from './multerConfig';
import { prisma } from './prisma';
import * as dotenv from 'dotenv';

dotenv.config();

const upload = multer({ storage: storage });
const app = express();
const PORT = process.env.PORT || 8079;

app.use('/files', express.static("uploads"));

app.get('/imagens', async (req, res) => {
    const selecionarImagens = await prisma.imagem.findMany();

    return res.json(selecionarImagens);
})

app.post('/upload', upload.single('file'), async (req, res) => {
    if (req.file) {
        const nomeImagem = req.file.filename;
        const uriImagem = req.file.path;
        const adicionarImagem = await prisma.imagem.create({
            data: {
                nomeImagem,
                uriImagem
            }
        });
        return res.json({adicionarImagem});
    }
});

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}!`);
});
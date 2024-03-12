import express from 'express';
import multer from 'multer';
import { storage } from './multerConfig';
import { prisma } from './prisma';

const upload = multer({ storage: storage });
const app = express();

app.use('/files', express.static("uploads"));

app.post('/upload', upload.single('file'), async (req, res) => {
    if (req.file) {
        const nomeImagem = req.file.fieldname;
        const uriImagem = req.file.path;
        const adicionarImage = await prisma.imagem.create({
            data: {
                nomeImagem,
                uriImagem
            }
        });
        return res.json({adicionarImage});
    }
});

app.listen(8079, () => {
    console.log("Server rodando na porta 8079!");
});
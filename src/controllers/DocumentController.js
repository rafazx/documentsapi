const Document = require('../model/Document');

class DocumentControoler {
    async create(req, res) {
        try {
            const { title, content} = req.body;
            if(!title || title === '') { return res.status(200).send('O documento precisa ter título')}
            const document = await Document.create({
                title,
                content
            })
            if(!document){ return res.status(200).send('Houve um erro na criação do documento')};
            console.log(document)
            return res.status(200).send({ message : 'Documento foi criado com sucesso', document});
        } catch(err) {
            return res.status(500).send(err.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const document = await Document.find({ '_id' : id });
            if(!document) { return res.status(200).send('O documento não foi achado no banco de dados')};

        }catch(err) {
            return res.status(500).send(err.message);
        }
    }

    async getAll(req, res) {
        try {
            const allDocuments = await Document.find().lean();
            if(!allDocuments) { return res.status(200).send('Não existe Documentos na base de dados')}
            return res.status(200).send(allDocuments);
        } catch(err){
            return res.status(500).send(err.message);
        }
    }
    
    async delete(req, res) {
        try { 
            const { id } = req.params;
            const document = await Document.delete({ '_id' : id })
            if(!document) { return res.status(200).send('Documento não vou excluido da base de dados')}
            return res.status(200).send('Documento excluido com sucesso');
        } catch(err) {
            return res.status(500).send(err.message);
        }
    }

}

module.exports = new DocumentControoler();
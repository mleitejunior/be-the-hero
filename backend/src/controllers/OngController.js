const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create (req,res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json( { id } );
    },

    async delete (req, res) {
        const ong_id = req.headers.authorization;

        const ong = await connection('ongs').where('id', ong_id).first();

        if (!ong) {
            return res.status(404).json({ error: "Invalid ONG id." });
        }

        await connection('ongs').where('id', ong_id).delete();
        
        return res.status(204).send();
    }
};
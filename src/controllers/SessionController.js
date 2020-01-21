const User = require('../models/User');

module.exports = {
    async store(req, res) {
        if(!req.body.name || !req.body.email || !req.body.password)
            return res.json({"success": false, "message": "Dados inválidos"});
            
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if(user){
            return res.json({"success": true, "message": "Usuário já cadastrado", user});
        }else{
            user = await User.create({ name, email, password });
        }

        return res.json({"success": true, "message": "Usuário cadastrado com sucesso", user});
    },

    async signin(req, res){
        if(!req.body.email || !req.body.password)
            return res.json({"success": false, "message": "Dados inválidos"});

        const { email, password } = req.body;

        let user = await User.findOne({ email, password })

        if(user){
            return res.json({"success": true, "message": "Login realizado com sucesso", user});
        }else{
            return res.json({"success": false, "message": "Login NÃO realizado com sucesso", user});
        }

    },

    async servicesTypeMock(req, res){
        return res.json({ "success": true, "dados": ["Tipo de serviço 1", "Tipo de serviço 2","Tipo de serviço 3"]});
    }
};
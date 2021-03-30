const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {

    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!');
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) {
            return res.status(400).send('Usuário não encontrado!');
        }

        // os hashs são doferentes. Tem que usar essa função para comparar
        // e não uma função de igualdade
        const isMatch = bcrypt.compareSync(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).send('Email/Senha inválidos!')
        }

        // pegar a data atual date.now() retorna os milisegundos desde 1/1/1970. Dividindo por mil, vc pega o segundo atual
        // isso para vc dizer quanto tempo será válido o token
        const now = Math.floor(Date.now() / 1000)


        //iat = issued at
        // expiração... vc calcula o quanto de tempo o usúário permanece logado, mesmo que feche o browser (deixei um dia neste caso)
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }


    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                //validando se ainda está válido
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token - pode ser pq o authsecret que vazou... 
            //mesmo vc mudando o authsecret, vai cair aqui se alguém usar o antigo
        }

        res.send(false)
    }

    
    return { signin, validateToken }

}
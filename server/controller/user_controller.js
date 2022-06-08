import path from "path"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const user_controller = 

{
    home(req, res) {
        res.status(200).sendFile(path.join(path.resolve(), "server/view/home/home.html"))
    },
    home_post(req, res) {
        console.log(req.body)
        return res.status(200).json({message: "ok"})
    },
    async create(req, res) {

        try {
            const { email } = req.body
            let user = await prisma.user.findUnique({ where: { email } })
            if (user) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Usuário já existe')
                return res.status(403).json({ error: "Usuário já existe" })
            }
            console.log(req.body)
            user = await prisma.user.create({ data: { ...req.body } })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', req.body)
            return res.status(200).json(user)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }

    },
    async carrinho_get(req, res) {

        try {
            let { cpf_cnpj } = req.params;
            let comprador = await prisma.comprador.findUnique({ where: { cpf_cnpj } })
            if (!comprador) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Comprador inexistente')
                return res.status(404).json({ error: 'Comprador inexistente' })
            }
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', comprador)
            return res.status(200).json(comprador)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }

    },
    async carrinho_update(req, res) {
        try {
            const { cpf_cnpj } = req.params;
            delete req.body.cpf_cnpj            
            let comprador = await prisma.comprador.findUnique({ where: { cpf_cnpj } })
            if (!comprador) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Comprador inexistente')                
                return res.status(404).json({ error: 'Comprador inexistente' })
            }
            console.log("teste: ", comprador)
            comprador = await prisma.comprador.update({
                where: { cpf_cnpj },
                data: { ...req.body }
            })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', cpf_cnpj, comprador)
            return res.status(200).json(comprador)
        } catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }
    },
}

export { user_controller }
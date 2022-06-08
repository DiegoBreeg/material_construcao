import path from "path"
import { PrismaClient } from "@prisma/client";
import { create } from "domain";
const prisma = new PrismaClient()

const pedidos_controller =

{
    async create(req, res) {
        try {
            const { order_id } = req.body
            let Purchase_Order = await prisma.PrismaClient.findUnique({ where: { order_id } })
            if (Purchase_Order) {
                console.log('[servidor]', req.method, 'em', req.originalUrl)
                console.log('[servidor]', cpf_cnpj, 'Usuário_Order já existe')
                return res.status(403).json({ error: "Purchase_Order já existe" })
            }
            
            Purchase_Order = await prisma.Purchase_Order.create({ data: { ...req.body } })
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', req.body)
            return res.status(200).json(Purchase_Order)
        }

        catch (error) {
            console.log('[servidor]', req.method, 'em', req.originalUrl)
            console.log('[servidor]', error)
            return res.status(403).json({ error: "erro inesperado, tente novamente" })
        }
    }




}


export { pedidos_controller }
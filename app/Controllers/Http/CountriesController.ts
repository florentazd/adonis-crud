import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
export default class CountriesController {
    public async index(ctx: HttpContextContract) {
        // GET /countrieinattendus
        // Cette fonction permet de retourner tous les pays contenus dans la base de données
        return 'GEt all countries'
    }

    public async show(ctx: HttpContextContract) {
        // /GET /countries/:id
        // Fonction retourne un pays si il est trouvé dans la bd
        return 'A country found'
    }

    public async store(ctx: HttpContextContract) {
        // POST /countries
        // Fonction ajout nouveau pays dans la base de données

        const body = ctx.request.body() //TODO: validation des données
        //On récupère le contenue de la requêtes
        ctx.response.status(201)
        return await Database.table('countries').insert(body)
    }

    public async update(ctx: HttpContextContract) {
        // PUT /countries/:id
        // FOnction modifie un pays existant dans la base de données si il est trouvé.
        ctx.response.status(204)
        return 'New content modify'
    }

    public async destroy(ctx: HttpContextContract) {
        // DELETE /countries/:id
        // FOnction permet de supprimer un pays existant par son ID
    }
}

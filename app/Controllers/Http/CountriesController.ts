import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Country from 'App/Models/Country'
export default class CountriesController {
    public async index() {
        // GET /countrieinattendus
        // Cette fonction permet de retourner tous les pays contenus dans la base de données
        return await Country.all()
    }

    public async show(ctx: HttpContextContract) {
        // /GET /countries/:id
        // Fonction retourne un pays si il est trouvé dans la bd

        const id = ctx.request.param('id')
        // Récupération de l'id du pays rechercher

        return await Country.findOrFail(id)
    }

    public async store(ctx: HttpContextContract) {
        // POST /countries
        // Fonction ajout nouveau pays dans la base de données

        const body = ctx.request.body() //TODO: validation des données
        //On récupère le contenue de la requêtes

        const country = new Country()
        // On crée une occurence du model

        ctx.response.status(201)
        // Ajout du statut de la requête de création
        // 201 car aucune validation sur les données recues.

        return await country.fill(body).save()
        // On renvoie la liste de tous les pays de la base de données.
    }

    public async update(ctx: HttpContextContract) {
        // PUT /countries/:id
        // FOnction modifie un pays existant dans la base de données si il est trouvé.
        const body = ctx.request.body()
        // On récupère les données envoyé pour modification

        const id = ctx.request.param('id')
        // On récupère l'id de la ligne à modifier

        const country = await Country.findOrFail(id)
        // On recherche la ligne de données à modifier

        ctx.response.status(204)
        // On set le statut de retour

        return country.merge(body)
    }

    public async destroy(ctx: HttpContextContract) {
        // DELETE /countries/:id
        // FOnction permet de supprimer un pays existant par son ID

        const countryId = ctx.request.param('id')
        // A ce niveau, on récupère l'id de la ligne à supprimer

        const country = await Country.findOrFail(countryId)
        // ctx.response.status(204)
    }
}

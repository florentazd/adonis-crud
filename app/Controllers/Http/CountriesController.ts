import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CountriesController {
    public async function index(ctx: HttpContextContract) {
        // GET /countries
        // Cette fonction permet de retourner tous les pays contenus dans la base de données
        return "GEt all countries"
    }

    public async function show(ctx: HttpContextContract) {
        // /GET /countries/:id
        // Fonction retourne un pays si il est trouvé dans la bd

    }

    public async function store(ctx: HttpContextContract) {
        // POST /countries 
        // Fonction ajout nouveau pays dans la base de données
    }

    public async function update(ctx: HttpContextContract) {
        // PUT /countries/:id
        // FOnction modifie un pays existant dans la base de données si il est trouvé.

    }

    public async function destroy(ctx: HttpContextContract) {
        // DELETE /countries/:id
        // FOnction permet de supprimer un pays existant par son ID
    }
}

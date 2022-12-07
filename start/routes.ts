import Route from '@ioc:Adonis/Core/Route'

Route.resource("/countries", "CountriesController").apiOnly()

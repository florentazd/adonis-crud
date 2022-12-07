/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // --
  @column()
  public name: string

  @column()
  public capital: string

  @column()
  public population: number

  @column()
  public indicatif: string

  @column()
  public domain: string
  // --

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

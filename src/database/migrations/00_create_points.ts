import Knex from 'knex';

export async function up(knex: Knex){
    knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.decimal('city').notNullable();
        table.decimal('uf', 2).notNullable();

    });
}

export async function down(knex: Knex) {
  return  knex.schema.dropTable('point');
}
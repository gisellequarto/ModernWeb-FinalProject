
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

// sempre faz o oposto do up. Se o up for deletar,aqui no down vc vai recriar a tabela
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};

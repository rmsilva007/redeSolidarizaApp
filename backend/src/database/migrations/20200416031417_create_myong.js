
exports.up = function(knex) {//método up diz o que eu quero que seja feito
  
  return knex.schema.createTable('myong', function (table) {

    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();//segundo parametro especifica o tamanho da string
    
    });
};

exports.down = function(knex) {// método down diz o que dve ser desfeito 
    return knex.schema.dropTable('myong');
  
};

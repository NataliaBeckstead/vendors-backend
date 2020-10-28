
exports.up = function(knex) {
  return (
      knex.schema
        .createTable("users", (tbl) => {
            tbl.increments();
            tbl.text("username", 128).unique().notNullable().index();
            tbl.text("email").notNullable();
            tbl.text("password").notNullable();
            tbl.text("broker").notNullable().index();
            tbl.integer("phone").notNullable();
            tbl.text("role").defaultTo("vendor").notNullable();
        })
        .createTable("items", (tbl) => {
          tbl.increments();
          tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
          tbl.text("item_placement_month").notNullable().index();
          tbl.text("form_due").notNullable().index();
          tbl.text("presentation_date").notNullable().index();
          tbl.text("distributor").notNullable().index();
          tbl.boolean("active").notNullable().index();
          tbl.integer("code").notNullable();
          tbl.integer("upc").notNullable();
          tbl.text("brand").notNullable().index();
          tbl.text("description").notNullable();
          tbl.decimal("packSize").notNullable();
          tbl.decimal("unitSize").notNullable();
          tbl.text("uom").notNullable();
          tbl.decimal("height").notNullable();
          tbl.decimal("width").notNullable();
          tbl.decimal("depth").notNullable();
          tbl.decimal("rank").notNullable();
          tbl.decimal("caseCost").notNullable();
          tbl.decimal("unitCost").notNullable();
          tbl.text("department").notNullable().index();
          tbl.datetime("submission_time").defaultTo(knex.fn.now()).notNullable().index();
        })
        .createTable("promotions", (tbl) => {
          tbl.increments();
          tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
          tbl.text("promoPeriod").notNullable().index();
          tbl.text("adFeature").notNullable().index();
          tbl.text("displayProgram").notNullable().index();
          tbl.integer("unfi").notNullable();
          tbl.integer("upc").notNullable();
          tbl.text("brand").notNullable().index();
          tbl.text("description").notNullable();
          tbl.text("pack").notNullable();
          tbl.decimal("size").notNullable();
          tbl.text("uom").notNullable();
          tbl.decimal("oiDiscount").notNullable();
          tbl.decimal("mcbDiscount").notNullable();
          tbl.decimal("totalDiscount").notNullable();
          tbl.decimal("unitScan").notNullable();
          tbl.decimal("retailPrice").notNullable();
          tbl.datetime("submission_time").defaultTo(knex.fn.now()).notNullable().index();
        })
  )
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("promotions")
    .dropTableIfExists("items")
    .dropTableIfExists("users");
};

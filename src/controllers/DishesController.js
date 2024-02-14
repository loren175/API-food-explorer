const knex = require("../database/knex")

class DishesController {
  async create(request, response) {
    const { name, description, category, price, ingredients } = request.body
    const user_id = request.user.id

    const [dish_id] = await knex("dishes").insert({
      name,
      description,
      category,
      price,
      image: null,
      created_by: user_id,
      updated_by: user_id,
    })
    const ingredientsInsert = ingredients.map((name) => {
      return {
        dish_id,
        name,
        created_by: user_id,
      }
    })

    await knex("ingredients").insert(ingredientsInsert)

    response.json()
  }

  async show(request, response) {
    const { id } = request.params
    const dish = await knex("dishes").where({ id }).first()
    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name")

    return response.json({ ...dish, ingredients })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex("dishes").where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { search } = request.query

    let dishes

    if (search) {
      const keywords = search.split(" ").map((keyword) => `%${keyword}%`)

      dishes = await knex("dishes")
        .select([
          "dishes.id",
          "dishes.name",
          "dishes.description",
          "dishes.category",
          "dishes.image",
          "dishes.price",
        ])
        .leftJoin("ingredients", "dishes.id", "ingredients.dish_id")
        .where((builder) => {
          builder.where((builder2) => {
            keywords.forEach((keyword) => {
              builder2.orWhere("dishes.name", "like", keyword)
              builder2.orWhere("dishes.description", "like", keyword)
            })
          })
          keywords.forEach((keyword) => {
            builder.orWhere("ingredients.name", "like", keyword)
          })
        })
        .groupBy("dishes.id")
        .orderBy("dishes.name")
    } else {
      dishes = await knex("dishes")
        .select([
          "dishes.id",
          "dishes.name",
          "dishes.description",
          "dishes.category",
          "dishes.price",
          "dishes.image",
        ])
        .orderBy("dishes.name")
    }

    const dishesIngredients = await knex("ingredients")
    const dishesWithIngredients = dishes.map((dish) => {
      const dishIngredients = dishesIngredients.filter(
        (ingredient) => ingredient.dish_id === dish.id
      )

      return {
        ...dish,
        ingredients: dishIngredients,
      }
    })

    return response.json(dishesWithIngredients)
  }
}

module.exports = DishesController

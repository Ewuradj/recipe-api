import { RecipeModel } from "../routes/models/recipe.js";

export const addRecipe = async (req, res, next) => {


    try {
       
        // add recipe to the database
        const createResult = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        })
        //return recipe
        res.status(201).json(createResult);
    } catch (error) {
        next(error);

    }
}


export const getRecipes = async (req, res,next) => {
    try {
        // getall recipes from database
        const findResult = await RecipeModel.find();
        // return response
        res.status(200).json(findResult);
    } catch (error) {
        next(error)

    }
}

export const getSingleRecipe = async (req, res, next) => {
    try {
        //    get single recipe by id
        const findByIdResult = await RecipeModel.findById(req.params.id)
        // return 404 if no recipe is found
        if (findByIdResult===null){
            res.status(404).json({
                message: `Recipe with id: ${req.params.id} not found!`
            })
        }else{
            // return results
        res.status(200).json(findByIdResult)
        }
        
    } catch (error) {

        next(error)
    }
}


export const updateRecipe = (req, res) => {
    res.send(`update recipe with id: ${req.params.id}`);
}

export const deleteRecipe = (req, res) => {
    res.send(`delete recipe by id:${req.params.id}`);
}
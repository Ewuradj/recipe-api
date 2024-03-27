import { Router } from "express";
import { addRecipe,  deleteRecipe,  getRecipes, getSingleRecipe, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";

// creaate multer upload middleware
const uploadImage=multer({dest:'uploads/images'});





// create recipes router
const router=Router();


// Define routes
router.post('/recipes', uploadImage.single("image"), addRecipe);
router.get('/recipes', getRecipes)
router.get('/recipes/:id', getSingleRecipe)

router.patch('/recipes', updateRecipe)
router.delete('/recipes', deleteRecipe);



// export router
export default router;



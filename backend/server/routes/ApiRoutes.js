const router=require("express").Router()
const CategoryController=require("../apis/category/CategoryController")
const UserController=require("../apis/users/UserController")
const ProductController=require("../apis/product/ProductController");

//category
router.post("/category/add",CategoryController.Add)
router.post("/category/all",CategoryController.All)
router.post("/category/GetSingle",CategoryController.GetSingle)
router.post("/category/DeleteCategory",CategoryController.DeleteCategory)
router.post("/category/StatusChange",CategoryController.StatusChange)
router.post("/category/UpdateCategory",CategoryController.UpdateCategory)

//users
router.post("/users/add",UserController.Add)
router.post("/users/all",UserController.All)
router.post("/users/GetSingle",UserController.GetSingle)
router.post("/users/DeleteUser",UserController.DeleteUser)
router.post("/users/StatusChange",UserController.StatusChange)
router.post("/users/UpdateUser",UserController.UpdateUser)


//product
router.post("/product/add",ProductController.Add)
router.post("/product/all",ProductController.All)
router.post("/product/GetSingle",ProductController.GetSingle)
router.post("/product/DeleteProduct",ProductController.DeleteProduct)
router.post("/product/StatusChange",ProductController.StatusChange)
router.post("/product/UpdateProduct",ProductController.UpdateProduct)


module.exports=router
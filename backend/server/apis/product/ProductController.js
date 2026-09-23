const ProductModel = require("./ProductModel");

const Add = async (req, res) => {

    // console.log(req.body);

    let errMsg = []

    if (!req.body.name) {
        errMsg.push("name is required")
    }

    if (!req.body.description) {
        errMsg.push("description is required")
    }

    if (errMsg.length > 0) {
        res.send({
            message: errMsg,
            success: false,
            status: 400
        })
    } else {

        let ExistData = await ProductModel.findOne({ name: req.body.name })

        // console.log(ExistData);

        if (ExistData != null) {
            return res.status(409).json({
                message: "Data Already Exist",
                success: false,
                status: 409
            })
        }


        let obj = new ProductModel()
        obj.name = req.body.name
        obj.description = req.body.description

        obj.save().then((data) => {
            res.status(200).json({
                message: "Data addded",
                success: true,
                data

            })
        }).catch((err) => {
            res.status(500).json({
                message: "Internal server error",
                success: false

            })
        })
    }


    // res.send("Api Hit")
}


const All = async (req, res) => {

    let formData=req.body || {}
    try {
        let Data = await ProductModel.find(formData)

        if (Data != null) {
            res.status(200).json({
                message: "Data Loaded",
                total: Data.length,
                success: true,
                Data: Data

            })
        } else {
            res.status(404).json({
                message: "Product Not Fount",
                success: false

            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false

        })
    }
}

const GetSingle = async (req, res) => {

    try {
        let _id = req.body._id

        let Data = await ProductModel.findOne({ _id: _id })

        if (Data != null) {
            res.status(200).json({
                message: "Product Found",
                success: true,
                data: Data
            })
        } else {
            res.status(404).json({
                message: "Product not Found",
                success: false
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}

const DeleteProduct = async (req, res) => {

    try {
        let _id = req.body._id

        let Data = await ProductModel.findOne({ _id: _id })

        if (Data != null) {

            ProductModel.deleteOne({ _id: _id }).then((deleteData) => {
                res.status(200).json({
                    message: "Product Delete",
                    success: true,
                    data: deleteData
                })
            }).catch((err) => {
                res.status(402).json({
                    message: "Product not Delete",
                    success: false
                })
            })
        } else {
            res.status(404).json({
                message: "Product not Found",
                success: false
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}

const StatusChange = async (req, res) => {

    try {
        let _id = req.body._id

        let Data = await ProductModel.findOne({ _id: _id })

        if (Data != null) {

            Data.status = !Data.status

            Data.save().then((UpdatedData) => {
                res.status(200).json({
                    message: "Product Updated",
                    success: true,
                    data: UpdatedData
                })
            }).catch((err) => {
                res.status(200).json({
                    message: "status Changed",
                    success: true,
                    data: err
                })
            })



        } else {
            res.status(404).json({
                message: "Product not Found",
                success: false
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}

const UpdateProduct = async (req, res) => {

    try {
        let _id = req.body._id

        let Data = await ProductModel.findOne({ _id: _id })

        if (Data != null) {

            if(req.body.name){
                Data.name=req.body.name
            }

            if(req.body.description){
                Data.description=req.body.description
            }

            if(req.body.image){
                Data.image=req.body.image
            }

            Data.save().then((UpdatedData) => {
                res.status(200).json({
                    message: "Product Updated",
                    success: true,
                    data: UpdatedData
                })
            }).catch((err) => {
                res.status(200).json({
                    message: "status Changed",
                    success: true,
                    data: err
                })
            })



        } else {
            res.status(404).json({
                message: "Product not Found",
                success: false
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server Error",
            success: false
        })
    }
}



module.exports = { Add, All, GetSingle, DeleteProducts, StatusChange, UpdadateProduct}
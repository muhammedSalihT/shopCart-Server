const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./router/auth");
const mainCategory = require("./router/main_category");
const productRouter = require("./router/product");
const subCategorieRouter = require("./router/sub_categorie");
const DB = "mongodb+srv://shopcart:shopcart123@cluster0.7lah6pd.mongodb.net/?retryWrites=true&w=majority";
const app = express();

const port = 4000;
app.listen(port,"0.0.0.0",function(){
});

app.use(express.json());
app.use(authRouter);
app.use(mainCategory);
app.use(productRouter);
app.use(subCategorieRouter);


mongoose.connect(DB).then(()=>{
    console.log("Database connecting Success");

}).catch((e)=>{
    console.log(e);
})





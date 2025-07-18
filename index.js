const { render } = require("ejs");
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const port = 4000;

const Said = require("./modeles/Ahmed.js");

const Article = require("./modeles/Article.js"); // import Artical from modeles folder

mongoose.connect("mongodb+srv://mohamedaayk:adHMEjR00HnRo5wd@newcluster.vzirl7y.mongodb.net/?retryWrites=true&w=majority&appName=NewCluster")
.then(()=>{
    console.log('Connected Successfully')
}).catch(()=>{
    console.log('Error with database connection')
});


app.use(express.json());


app.use(express.urlencoded({extended: true})); // هذا الكود خاص باستلام البيانات من نوع POST


app.get('/pathparams/:num1/:num2', (req, res)=>{
    console.log(req.params.num2)
    let cc = req.params.num1
    let vv = req.params.num2
    let total = Number(cc)+Number(vv)
    res.send(`${total}`)
})

app.post("/activate", (req, res) => {
    console.log(req.body)
    res.redirect(`/bodyparams?username=${req.body["username"]}`)
});

app.get('/bodyparams', (req, res)=>{
    // res.sendFile(__dirname + "/views/index.html");
    res.render("index1.ejs"
        // ,{
        //     username: req.query["username"],
        //     password: req.query["password"]
        // }
    );
})




app.get('/path&body&query/:num1/:num2', (req, res)=>{
    console.log(req.params.num2)
    // console.log(req.body)
    console.log(req.query)
    // let dd = req.body.name
    let ff = req.query.age
    let cc = req.params.num1
    let vv = req.params.num2
    let total = (cc)+(vv)
    res.send(`<h1>the result is:  ${total}   ${ff}  </h1>`)
})


app.get('/sendjson/:products', (req, res)=>{
    console.log(req.params.products)
    let tt = req.params.products
    res.send({
        nome: tt
    })
})

app.get('/path&query&sendjson', (req, res)=>{
    console.log(req.params.num2)
    console.log(req.query)
    let ff = req.query
    let cc = req.params.num1
    let vv = req.params.num2
    res.send(ff)
})

app.get('/', (req, res)=>{
    console.log(req.query)
    res.render("form.ejs")
})
//******** create articale collection */
app.post("/article" , async (req , res)=>{
    const newartical = new Article({
        title1: req.body.titleeee,
        body1: req.body.boody,
        numberoflike1: 213 
    });
    console.log(req.body)
    // const ccc = req.body.name2
    // newartical.title = ccc;
    // newartical.body = "newbody";
    // newartical.numberoflike = 100;
    await newartical.save()
    res.render("Cruds.ejs")
})

// ******* to read article ********

app.get("/allarticlesindatabase" , async (req,res)=>{
    const articles = await Article.find() // فانكشن فايند تستدعي كل المقالات
    // articles.map((article) => {
    //     const articleid = article.id
    //     const articletitle = article.title
    //     const articlebody = article.body
    //     const articlenolikes = article.numberoflike
    //     allarticles.innerHTML += `
    //     <div class="article">
    //         <input type="hidden" value="${articleid}">
    //         <h1>${articletitle}</h1>
    //     </div>
    //     `
    // })
    console.log(articles)
    // res.json(articles)
    res.render("articles.ejs", {name:articles})
})


app.get("/readoneartical/:articleId" , async (req,res)=>{
    const id = req.params.articleId;
    try{
        const article = await Article.findById(id) // 
        console.log(article)
        res.json(article)
        return
    }catch(error){
        console.log("error while reading", id)
        return res.send("error")
    }
})

app.delete("/deleteoneartical/:articleId" , async (req,res)=>{
    const id = req.params.articleId;
    try{
        const article = await Article.findByIdAndDelete(id) // 
        console.log(article)
        res.json(article)
        return
    }catch(error){
        console.log("error while reading", id)
        return res.send("error")
    }
})


app.get("/editoneartical" , async (req,res)=>{
    const id = req.body.title;

    try{
        const title1 = {title: "lkjh"};
        const article = await Article.findById(id);
        let articleafter = {...article, ...title1 };
    
        console.log(articleafter);
        res.json(articleafter);
        // articleafter.save();
        return
    }catch(error){
        console.log("error while reading", id)
        return res.send("error")
    }
})


app.listen(port, ()=>{
    console.log("I am listing on port 3000")
});
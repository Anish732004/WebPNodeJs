let express = require("express")
let path = require ("path")

let app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.render('LandingPage')
})
app.get("/MacBook.html", (req, res)=>{
    res.render('MacBook')
})
app.get("/iPad.html", (req, res)=>{
    res.render('iPad')
});
app.get("/iPhone14.html", (req, res)=>{
    res.render('iPhone14')
});
app.get("/iPhone13.html", (req, res)=>{
    res.render('iPhone13')
});
app.get("/iPhone12.html", (req, res)=>{
    res.render('iPhone12')
});
app.get("/AirPods.html", (req, res)=>{
    res.render('AirPods')
});
app.get("/*", (req,res)=>{
    res.render('error')
})
app.listen("3000", ()=>{
    console.log("Server is running on localhost3000")
    console.log(__dirname)
})

let connectdb = require("./connection/connectdb.js")
connectdb()

// let saveDoc = require("./model/model.js")
// saveDoc()

// let saveMultipleDoc = require("./model/model.js")
// saveMultipleDoc()

// let readData = require("./model/model.js")
// readData()

// let updateData = require("./model/model.js")
// updateData(1)

// let deleteData = require("./model/model.js")
// deleteData(1)

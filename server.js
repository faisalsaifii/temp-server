const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.post('/api/answer', (req, res) => {
    console.log("Product" + req.body.product)
    console.log("Question" + req.body.question)
    const product = req.body.product;
    const question = req.body.question;
    const hasContext = product ? true : false
    const answer = "Answer"
    console.log(hasContext)
    if (hasContext) {
        res.json({
            "context": hasContext,
            "question": question,
            "answer": answer,
            "product": product
        })
    } else {
        res.json({
            "context": hasContext,
            "question": question,
            "product": product
        })
    }
})

app.listen(3000)
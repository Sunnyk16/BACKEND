import express from "express";

const app = express();
app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

app.get(`/samosa`, (req, res) => {
  res.json({
    age: 15,
    name: "sunny",
  });
});
app.get(`/location`, (req, res) => {
  const city = req.query.city;
  const name = req.query.name;

  res.json({
    message: `your name ${name} ${city}`,
  });
});

app.get(`/jalebi`, (req, res) => {
  res.send("here is your plate");
});
app.get(`/food`,(req,res)=>{
  res.json("hi")
})

app.get(`/meet/:type`,(req,res)=>{
    console.log(req.params);
    const {type} =req.params;
    if(type=="abcd"){
        return res.json({
            message:"your meet link is abcd"
        })
        

    }
    else{
        return res.json({
            message:"your meet link is efgh"
        })
    }
    res.json({
        "message":"you ordered"
    })
})


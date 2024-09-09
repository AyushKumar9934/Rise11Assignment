const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const Users=require('./mongo')
mongoose

  .connect(
    `mongodb+srv://ayush848209:5jvCB22xMRzSv8sI@cluster0.zzkaiub.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((res) => console.log("we are connected to mongoose"))
  .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get('/login',cors(),(req,res)=>{

})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const check=await Users.findOne({email});
        if(check){
            res.json('exist')
        }
        else{
            res.json('notexist')
        }
    }
    catch(err){
        res.json('Login issue issue due to server error ')
        console.log(err);
    }
})





app.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;

    try{
        const check=await Users.findOne({email});
        if(check){
            res.json('exist')
        }
        else{
            const newUser=new Users({name,email,password})
            newUser.save().then(response=>{
                res.json('notexist')

                
            }).catch(err=>res.json('user cant be signed up due to Md server issue',err))
           
        }
    }
    catch(err){
        res.json('sign up issue due to server error ')
        console.log(err);
    }
})


app.listen('3000',()=>{
    console.log('we are listing to port 3000')
})
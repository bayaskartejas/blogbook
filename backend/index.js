const express = require("express")
const {User, inputSchema, secretKey, Post} = require("./db")
const  {authMiddleware}  = require("./authMiddleware")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require("cors")
const zod = require("zod")
const otpGenerator = require("otp-generator")
const nodemailer = require("nodemailer")

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

let newUser;

app.post("/otp", async (req,res)=>{
    let existCheck1 = await User.exists({
        username: req.body.username
    })
    let existCheck2 = await User.exists({
        email: req.body.email
    })

    if(existCheck1 == null && existCheck2 == null){
        if(inputSchema.safeParse(req.body).success){
            if(req.body.day != "Day" && req.body.month != "Month" && req.body.year != "Year"){
                newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    day: req.body.day,
                    month: req.body.month,
                    year: req.body.year,
                    gender: req.body.gender,  
                    posts: [],
                    savedPosts: [],
                    pfp: ""
                })

                const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false});
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'blogbookorg@gmail.com',
                        pass: 'fnfbokmdxulxpoza'
                    }
                });
                const mailOptions = {
                    from: 'blogbookorg@gmail.com',
                    to: req.body.email,
                    subject: 'OTP Verification',
                    text: `Hello, this is Tejas from Blogbook ©, your OTP for verification is: ${otp}`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Error sending email:', error);
                    } else {
                        console.log('Email sent:', info.response);
                    }
                });
                res.status(200).json({
                    otp: otp
                })
            }else{
                res.status(404).json({
                    msg:"Choose proper Date of Birth"
                })
            }
            

        }else{
            res.status(404).json({
                msg: "input error",
                data: inputSchema.safeParse(req.body)
            })
        }

    }else{
        res.status(404).json({msg: "user already exists:"})
    }
})

app.post("/newuser", async(req,res)=>{
    let data = await newUser.save()
    res.status(200).json({data})
})

app.post("/signin", async(req,res)=>{   
    let exist;
    if(zod.string().email().safeParse(req.body.id).success){
        exist = await User.exists({
            email: req.body.id,
            password: req.body.password
        })
    }
    else{
        exist = await User.exists({
            username: req.body.id,
            password: req.body.password
        })
    }
    if(exist != null){
        let token = jwt.sign({id: req.body.id}, secretKey)
        res.status(200).json({token})
    }
    else{
        res.status(404).json({
            msg: "user does not exist"
        })
    }
})

app.get("/posts", authMiddleware, async (req, res)=>{
    let exist;
    const token = req.headers.authorization
    let decoded = jwt.decode(token)
    let email = false
    let username = false
    if(zod.string().email().safeParse(decoded.id).success){
        exist = await User.exists({
            email: req.body.id,
            password: req.body.password
        })
        email=true
    }
    else{
        exist = await User.exists({
            username: req.body.id,
            password: req.body.password
        })
        username=true
    }


    if(email){   
        const TheUser = await User.find({email: decoded.id})
        let data = TheUser[0].posts
        let posts =[]
        for(let i=0; i<data.length; i++){
            let file = await Post.find({_id: data[i]})
            posts.push(file)
        }
        res.status(200).json(posts)
    }
    else if(username){   
        const TheUser = await User.find({username: decoded.id})
        let data = TheUser[0].posts
        let posts =[]
        for(let i=0; i<data.length; i++){
            let file = await Post.find({_id: data[i]})
            posts.push(file)
        }
        res.status(200).json(posts)
    }
})

app.get("/allposts", authMiddleware, async (req, res)=>{
    let posts=[]
    let file = await Post.find({})
    posts.push(file)
    res.status(200).json(posts)
})

app.post("/post", authMiddleware, async (req,res)=>{
    let exist;
    const token = req.headers.authorization
    let decoded = jwt.decode(token)
    let email = false
    let username = false
    if(zod.string().email().safeParse(decoded.id).success){
        exist = await User.exists({
            email: req.body.id,
            password: req.body.password
        })
        email=true
    }
    else{
        exist = await User.exists({
            username: req.body.id,
            password: req.body.password
        })
        username=true
    }

    let blog = req.body.blog
    let text = blog.split("")

    if(text.length === 0){
        res.status(404).json({
            msg: "Post cannot be empty"
        })
        return
    }


    if(email){   
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
        const formattedTime = `${hours}:${minutes}`;
        let user = await User.find({email: decoded.id})
        const time = formattedDate + " | " + formattedTime
        let blog = new Post({
            blog: req.body.blog,
            name: user[0].username,
            likes: [],
            comments: [],
            time: time
        })
        blog.save().then((data)=>{
            res.status(200).json({
                data
            })
        })
    }
    else if(username){  
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
        const formattedTime = `${hours}:${minutes}`;
        let user = await User.find({username: decoded.id}) 
        const time = formattedDate + " | " + formattedTime
        let blog = new Post({
            blog: req.body.blog,
            name: user[0].username,
            likes: [],
            comments: [],
            time: time
        })
        blog.save().then((data)=>{
            res.status(200).json({
                data
            })
        })
    }
})

app.get("/isSaved", authMiddleware, async (req,res)=>{
    const token = req.headers.authorization
    let decoded = jwt.decode(token)

    if(zod.string().email().safeParse(decoded.id).success){
        let user = await User.find({email: decoded.id})
        res.status(200).json(user)
    }
    else{
        let user = await User.find({username: decoded.id})
        res.status(200).json(user)
    }
})

app.post("/savePost", authMiddleware, async (req, res)=>{
    const token = req.headers.authorization
    let decoded = jwt.decode(token)
    let email = false
    let username = false
    let id = req.body.id
    
    if(zod.string().email().safeParse(decoded.id).success){
        email=true
    }
    else{
        username=true
    }

    if(email){   
        let response = await User.updateOne(
            {"email": decoded.id},
            {$push: {savedPosts: id}}
        )
        res.status(200).json({response})

    }
    else if(username){  
        let response = await User.updateOne(
            {"username": decoded.id},
            {$push: {savedPosts: id}}
        )
        res.status(200).json({response})
    }
})

app.post("/unsavePost", authMiddleware, async (req, res)=>{
    const token = req.headers.authorization
    let decoded = jwt.decode(token)
    let email = false
    let username = false
    let id = req.body.id
    
    if(zod.string().email().safeParse(decoded.id).success){
        email=true
    }
    else{
        username=true
    }

    if(email){   
        let data = await User.findOneAndUpdate({"email": decoded.id}, {$pull: {savedPosts: req.body.id}})
        res.status(200).json(req.body.id);
    }

    else if(username){  
        let data = await User.findOneAndUpdate({"username": decoded.id}, {$pull: {savedPosts: req.body.id}})
        res.status(200).json(req.body.id);
    }
})

app.listen("3000")
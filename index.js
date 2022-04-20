const express = require('express');
const cors= require('cors')
const app= express();
const port= process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello From Smarty smarty Pand!!')
});

const users=[
    {id:1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888'},
    {id:2, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '0178888888'},
    {id:3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888'},
    {id:4, name: 'Saban', email: 'Saban@gmail.com', phone: '0178888888'},
    {id:5, name: 'Lobon', email: 'Lobon@gmail.com', phone: '0178888888'},
    {id:6, name: 'Pobon', email: 'Pobon@gmail.com', phone: '0178888888'},
    {id:7, name: 'Tobon', email: 'Tobon@gmail.com', phone: '0178888888'},
]

// app.get('/users', (req, res)=>{
//     res.send(users);
// })

// filer by serach queery parameter

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search= req.query.name.toLowerCase();
        const matched= users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched)
    }else{
        res.send(users)
    }
    
});

app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id= parseInt(req.params.id);
    const user= users.find(u=>u.id==id)
    res.send(user)

})

app.get('/fruits', (req, res)=>{
   res.send(['mango', 'apple', 'oranges']) 
})

app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('sour sour fazli flavour')
})

app.post('/user', (req,res)=>{
    console.log('reques', req.body);
    const user= req.body;
    user.id= users.length+1;
    users.push(user)
    res.send(user)
})

app.listen(port, ()=>{
    console.log('listening to port',port);
})
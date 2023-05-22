const mongoose = require("mongoose")
const express = require("express")

const Dato=mongoose.model("Dato", new mongoose.Schema({
    tipo:String,
    estado:String,
  }))
  
  const app= express()
  mongoose.connect('mongodb://nicolas:<secret>@monguitodb:27017/miapp?authSource=admin')
  
  app.get('/',async(_req,res)=> {
    console.log('listando...')
    const Datos = await Dato.find();
    return res.send(Datos)
  })
  
  app.get('/crear',async(_req,res)=> {
    console.log('creando...')
    await Dato.create({
      tipo:"Producto",
      estado:"vendido"
    });
    return res.send("ok")
  })
  
  app.listen(3000,()=>console.log('listening...'))

import mongoose from 'mongoose'
import express from 'express'

const Datos=mongoose.model("Datos", new mongoose.Schema({
    tipo:String,
    estado:String,
  }))
  
  const app= express()
  mongoose.connect('mongodb://nico:secret@192.168.1.19:27017/miapp?authSource=admin')
  
  app.get('/',async(_req,res)=> {
    console.log('listando...')
    const Datos = await Datos.find();
    return res.send(Datos)
  })
  
  app.get('/crear',async(_req,res)=> {
    console.log('creando...')
    await Datos.create({
      tipo:"Producto",
      estado:"vendido"
    });
    return res.send("ok")
  })
  
  app.listen(3000,()=>console.log('listening...'))
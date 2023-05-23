import express from 'express'
import mongoose from 'mongoose'

const Dato=mongoose.model("Dato", new mongoose.Schema({
    tipo:String,
    estado:String,
  }))
  
  const app= express()
  mongoose.connect('mongodb://nicolas:secret@monguitodb:27017/miapp?authSource=admin')
  
  app.get('/',async(_req,res)=> {
    console.log('listando...')
    const Datos = await Dato.find();
    return res.send(Datos)
  })
  
  app.get('/crear', async (_req, res) => {
    console.log('creando...')
    await Dato.create({ tipo: 'producto', estado: 'Comprado' })
    return res.send('ok')
  })
 
  app.listen(3000,()=>console.log('listening...'))
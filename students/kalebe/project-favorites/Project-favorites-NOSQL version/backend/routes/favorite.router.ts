import Router,{Request, Response} from 'express'
import {ObjectId } from 'mongodb';
import {collections} from '../services/database.service';
import Favorite from '../models/Favorite';
import express from "express";


const favoritesRouter = Router(); // inicia rotas

favoritesRouter.use(express.json()) // habilitando rotas para receber json


// GET ALL
favoritesRouter.get("/", async (req: Request, res: Response)=>{
    try {
        const favorites = await collections.favorite?.find({}).toArray() // Buscando collections no BD
        res.status(200).send(favorites); // Envia collections
    } catch(error) {

        res.send(500).json({mensage: `${error}`}); // Envia o erro, caso ele ocorra
        
    }
});

// GET BY ID
favoritesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.["id"]; // Pega o id dos parametros da url

    try {
        
        const query = { _id: new ObjectId(id) }; // Monta a query
        const favorite = (await collections.favorite?.findOne(query)); // Pesquisa e salva na const favorite

        if (favorite) { // verifica se ela tem valor
            res.status(200).send(favorite);  // mostra o valor 
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params?.["id"]}`); // nao foi encontrado
    }
});


// INSERT
favoritesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newFavorite = req.body as Favorite; // Pega o corpo do parametro
        const result = await collections.favorite?.insertOne(newFavorite); // tenta inserir 

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`) //Inseriu com sucesso
            : res.status(500).send("Failed to create a new game."); // Não conseguiu inserir
    } catch (error) {
        console.error(error);
        res.status(400).json({mensage: `${error}`});
    }
});

// UPDATE
favoritesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.['id']; // Pega id do parametro

    try {
        const updateFavorite: Favorite = req.body as Favorite; // Pega corpo da requisicao 
        const query = { _id: new ObjectId(id) }; // prepara a query
      
        const result = await collections.favorite?.updateOne(query, { $set: updateFavorite }); // tenta atualizar

        result
            ? res.status(200).send(`Successfully updated game with id ${id}`) // Atualizou com sucesso
            : res.status(304).send(`Game with id: ${id} not updated`); // deu erro
    } catch (error: any) {
        console.error(`${error.message}`);
        res.status(400).send(error.message);
    }
});


// DELETE
favoritesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.["id"]; // pega id da url

    try {
        const query = { _id: new ObjectId(id) }; // prepara query
        const result = await collections.favorite?.deleteOne(query); // tenta deletar

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`); // deletou com sucesso
        } else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`); // nao deletou
        } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`); // nao achou
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

export default favoritesRouter;
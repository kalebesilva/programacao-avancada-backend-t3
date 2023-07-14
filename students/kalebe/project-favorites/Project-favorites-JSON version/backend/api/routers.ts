import deleteOperation from './crud-operations/delete';
import insertOperation from './crud-operations/insert';
import myJsonData from './urls.json';
import Router, { Request, Response } from 'express';
import updateOperation from './crud-operations/update';

const myRouters = Router();

myRouters.get("/", (req: Request, res: Response) => {
  res.send(JSON.stringify(myJsonData));
});

myRouters.delete("/:id", (req: Request, res: Response) => {
  let id = parseInt(req.params['id']);
  const resultStatus = deleteOperation.delete(id);
  if (resultStatus == true)
    res.status(200).send(res.json({mensage: `${id} foi apagada com sucesso`}));
  else res.status(500).send(res.json({mensage: "Erro ao deletar obj"}));
});

myRouters.post("/", (req: Request, res: Response, next) => {

  const {id, name, url} = req.body;
  console.log(id)
  const myReqData = {
    id: id,
    name: name,
    url: url
  }
  console.table(myReqData);
  const resultStatus = insertOperation.insert(myReqData);
  if (resultStatus == true)
    res
      .status(200)
      .send(res.json({mensagem: "Sucess to add new register"}));
  else res.status(500).send(res.json({mensagem: "Error cant add new register"}));
});

myRouters.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params['id']);
  const {name, url} = req.body;
  const myReqData = {
    id: id,
    name: name,
    url: url
  }

  const resultStatus = updateOperation.update(id, myReqData);
  if (resultStatus == true)
    res.status(200).send(res.json({mensage: "Registro atualizado com sucesso"}));
  else
    res
      .status(500)
      .send(res.json({mensage: "Erro interno, não foi possivel adicionar/encontrar o registro"}));
});

export default myRouters;

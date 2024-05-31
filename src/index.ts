import { Elysia, t } from "elysia";
import flugin from "./flugin";
import {reqDTO} from "./model"

const app = new Elysia().get("/", () => "Hello Elysia1")
.use(flugin)
.state({
  ver : 1,
  isSelect : false
})
.decorate("getDate", ()=>Date.now()) //useContext

app.group('/api', app => app

.get('/tracked',({store,getDate})=>{
  console.log(store.ver);
  console.log(getDate());
})

.get('/post/:id',({params:{id}}) =>{
  return{id}
})

.post('/post',({body}) => body ,{
    body:reqDTO,
    response:reqDTO
  }
)

.get('/track/*', ()=>{
  return "track"
})
)

.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

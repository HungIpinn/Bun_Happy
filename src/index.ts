import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia1")
.get('/post/:id',({params:{id}}) =>{
  return{id}
} )
.post('/post',(body)=>{return body})
.get('/track/*', ()=>{
  return "track"
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

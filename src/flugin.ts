import { Elysia } from "elysia";

const flugin = new Elysia()
.state({
    flugVer : 1
})
.get('/flugin',({store})=>{
 const resp:string = `hi I flugggg ver${store.flugVer}`;
 return resp;
})

export default flugin;
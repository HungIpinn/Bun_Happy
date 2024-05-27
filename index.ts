const server = Bun.serve({
    fetch(req: Request): Response | Promise<Response> {
        const url = new URL(req.url);
        if(url.pathname === "/")
        {
            return new Response("Home")
        }
        if(url.pathname ==="/about")
        {
            return new Response("About")
        }
        if(url.pathname ==="/feed")
        {
            throw new Error("Loading failed")
        }
        return new Response(Bun.file('./err.txt')); 
    },
    error(err){
        return new Response(`<pre> ${err} \n ${err.stack} </pre>`,{
            headers:{
                "Content-Type":"text/html"
            }
        })
    },
    // Optional port number - the default value is 3000
    port: process.env.PORT || 3000,
    
  });
  console.log(`Listen on Port ${server.port}`);
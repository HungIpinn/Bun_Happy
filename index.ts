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
        return new Response("404!!!");
    },
  
    // Optional port number - the default value is 3000
    port: process.env.PORT || 3000,
  });

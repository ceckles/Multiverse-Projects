import { Application, Router, RouterContext } from "https://deno.land/x/oak@v8.0.0/mod.ts";
import routes from './routes/Routes.ts'
import DB from './db.ts';

const app = new Application();
const router = new Router();
const port = 8000;

router.get('/', (context: RouterContext) =>{
    //default route check
    context.response.body = { message: 'Hello World'};
});

app.use(router.routes());
app.use(routes.prefix('/api/').routes());
app.use(router.allowedMethods());

//basic auth
// app.addEventListener("fetch", (e) => {
//     const unauthorized = basicAuth(e.request, "Access to my site", {
//       "user": "password",
//     });
//     if (unauthorized) {
//       e.respondWith(unauthorized);
//       return;
//     }
//     e.respondWith(new Response("Your are authorized!"));
//   });

//DB.sync({drop: true}); //clear DB tables
DB.sync(); //Keep DB Data
console.log("💽 DB Connected 💽");

console.log(`🦕 Server up on http://localhost:${port} 🦕`);
await app.listen({ port });
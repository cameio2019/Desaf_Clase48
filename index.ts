import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/index.router.ts'
const app =  new Application()

console.log('Server running on port 8081')

app.use(router.routes())
app.use(router.allowedMethods())
app.listen({port:8081})
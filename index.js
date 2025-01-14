
const jsonServer = require("json-server")
const PMserver = jsonServer.create()

const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

PMserver.use(middleware)
PMserver.use(route)

PMserver.listen(PORT,()=>{
    console.log(`PM server started running at port ${PORT}`);
    
})

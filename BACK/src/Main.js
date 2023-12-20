import server from "./Server/Server.js";
import { config } from "dotenv";
import connect from "./DataBase/Conf.js";

config()
connect()

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));
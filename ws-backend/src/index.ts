import WebSocket, { WebSocketServer } from "ws";
import dotenv from "dotenv";
dotenv.config();
import { JWT_SECRET } from "./config/config";
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({port : 3000});

const connection = new Map<String , WebSocket>();

wss.on("connection", (ws, req)=>{
    const url = req.url;
    if (!url) {
      return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    
    const userId = checkUser(token);
    console.log(userId);
    
  
    if (userId == null) {
      ws.close()
      return null;
    }

    connection.set(userId, ws);

    ws.on("message", (data)=>{
        const parsedData = JSON.parse(data as unknown as string);
        console.log(parsedData);
        

        if(parsedData.type==="chat"){
            const receiverId = parsedData.receiverId;

            if(connection.has(receiverId)){
                const socket = connection.get(receiverId);
                socket?.send(JSON.stringify({
                    message : parsedData.message,
                    senderId : userId,
                    receiverId : receiverId,
                }));
            }
        }
        


    })
});

function checkUser(token: string): string | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
  
      if (typeof decoded == "string") {
        return null;
      }
  
      if (!decoded || !decoded.userId) {
        return null;
      }
  
      return decoded.userId.toString();
    } catch(e) {
      return null;
    }
    return null;
  }
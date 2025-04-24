FROM node:22
WORKDIR /app
COPY . .
RUN npm install express multer cors
CMD ["node", "backend/server.js"]
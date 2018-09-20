FROM node:alpine

WORKDIR /root
COPY package.json /root
COPY package-lock.json /root
RUN npm install
COPY . /root

CMD ["npm", "start"]

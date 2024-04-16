FROM node:10

WORKDIR /opt/app-root/src

EXPOSE 8080

COPY . /opt/app-root/src
RUN npm i
# Run it
CMD ["/bin/bash", "-c", "npm start" ]


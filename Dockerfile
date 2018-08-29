FROM bucharestgold/centos7-s2i-nodejs:10.x

WORKDIR /opt/app-root/src

EXPOSE 8080

COPY package.json /opt/app-root/src
COPY . /opt/app-root/src
RUN npm -s install

# Run it
CMD ["/bin/bash", "-c", "npm start" ]

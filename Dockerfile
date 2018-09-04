FROM bucharestgold/centos7-s2i-nodejs:10.x

WORKDIR /opt/app-root/src

EXPOSE 8080

COPY . /opt/app-root/src

# Run it
CMD ["/bin/bash", "-c", "npm start" ]

FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs npm

RUN npm install express --save
RUN npm install redis --save

RUN mkdir /source
COPY ./index.js /source/
#COPY ./entrypoint.sh /source/

#ENTRYPOINT ["/usr/bin/node"]
#CMD ["/source/index.js"]

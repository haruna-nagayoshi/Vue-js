FROM node:lts

WORKDIR /app

RUN apt-get update && \
    npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-service-global

CMD ["/bin/sh"]

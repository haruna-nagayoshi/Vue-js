FROM node:lts

WORKDIR /app

RUN apt update && \
    npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g @vue/cli-service-global

CMD ["/bin/sh"]

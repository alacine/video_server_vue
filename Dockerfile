FROM nginx:alpine

COPY --from=video_server_vue_build /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENV PS1='\n[\u@\h \w]\n$ '

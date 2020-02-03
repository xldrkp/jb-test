FROM jekyll/jekyll:3.8.5
RUN apk add --no-cache perl openssh-client
COPY Gemfile .
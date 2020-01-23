FROM jekyll/jekyll:3.8.5
RUN apk --update add make gcc g++ libc-dev
RUN gem install bundler
ENTRYPOINT bundle install && bundle exec jekyll build
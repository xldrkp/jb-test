FROM jekyll/jekyll:3.8.5
COPY Gemfile .
CMD ["sh", "-c", "bundle install && bundle exec jekyll build"]
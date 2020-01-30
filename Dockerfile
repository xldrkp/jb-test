FROM jekyll/jekyll:3.8.5
COPY Gemfile .
# CMD ["bash", "-c", "bundle install && bundle exec jekyll build"]
ENTRYPOINT [ "/bin/bash" ]
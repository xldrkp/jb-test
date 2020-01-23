Run locally:

    docker run --rm --security-opt label:disable -v /full/path/QuaXP:/srv/jekyll -p 4000:4000 -it -u 1000:1000 emdupre/jupyter-book
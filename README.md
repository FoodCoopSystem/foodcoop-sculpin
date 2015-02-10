foodcoop.pl localhost build
================================
 * Make sure you have [`sculpin`](https://sculpin.io/download/) and [`Node.js package manager - npm`](http://ndever.net/articles/linux/installing-sass-and-compass-ubuntu-1210-1304) (with Grunt, Sass) installed.
 * `cd` to your working dir and and then `git clone git@github.com:FoodCoopSystem/foodcoop-sculpin.git`.
 * `npm install` manager will install all dependencies.
 * To install necessery dependencies go back to root dir and run `sculpin install`.
 * `grunt watch -v` - and grunt will run `sculpin` server, `compass` for css and `uglify` for js
 [terminator](http://gnometerminator.blogspot.com/p/introduction.html) (linux only) 
 * Congrats! Go to `localhost:8000`.

 
Use Node.js package manager to run grunt.
=====================
    sudo apt-get install npm


Below is the oficial sculpin instructions
- - -

Sculpin Blog Skeleton
=====================

A skeleton for a Sculpin based blog.

Powered by [Sculpin](http://sculpin.io). =)


Features
--------

A very basic Sculpin based blog supporting the following features:

 * Very minimal Bootstrap based theme.
 * A handful of existing posts in `source/_posts/` to get you started. Feel
   free to remove these when you are ready.
 * An about page at `/about`.
 * An index page at `/`. It displays all posts and paginates them.
 * A blog archive page at `/blog`. It displays post titles broken down by
   month and is paginated.
 * A blog categories page at `/blog/categories`.
 * A blog category index at `/blog/categories/$category`. Similar to the blog
   archive except broken down by each category.
 * A blog tags page at `/blog/tags`.
 * A blog tag index at `/blog/tags/$tag`. Similar to the blog archive
   except broken down by each tag.


Build
-----

### If You Already Have Sculpin

    sculpin install
    sculpin generate --watch --server

Your newly generated clone of sculpin-blog-skeleton is now
accessible at `http://localhost:8000/`.

## Download the Phar

Downloading sculpin.phar is the best way to get up and running with Sculpin since it is a ready to run self-contained archive. You can download it like this:

    curl -O https://download.sculpin.io/sculpin.phar

You can execute Sculpin by running php sculpin.phar but if you want to skip the php part, you can make sculpin.phar executable like this:

    chmod +x sculpin.phar

To make things even easier, sculpin.phar can be renamed to sculpin like this:

    mv sculpin.phar sculpin

Finally, if you move sculpin to your path it can be run from anywhere. For example, assuming ~/bin is in your $PATH, you can do the following:

    mv sculpin ~/bin/

That's it! You're all set to run Sculpin. :)

You can also download stable releases of Sculpin at the following URLs:

    v2.0.0 - https://download.sculpin.io/release/v2.0.0/sculpin.phar


Previewing Development Builds
-----------------------------

By default the site will be generated in `output_dev/`. This is the location
of your development build.

To preview it with Sculpin's built in webserver, run either of the following
commands. This will start a simple webserver listening at `localhost:8000`.

### Using Sculpin's Internal Webserver

#### Generate Command

To serve files right after generating them, use the `generate` command with
the `--server` option:

    sculpin generate --server

To listen on a different port, specify the `--port` option:

    sculpin generate --server --port=9999

Combine with `--watch` to have Sculpin pick up changes as you make them:

    sculpin generate --server --watch


##### Server Command

To serve files that have already been generated, use the `serve` command:

    sculpin serve

To listen on a different port, specify the `--port` option:

    sculpin serve --port=9999


### Using a Standard Webserver

The only special consideration that needs to be taken into account for standard
webservers **in development** is the fact that the URLs generated may not match
the path at which the site is installed.

This can be solved by overriding the `site.url` configuration option when
generating the site.

    sculpin generate --url=http://my.dev.host/blog-skeleton/output_dev

With this option passed, `{{ site.url }}/about` will now be generated as
`http://my.dev.host/blog-skelton/output_dev/about` instead of `/about`.


Publishing Production Builds
----------------------------

When `--env=prod` is specified, the site will be generated in `output_prod/`. This
is the location of your production build.

    sculpin generate --env=prod

These files are suitable to be transferred directly to a production host. For example:

    sculpin generate --env=prod
    rsync -avze 'ssh -p 999' output_prod/ user@yoursculpinsite.com:public_html

In fact, `publish.sh` is provided to get you started. If you plan on deploying to an
Amazon S3 bucket, you can use `s3-publish.sh` alongside the `s3cmd` utility (must be
installed separately).

# nm-web

Web frontend for nm-api built using [VueJS](https://vuejs.org/) and [Vuex](https://vuex.vuejs.org/en/).  The REST backend [The TVDB API](https://api.thetvdb.com/swagger) to search shows and display various information relating to the show found.

[DEMO](http://nm-demo.aarons.io)


## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```

Built using vue-cli.  For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Related Projects
[nm-ansible](https://github.com/aaronstaves/nm-ansible) - Ansible playbooks used to deploy this project

[nm-api](https://github.com/aaronstaves/nm-api) - REST backend that provides access to [The TVDB API](https://api.thetvdb.com/swagger)

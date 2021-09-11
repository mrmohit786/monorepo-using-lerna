## Monorepo architecture build using lerna and yarn workspace

### Some useful commands for lerna

> Install lerna
````
npm install -D lerna
````
> Initialize lerna
````
lerna init --yes
````
> Clean node modules
````
npx lerna clean -y
````
> Install packages in a single node modules dir
````
npx lerna bootstrap --hoist
````

### Work with yarn

### For more information visit lerna official website
> https://lerna.js.org/
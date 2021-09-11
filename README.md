## Monorepo architecture build using lerna

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
npm lerna bootstrap --hoist
```` 

### For more information visit lerna official website
> https://lerna.js.org/
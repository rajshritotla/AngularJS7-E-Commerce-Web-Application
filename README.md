# AngularJS7-E-Commerce-Web-Application

Build efficient and reusable front-end mobile first general design for e-commerce businesses

```
OUTPUT directory contains a few images, to give an idea how about project's UI, UX, features and working
```

# Technologies/Features Used

AngularJS7

Bootstrap

USPS API

Browser's local storage

# Commands to implement

# To Create
```
ng new ecommerce
cd ecommerce
```

# Run
```
ng serve --open
```

# Node Installation
```
npm install --save
npm install typescript
```

# Bootstrap Installation
```
npm install bootstrap ngx-bootstrap --save
index.html -> insert <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

# For Header Footer | Component generation
```
ng generate component <name> [options]
```

# Service (class)
```
ng g service <myserviceNAME>
```

e.g. ng g service app/model/productservice/product

```
ng g service model/productService/product  {USE THIS NOT ABOVE}
```

1. Create file & class to export <product.ts>

2. In a file create data/import from server/local storage <products-list.ts>

3. Start writing service actionnn code :P <product.service.ts>

# For Routing
edit routing ts file
```
add like href ->>>> 
routerLink="/cart" routerLinkActive="active"  
OR
[routerLink]="['../cart',product.pid]"
```
after setting routes, start creating view for every route in COMPONENT

```
add PROVIDERS in ts file of each COMPONENT
```

# Pipe
```
ng generate pipe
```

# Components
```
ng generate component product/product-list
ng generate component product/product-detail
```

# Search Pipe

```
npm i ng2-search-filter --save
yarn add ng2-search-filter 
```

then in app.module.ts
```
import { Ng2SearchPipeModule } from 'ng2-search-filter';
imports: [.. , Ng2SearchPipeModule],
```

# For pipe implementation
in TS file -> 
``` 
import { SearchproductPipe } from 'src/app/filters/searchproduct.pipe';
```
in HTML file ->
```
<div>
        {{'p01'|searchproduct}}
</div>
```

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#01_basic_types">01_basic_types</a></li>
    <li><a href="#02_compiler_and_config">02_compiler_and_config</a></li>
    <li><a href="#03_classes_and_interfaces">03_classes_and_interfaces</a>
      <ul>
        <li><a href="#classes">classes</a></li>
        <li><a href="#interfaces">interfaces</a></li>
      </ul>
    </li>
    <li><a href="#04_advance_types">04_advance_types</a></li>
    <li><a href="#05_generics">05_generics</a></li>
    <li><a href="#06_decorators">06_decorators</a></li>
    <li><a href="#07_drag_and_drop_project">07_drag_and_drop_project</a></li>
    <li><a href="#08_modules_and_namespace">08_modules_and_namespace</a></li>
    <li><a href="#09_webpacks">09_webpacks</a></li>
    <li><a href="#10_third_party_libraries">10_third_party_libraries</a></li>
    <li><a href="#11_share_a_place_app">11_share_a_place_app</a></li>
  </ol>
</details>

&nbsp;

## About The Project

- Understanding TypeScript - 2023 Edition
- Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!
- [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller)
- [Academind](https://academind.com/)

&nbsp;

## Introduction

- A JavaScript superset
- Adds new features
  - Types
  - Interfaces
  - Generics
  - Decorators
  - Next-gen JavaScript Features (compiled down for older browsers)
  - Rich Configuration Options
- Browser can't execute it
- Compile TypeScript to JavaScript
- `tsc app.ts`

&nbsp;

## 01_basic_types

- [stackoverflow - Cannot redeclare block scoped variable](https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable)
- JS uses dynamic types (resolved at runtime) and TS uses "static types" (set during development)
- Type Inference
- Types
  - `number`
  - `string`
  - `boolean`
  - `object` or `{}`
  - Array: `<T>[]`
  - Tuple: `<T>[]` (Fixed length array)
  - `enum E {}`
  - `any`'
  - Union: `|`
  - Literal
  - Type Aliases/ Custom Types
  - Return Types
  - `void`
  - `undefined`
  - `Function`
  - Function Type: `() => <T>`
  - Callback
  - `unknown`
  - `never`

&nbsp;

---

&nbsp;

## 02_compiler_and_config

- **Watch Mode:** `tsc app.ts -w`
- Watch the entire project
  - Navigate to the respective folder
  - `tsc --init` to create a `tsconfig.json` file
  - `tsc -w`
- [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
  - [Compilation:](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
    - `exclude`
    - `include`
    - `files`
  - Language and Environment:
    - `"target": "es6"`
    - **Default:** `"lib": ["dom", "es6", "dom.iterable", "scripthost"],`
    - **For debugging ts files using browser:** `"sourceMap": true,`
  - Emit:
    - [**`dist` folder:**](https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects) Store output files e.g. JavaScript files
      - `"outDir": "./dist"`
    - **`src` folder:** Store input files e.g. TypeScript files
    - `"noEmitOnError": true`
  - Type Checking:
    - `!` (Refer to `app.ts`)
    - `"strict": true`

&nbsp;

---

&nbsp;

## 03_classes_and_interfaces

&nbsp;

### classes

- What's Object-oriented Programming (OOP)?
  - Work with (real-life) Entities in your code

|                         ProductList                         |                           Product                           |                          ShoppingCart                           |
| :---------------------------------------------------------: | :---------------------------------------------------------: | :-------------------------------------------------------------: |
| Renders a list of products which were fetched from a server | Renders details about a product and allows addition to cart |  Renders cart products and total and allows user to order them  |
|           Object holds rendering + fetching logic           |         Object holds rendering + cart-adding logic          | Objects holds rendering + ordering (server communication) logic |

|                             Objects                             |                               Classes                                |
| :-------------------------------------------------------------: | :------------------------------------------------------------------: |
|                The things you work with in code                 |                        Blueprints for objects                        |
|                    **Instances** of classes                     | Define how objects look like, which properties and methods they have |
| Class-based creation is an alternative to using object literals |    Classes make creation of multiple, similar objects much easier    |

- **Access Modifiers:** `public` & `private`
- `readonly`
- `protected`
- `abstract`

&nbsp;

### interfaces

- Good for enforcing consistent structure
- What is a core difference between a class and an interface?
  - Interfaces can't be instantiated and are not compiled unlike classes
- `implements`
- `readonly`
- `extends`
- Optional: `?`

&nbsp;

---

&nbsp;

## 04_advance_types

- **Interfaces VS Types**
  - Interfaces are recommended for defining new objects or method or property of an object where it will receive a specific component.
  - Types are recommended when using function which will return an object.
- **Intersection Types:** `&`
- **Union Types:** `|`
- Type Guard
- Discriminated Unions
- **TS:** `in`
- **JS:** `instanceof`
- **Type Casting:** `<>` or `as`
- **Index Type:** `[prop: string]`
  - `prop` is equivalent to `key`
- Function Overloads
- **Optional Chaining:** `?`
- **Nullish Coalescing:** `??`

&nbsp;

---

&nbsp;

## 05_generics

- Generic Type
- Promise Type
- Generic Function
- **Generic Constraint:** `extends`
- `keyof` Constraint
- Generic Class
- Generic Utility Type
  - `Partial` Type
  - `Readonly` Type
- Generic Types vs Union Types
- When can "Generics" come in very handy?
  - In cases where you have a type that actually works together with multiple other possible types (e.g. an object which emits data of different types)
  - Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data).

&nbsp;

---

&nbsp;

## 06_decorators

- [What exactly is metaprogramming?](https://stackoverflow.com/questions/514644/what-exactly-is-metaprogramming)
- [Angular - Architecture Components - Component metadata](https://angular.io/guide/architecture-components#component-metadata)
- `tsconfig.json`: `"experimentalDecorators": true,`
- [**Decorators are called when the class is declared—not when an object is instantiated**](https://stackoverflow.com/a/49463774/13009010)
- Class Decorator
  - **Returning (and changing) a Class in a Class Decorator**
- Decorator Factory
- Property Decorators
  - [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- Accessor Decorators
- Method Decorators
- Parameter Decorator
- Return Types for Accessor and Method Decorators
  - [PropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- Validation with decorators
- [GitHub - class-validator](https://github.com/typestack/class-validator)

&nbsp;

> **Ahmet:** decorators are especially useful to implement Aspect Oriented Programming, which is a kind of meta-programming.
>
> Using decorators you can apply one of the most important programming principle, "Separation of Concerns". And AOP is all about separation of "cross-cutting concerns".
>
> What are cross-cutting concerns?
>
> These are extra work that you need in many applications you write, but not directly related with your business logic. Most know example is a Logger, but there are many. For example Udemy's coupons may be a good candidate to classify as cross-cutting concern, because you can also apply the same promotion logic in any online-shopping application. Validation, Authentication, Authorization, Caching are some examples.
>
> Sure you can implement all these stuff directly coding into your use-case realization code, but this will clutter your business logic. And what if you need to remove/change this logic later, if you scatter this in many places? In short decorators will make your code more readable and increase the maintainability of your code.
>
> AOP is important and decorators is just a way to implement it. You may also use Proxy pattern to implement such stuff dynamically (dynamically add caching, adjusting buffers for example).
>
> Since the decorators in JS are still tagged as experimental you may not find enough information about them in JS world. But they are used in Java world since years with Spring and AspectJ. In Java world they are named as "Annotations"...

&nbsp;

---

&nbsp;

## 07_drag_and_drop_project

&nbsp;

---

&nbsp;

## 08_modules_and_namespace

- `namespace` & File Bundling
  - `///`
  - `reference`
- ES6 Imports/Exports
  - `*`
  - `default`

&nbsp;

---

&nbsp;

## 09_webpacks

- [Webpack](https://webpack.js.org/)
- `devtool: 'source-map',`: Allow us to see sources on browser dev tools

|                   Without                    |                       With                       |
| :------------------------------------------: | :----------------------------------------------: |
| Multiple .ts files & imports (Http requests) |       Code bundles, less imports required        |
|              Not optimized code              | Optimized (minified) code, less code to download |
|     "External" development server needed     |       More build steps can be added easily       |

- `npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`
  - `webpack` is a tool that allows us to plug in certain functionalities to bundle our code and also to transform our code. Transform our typescript code to JavaScript, and then actually emit a bundled Javascript file.
  - `webpack-cli` to run webpack commands in our project.
  - `webpack-dev-server` to have that built in development server, which starts webpack under the hood, which watches our files for changes, automatically triggers webpack to recompile when something changes, and which auto serves our page.
  - `typescript`: Now we already installed typescript globally on our machine, which is why we are able to run `tsc -w`. Now it is a good practice to auto install a copy of typescript per project, so that for this project, you got a specific typescript version. The advantages that if you ever change your global typescript version, you don't break your project version, your project setup if there we're breaking changes in typescript itself, so we can lock in a specific version of typescript for a project, that's why we installed it separately here.
  - `ts-loader` now is a package which will work together with webpack. The ts loader is a package that tells webpack how to convert typescript code to Javascript, so that webpack is able to do both, compile our code, with the help of typescript loader, which in turn of course uses the typescript compiler under the hood, and then webpack also is able to bundle our emitted javascript files into a bundled js file into one bundled code file.
- `npm install --save-dev clean-webpack-plugin`

&nbsp;

---

&nbsp;

## 10_third_party_libraries

- Using "Normal" Libraries with TypeScript
  - [Lodash](https://lodash.com/)
  - `npm i @types/lodash`
  - Using `declare` last resort
  - [class-transformer](https://github.com/typestack/class-transformer)
  - [class-validator](https://github.com/typestack/class-validator)
- TypeScript specific Libraries

&nbsp;

---

&nbsp;

## 11_share_a_place_app

- [Google Maps Platform - Web Services - Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)

&nbsp;

---

&nbsp;

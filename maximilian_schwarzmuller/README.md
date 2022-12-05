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

- Intersection Type
- Type Guard
- TS: `in`
- JS: `instanceof`

&nbsp;

---

&nbsp;

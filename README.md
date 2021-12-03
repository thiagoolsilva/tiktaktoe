<h1 align="center">Welcome to tiktaktoe 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/thiagoolsilva/tiktaktoe#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/thiagoolsilva/tiktaktoe/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/thiagoolsilva/tiktaktoe/blob/master/LICENSE" target="_blank">
    <img alt="License: APACHE--V2" src="https://img.shields.io/github/license/thiagoolsilva/tiktaktoe" />
  </a>
  <a href="https://twitter.com/thiagoolsilva" target="_blank">
    <img alt="Twitter: thiagoolsilva" src="https://img.shields.io/twitter/follow/thiagoolsilva.svg?style=social" />
  </a>
</p>

> Tik Tak Toe Game is a monorepo that contains the game core and CLI project with clean architecture, dependency injection, SOLID, tests, webpack and etc...

### 🏠 [Homepage](https://github.com/thiagoolsilva/tiktaktoe#readme)

## Why Clean Architecture?

> Warning: This section wasn't wrote by me since I got it from ([clean-architecture-example](https://github.com/mattia-battiston/clean-architecture-example/blob/master/README.md#the-example-domain)) github that explain in details about the concept of clean architecture. Please you should give it a try and go to it and read the article/code. Thanks ([mattia-battiston](https://github.com/mattia-battiston)) to share your content to the community.

> The center of your application is not the database. Nor is it one or more of the frameworks you may be using. **The center of your application is the use cases of your application** - _Unclebob_ ([source](https://blog.8thlight.com/uncle-bob/2012/05/15/NODB.html 'NODB'))

Clean architecture helps us solve, or at least mitigate, these common problems with architecture:

- **Decisions are taken too early**, often at the beginning of a project, when we know the least about the problem that we have to solve
- **It's hard to change**, so when we discover new requirements we have to decide if we want to hack them in or go through an expensive and painful re-design. We all know which one usually wins. _The best architectures are the ones that allow us to defer commitment to a particular solution and let us change our mind_
- **It's centered around frameworks**. Frameworks are tools to be used, not architectures to be conformed to. Frameworks often require commitments from you, but they don’t commit to you. They can evolve in different directions, and then you’ll be stuck following their rules and quirks
- **It's centered around the database**. We often think about the database first, and then create a CRUD system around it. We end up using the database objects everywhere and treat everything in terms of tables, rows and columns
- **We focus on technical aspects** and when asked about our architecture we say things like “it’s servlets running in tomcat with an oracle db using spring”
- **It's hard to find things** which makes every change longer and more painful
- **Business logic is spread everywhere**, scattered across many layers, so when checking how something works our only option is to debug the whole codebase. Even worse, often it's duplicated in multiple places
- **Forces/Encourages slow, heavy tests**. Often our only choice for tests is to go through the GUI, either because the GUI has a lot of logic, or because the architecture doesn't allow us to do otherwise. This makes tests slow to run, heavy and brittle. It results in people not running them and the build beind broken often
- **Infrequent deploys** because it's hard to make changes without breaking existing functionalities. People resort to long-lived feature branches that only get integrated at the end and result in big releases, rather than small incremental ones

Clean architecture gives us all these benefits:

- **Effective testing strategy** that follows the [testing pyramid](http://martinfowler.com/bliki/TestPyramid.html) and gives us a fast and reliable build
- **Frameworks are isolated** in individual modules so that when (not if) we change our mind we only have to change one place, with the rest of the app not even knowing about it
- **Independent from Database**, which is treated just like any other data provider. Our app has real use cases rather than being a CRUD system
- **Screaming architecture** a.k.a. it screams its intended usage. When you look at the package structure you get a feel for what the application does rather than seeing technical details
- **All business logic is in a use case** so it's easy to find and it's not duplicated anywhere else
- **Hard to do the wrong thing** because modules enforce compilation dependencies. If you try to use something that you're not meant to, the app doesn't compile
- **We're always ready to deploy** by leaving the wiring up of the object for last or by using feature flags, so we get all the benefits of continuous integration (no need for feature branches)
- **Swarming on stories** so that different pairs can easily work on the same story at the same time to complete it quicker
- **Good monolith** with clear use cases that you can split in microservices later one, once you've learnt more about them

Of course, it comes at a cost:

- **Perceived duplication of code**. Entities might be represented differently when used in business logic, when dealing with the database and when presenting them in a json format. You might feel like you're duplicating code, but you're actually favouring _decoupling over DRY_
- **You need interesting business logic** to "justify" the structure. If all you do in your use case is a one-line method to read or save from a database, then maybe you can get away with something simpler

---

## Install

```sh
./batect install
```

## Core usage

> This step will work in a typescript project.

```sh
yarn add @tiktaktoe/core
```

## CLI usage

```sh
./batect start-game
```

or use the following code in a typescript project

```sh
yarn add  @tiktaktoe/ui
```

## Minify javascript

```sh
./batect build

$output folder:

./packages/__bundle
├── library-cli.js
├── library-cli.js.map
├── library.js
└── library.js.map
```

## Run tests

```sh
./batect unit-testing
```

## Check all available tasks

```sh
./batect --list-tasks

Build:
- build: Install all dependencies into docker volume
- clean: Clean project builds
- install: Build code
- version: Create a new version

Quality:
- audit: Check library vulnerability
- format-code: Format code
- lint: Run lint
- lint-fix: Run lint fix

general:
- start-game: Start local game tik tak toe

test:
- unit-testing: Run unit testing

```

## API Core

```typescript
export { Player, PositionAlreadyUsedException } from './cross-cutting/index';
export { PresentationFactory, GamePlay } from './presentation/index';
export { TikTakToePlay, TikTakToeWinner } from './model/type/game-types';
export { GameplayInterface } from './presentation/gameplay.interface';
```

### Data Type

- Player - It is a data model that represent the Player. (FirstPlayer, SecondPlayer and Not Played)
- PositionAlreadyUsedException - Exception used to advise about a position already filled.
- PresentationFactory - Factory used to create a gameplay
- GamePlay - Gameplay implementation that contains all Use Cases of game.
- TikTakToePlay - Play role of game
- TikTakToeWinner - The winner object ata representation.
- GameplayInterface - Gameplay interface.

## Continuous Integration

The project uses github action to check tests and some configurations after created a pull request.

## Dependency

### Core

```javascript
"reflect-metadata": "0.1.13",
"tsyringe": "4.6.0"
```

### UI

```javascript
"chalk": "4.1.2",
"table": "6.7.2"
```

## Author

👤 **Thiago Lopes da Silva <thiagoolsilva@gmail.com>**

- Website: https://medium.com/@thiagolopessilva
- Twitter: [@thiagoolsilva](https://twitter.com/thiagoolsilva)
- Github: [@thiagoolsilva](https://github.com/thiagoolsilva)
- LinkedIn: [@thiago-lopes-silva-2b943a25](https://linkedin.com/in/thiago-lopes-silva-2b943a25)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/thiagoolsilva/tiktaktoe/issues). You can also take a look at the [contributing guide](https://github.com/thiagoolsilva/tiktaktoe/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Thiago Lopes da Silva <thiagoolsilva@gmail.com>](https://github.com/thiagoolsilva).<br />
This project is [APACHE--V2](https://github.com/thiagoolsilva/tiktaktoe/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

# typescript-nestjs-swagger-plugin

[![version](https://img.shields.io/npm/v/typescript-nestjs-swagger-plugin.svg?style=flat-square)](https://www.npmjs.com/package/typescript-nestjs-swagger-plugin)
[![downloads](https://img.shields.io/npm/dm/typescript-nestjs-swagger-plugin.svg?style=flat-square)](https://www.npmjs.com/package/typescript-nestjs-swagger-plugin)
[![license](https://img.shields.io/npm/l/typescript-nestjs-swagger-plugin.svg?style=flat-square)](https://www.npmjs.com/package/typescript-nestjs-swagger-plugin)
[![dependencies](https://img.shields.io/librariesio/release/npm/typescript-nestjs-swagger-plugin?style=flat-square)](https://www.npmjs.com/package/keq)
[![coveralls](https://img.shields.io/coveralls/github/Val-istar-Guo/typescript-nestjs-swagger-plugin.svg?style=flat-square)](https://coveralls.io/github/Val-istar-Guo/typescript-nestjs-swagger-plugin)

[@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) [ts-patch](https://github.sheincorp.cn/nonara/ts-patch)/[ttypescript](https://github.sheincorp.cn/cevek/ttypescript) plugin reduce the amount of boilerplate code required. see more on <https://docs.nestjs.com/openapi/cli-plugin>.

## Usage

Add this plugin to `tsconfig.json`.

```json
{
  "compilerOptions": {
    // ...other options
    "plugins": [
      {
        "transform": "./build/typescript-nestjs-swagger.ts",
        "introspectComments": true
      }
    ]
  }
}
```

For all options supported, please see: [@nestjs/swagger](https://docs.nestjs.com/openapi/cli-plugin#using-the-cli-plugin)

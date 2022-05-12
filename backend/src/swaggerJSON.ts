/**
    * @description      : Realizar todas as alterações (dinâmicas) atraves deste módulo
    * @author           : mario
    * @group            : 
    * @created          : 11/05/2022 - 20:13:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const openAPI = require("./schemas/openAPI")
const servers = require("./schemas/servers")
const paths = require("./schemas/paths")
const components = require("./schemas/components")

// OpenAPI Block
const op = openAPI("3.0.0", {
    title: "Teste",
    description: "Descrição",
    termsOfService: "/terms",
    contact: {
        email: "mj@gmail.com"
    },
    version: "1.0.0"
})

// Servers Block
const sv = servers([
    {url: "https://prod.mj-source.com", description: "Produção"},
    {url: "https://homol.mj-source.com", description: "Homologação"},
    {url: "https://test.mj-source.com", description: "Teste"}
])

// Components Block
const cp = components({
    schemas: {
        Product: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                price: {
                    type: 'number'
                }
            }
        }
    }
})

// Paths Block
const ph = paths({
    "/mj-source": {
        post: {
            summary: "Sumário Rota",
            description: "Descrição Rota",
            tags:["Prods"],
            requestBody: {
                content: {
                    "aplication/json": {
                        schema: cp['components'].schemas.Product
                    }
                }
            }
        }
    }
})

const swaggerExemple = {...op, ...sv, ...ph, ...cp}
console.log(swaggerExemple)

module.exports = swaggerExemple
/**
 * @description      :
 * @author           : mario
 * @group            :
 * @created          : 11/05/2022 - 17:00:24
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 11/05/2022
 * - Author          : mario
 * - Modification    :
 **/

// const express = require("express");
// const swaggerUi = require("swagger-ui-express");

// const swaggerJSON = require("./swaggerJSON");

// let PORT = 3002;

// const app = express();

// app.use(express.json());

// app.get("/swagger", (req, res) => {
//     app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON({...req.query})));
//     res.redirect('/api-docs')
// });

// app.get("/terms", (req, res) => {
// 	res.send("Termos e Serviços");
// });

// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });



// -------------



const express = require('express')
const jsForce = require('jsforce')
const swaggerUi = require("swagger-ui-express");
const swaggerJSON = require("./swaggerJSON");
require('dotenv').config()

const env = process.env

const PORT = 3002 || env.PORT

const app = express()

let swaggerInfo;

app.get("/swagger", (req, res) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON({...req.query})));
    res.redirect('/api-docs')
});

app.get("/terms", (req, res) => {
	res.send("Termos e Serviços");
});

app.get('/login', async (req, res) => {
    // res.redirect(`${env.SF_LOGIN_URL}/services/oauth2/authorize?response_type=code&client_id=${env.CONSUMER_KEY}&redirect_uri=${env.SF_REDIRECT_URI}`)

    // console.log('QUERY_PARAMS')
    // console.log(req.query)
    let conn = new jsForce.Connection({
        loginUrl: env.SF_LOGIN_URL
    });
    try {
        // await conn.login(env.SF_USERNAME, env.SF_PASSWORD+env.SF_TOKEN, (err, userInfo) => {
        await conn.login(req.query.uname, req.query.pword+env.SF_TOKEN, async (err, userInfo) => {
            if(err) console.log(err)
            else {
                console.log('Successfully Connected to Salesforce!');
                // console.log(userInfo)
                let soql = `
                    SELECT
                        Id,
                        OpenApiVerson__c,
                        infoTitle__c, InfoDescription__c, InfoEmail__c, InfoVersion__c,
                        PathRoute__c, PathMethod__c, PathSummary__c, PathDescription__c, PathTags__c, PathRequestContentType__c,
                        ComponentSchema__c,
                        ServersList__c,
                        DeveloperName
                    FROM swagger__mdt
                    WHERE DeveloperName = 'Swagger_1'`;
                try {
                    swaggerInfo = await conn.query(soql);
                    // console.log(swaggerInfo)
                    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON(swaggerInfo.records[0])));
                    res.redirect('/api-docs')
                } catch (error) {
                    res.send(error)
                }
                await conn.logout();
            }
        });
    } catch (err) {
        console.error(err);
    }
})

app.get('/oauth2/callback', (req, res) => {
    // res.redirect(`https://www.google.com/search?q=${req.query.code}`)
    // res.send(req.query.code);
    // console.log('req.query.code')
    // console.log(req.query.code)
    res.sendFile(`C:/Projects/Electron/electron/src/index.html`)
})

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
})
// @6991oiraM

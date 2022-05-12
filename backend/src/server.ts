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

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerJSON = require("./swaggerJSON");

let PORT = 3001;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON));

app.get("/swagger", (req, res) => {
    if(Object.keys(req.query).length == 0) {
        res.send(
            `<form action="/swagger" method="GET">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value="John"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br><br>
                <input type="submit" value="Submit">
            </form>`
        );
    } else {
        res.json({result:req.query})
    }
    console.log('Object.keys(req.query)')
    console.log(Object.keys(req.query))
    console.log(Object.keys(req.query).length)
});

app.get("/terms", (req, res) => {
	res.send("Termos e Serviços");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

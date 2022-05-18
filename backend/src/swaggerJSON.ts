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

const openAPI = require("./schemas/openAPI");
const servers = require("./schemas/servers");
const paths = require("./schemas/paths");
const components = require("./schemas/components");

const swaggerExemple = (params) => {
	// OpenAPI Block
	const op = openAPI(params["OpenApiVerson__c"], {
		title: params["infoTitle__c"],
		description: params["InfoDescription__c"],
		// termsOfService: "/terms",
		contact: {
			email: params["InfoEmail__c"],
		},
		version: params["InfoVersion__c"],
	});

	// Servers Block
	const sv = servers(JSON.parse(params["ServersList__c"]));

	// Components Block
	const cp = components(JSON.parse(params["ComponentSchema__c"]));

	let tagList = [];
	// console.log('params["PathTags__c"].split(",")');
	// console.log(params["PathTags__c"].split(","));
	params["PathTags__c"].split(",").forEach((el) => {
		// console.log("el.trim()");
		// console.log(el.trim());
		tagList.push(el.trim());
	});

	// Paths Block
	let ph = paths({
		route: {
			method: {
				summary: "Sumário Rota",
				description: "Descrição Rota",
				tags: tagList,
				requestBody: {
					content: {
						type: {
							schema: cp["components"].schemas[`${Object.keys(cp["components"].schemas)[0]}`],
						},
					},
				},
			},
		},
		'/otherRoute': {
			'put': {
				summary: "Sumário Rota 2",
				description: "Descrição Rota 2",
				tags: ['Tag Produto 1'],
				requestBody: {
					content: {
						type: {
							schema: cp["components"].schemas[`${Object.keys(cp["components"].schemas)[0]}`],
						},
					},
				},
			},
		},
	});

	let reqContentType = ph.paths.route.method.requestBody.content.type;
	ph.paths.route.method.requestBody.content[`${params["PathRequestContentType__c"]}`] = reqContentType;
	delete ph.paths.route.method.requestBody.content.type;

	let method = ph.paths.route.method;
	ph.paths.route[`${params["PathMethod__c"]}`] = method;
	delete ph.paths.route.method;

	let route = ph.paths.route;
	ph.paths[`${params["PathRoute__c"]}`] = route;
	delete ph.paths.route;

	return { ...op, ...sv, ...ph, ...cp };
};

module.exports = swaggerExemple;

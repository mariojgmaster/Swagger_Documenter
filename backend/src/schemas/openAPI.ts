/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 11/05/2022 - 17:48:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const OpenAPI = (
	openapi:String,
	info: {
		title:String,
		description:String,
		termsOfService:String,
		contact: {
			email:String
		}
		version:String
	},
	) => { return { openapi, info } }

module.exports = OpenAPI
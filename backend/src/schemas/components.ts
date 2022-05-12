/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/05/2022 - 10:40:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const Components = (
	components: {
        schemas: {
            schemaName: {
                type:String,
                properties: Object
            }
        }
    }
	) => { return { components } }

module.exports = Components
/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 11/05/2022 - 20:39:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const Paths = (
	paths: {
        route: {
            method: {
                summary:String,
                description:String,
                tags:Array<String>,
                requestBody: {
                    content: {
                        type: {
                            schema:Object
                        }
                    }
                }
            }
        }
    }
	) => { return { paths } }

module.exports = Paths
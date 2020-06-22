
/**
 * Lambda handler which takes status code just to demonstrate the test cases scenario.
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
exports.handler = async (event, context, callback) => {
    console.log('LAMBDA ', event);
    
    if (event.body == 200) {
        return {
            statusCode: 200,
            body: {
                data: "success"
            }
        };
    } else {
        return {
            statusCode: 400,
            body: {
                data: "fail"
            }
        };
    }

}
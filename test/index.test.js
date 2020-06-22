const LambdaTester = require('lambda-tester');
const assert = require('chai').assert;
const myHandler = require('../index').handler;

describe('test case for first handler', function () {
    it('success scenario', async function () {
        let resp_succ = await LambdaTester(myHandler)
            .event({ body: '200' }).expectResolve();
        assert.equal(resp_succ.statusCode, 200);
    });

    it('fail scenario', async function () {
        let resp_fail = await LambdaTester(myHandler)
            .event({ body: '400' }).expectResolve();
        assert.equal(resp_fail.statusCode, 400);
    });
});
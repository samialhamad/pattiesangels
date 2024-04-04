const expect = chai.expect

function assert(actual, expected, functionName) {
    describe(functionName, () => {
        it(functionName, () => {
            expect(actual).to.deep.equal(expected)
        })
    })
}
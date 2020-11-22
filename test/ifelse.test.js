const assert = require('chai').assert
const ifelse = require('../ifelse')  

describe ('ifelse',function(){
   
    it('is exist',function(){
        assert.exists(ifelse.evenplusdoublemult, 'is neither `null` nor `undefined`')
    })
    
    it('is works properly with odd',function(){
        let result=ifelse.evenplusdoublemult(4,7)
        assert.equal(result, 28)
    })
    it('is works properly with even',function(){
        let result=ifelse.evenplusdoublemult(3,7)
        assert.equal(result, 10)
    })

    it('is exist',function(){
        assert.exists(ifelse.whichquarter, 'is neither `null` nor `undefined`')
    })
    it('is works properly 1 quarter',function(){
        let result=ifelse.whichquarter(4,7)
        assert.equal(result, "first quarter")
    })
    it('is works properly 2 quarter',function(){
        let result=ifelse.whichquarter(-4,7)
        assert.equal(result, "second quarter")
    })
    it('is works properly 3 quarter',function(){
        let result=ifelse.whichquarter(-4,-7)
        assert.equal(result, "third quarter")
    })
    it('is works properly 4 quarter',function(){
        let result=ifelse.whichquarter(4,-7)
        assert.equal(result, "fourth quarter")
    })
    it('is works properly x=0',function(){
        let result=ifelse.whichquarter(0,7)
        assert.equal(result, "coordinate axes")
    })
    it('is works properly y=0',function(){
        let result=ifelse.whichquarter(4,0)
        assert.equal(result, "coordinate axes")
    })
    it('is works properly x and y =0',function(){
        let result=ifelse.whichquarter(0,0)
        assert.equal(result, "coordinate axes")
    })
    it('is exist',function(){
        assert.exists(ifelse.sumonlypositive, 'is neither `null` nor `undefined`')
    })
    it('is works properly with 3 positive',function(){
        let result=ifelse.sumonlypositive(1,2,3)
        assert.equal(result, 6)
    })
    it('is works properly with 2 positive',function(){
        let result=ifelse.sumonlypositive(0,2,3)
        assert.equal(result, 5)
    })
    it('is works properly with 1 positive',function(){
        let result=ifelse.sumonlypositive(0,0,3)
        assert.equal(result, 3)
    })
    it('is works properly with no positive',function(){
        let result=ifelse.sumonlypositive(0,0,0)
        assert.equal(result, 0)
    })
});
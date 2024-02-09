// primer test

describe("Este es mi primer test", function () { 
    it("true debe ser true", function () { 
        expect(true).toBe(true)
    })

    it("false debe ser false", function () { 
        expect(false).toBe(false)
    })

    it("2 mas 2 debe ser 4", function () {
        expect(2+2).toBe(3)
    })
})
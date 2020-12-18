import * as convert from "../api";

describe('Converter test', ()=>{
    it('celToFah', ()=>{
        let expected = 50;
        let actual = convert.celToFah(10);
        expect(actual).toBe(expected);
    })
})


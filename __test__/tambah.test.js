import {fetch, Tambah} from "../src/function/tambah"

test('tambah kurang kali bagi', () => {
     expect(Tambah(1, 2)).toBe(3);
});

it('kurang', async()=>{
     expect(fetch("STRING")).toBe("string")
})


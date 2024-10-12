describe (' sjhjhdjhdfjdh', ()=> {
    beforeAll(async ()=> {
        console.info('iniciando tdd');
    });
    afterAll (()=> {
        console.info('Encerrando os testes');

    });

it ('Should some two numbers', ()=> {
    const result = exercicio1 ('1,2')
    expect(result).toBe(3);
});


})

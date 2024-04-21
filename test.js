const supertest = require('supertest')
const { expect } = require('chai')


describe('Test Digital SKola', () => {

    it('Sucess Post', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').post('/users').send(
            {
                "firstName": "Test",
                "lastName": "User",
                "email": "test@fake.com",
                "password": "myPassword"
            })
        console.log(response.body)
    })

    it('Get User Profile', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').get('/users/me')
        console.log(response.body)
        expect(response.statusCode).equal(200)
    })

    it('Add Contact', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').post('/contacts').send(
            {
                "firstName": "John",
                "lastName": "Doe",
                "birthdate": "1970-01-01",
                "email": "jdoe@fake.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Anytown",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            })
        console.log(response.body)
        expect(response.statusCode).equal(201)

    })

    it('Get User Profile', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').get('/contacts')
        console.log(response.body)
        expect(response.statusCode).equal(200)
    })

    it('Get Contact', async () => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').get('/contacts/')
        console.log(response.body)
        expect(response.statusCode).equal(200)
    })

})

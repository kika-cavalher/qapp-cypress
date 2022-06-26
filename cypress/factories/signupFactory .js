var faker = require('faker')

export default {

    delivery: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var email = faker.internet.email(firstName)

        var db = {
            "Nome completo": `${firstName} ${lastName}`,
            "E-mail": `${email}`,
            "Senha": "Kika1234",
            "Confirmar senha": "Kika1234"
        }

        return db
    }
}
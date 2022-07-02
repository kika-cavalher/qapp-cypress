var faker = require('faker')

export default {

    user: function () {

        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const email = faker.internet.email(firstName)

        var db = {
            "fullName": `${firstName} ${lastName}`,
            "email": `${email}`,
            "password": "Kika1234",
            "checkPassword": "Kika1234"
        }

        return db
    }
}
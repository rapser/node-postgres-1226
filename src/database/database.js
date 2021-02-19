import Sequalize from 'sequelize'

export const sequelize = new Sequalize(
    'postgres',
    'postgres',
    'root1983',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false

    }
)
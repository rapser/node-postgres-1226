import Sequalize from 'sequelize'

export const sequelize = new Sequalize(
    'tareas',
    'postgres',
    'admin1234',
    {
        host: 'database-1.c16vf7d4zq8q.us-east-2.rds.amazonaws.com',
        port: 5432,
        dialect: 'postgres',
        logging: false,
        maxConcurrentQueries: 100,
        ssl: 'Amazon RDS',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
          },
        language: 'en'
    }
)

// export const sequelize = new Sequalize(
//     'postgres',
//     'postgres',
//     'root1983',
//     {
//         host: 'localhost',
//         dialect: 'postgres',
//         pool:{
//             max: 5,
//             min: 0,
//             require: 30000,
//             idle: 10000
//         },
//         logging: false

//     }
// )
import dotnev from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
    port: process.env.PORT
}
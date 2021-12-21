import dotenv from 'dotenv'

dotenv.config()

export const KeyGen = (input) => {
    return `${Date.now() * Math.floor(Math.random() * process.env.SECRETNUMBER)}-${input.replace(/\s/g, '')}`
}
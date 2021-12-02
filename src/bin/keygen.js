export const KeyGen = (input) => {
    return `${Date.now() * Math.floor(Math.random() * 100)}-${input.replace(/\s/g, '')}`
}
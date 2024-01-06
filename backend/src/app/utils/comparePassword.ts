import bcrypt from 'bcryptjs'

export const matchPass =async (password:string,comparePassword:string) => {
    const match = await bcrypt.compare(password,comparePassword)
    return match
}
import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
    return {
        GITHUB_API: process.env.GITHUB_API
    }
})
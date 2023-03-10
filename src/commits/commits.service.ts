import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class CommitsService {

    async getHistoryCommits (){
        const response = await axios.get(
           'https://api.github.com/repos/fransempe/takeHome-test/commits'
            )
        return response.data
    }
}

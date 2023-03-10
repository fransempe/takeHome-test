import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class CommitsService {

    async getHistoryCommits (){
        const response = await axios.get('https://api.github.com/repos/izuzak/pmrpc/commits?path=README.markdown')
        return response.data
    }
}

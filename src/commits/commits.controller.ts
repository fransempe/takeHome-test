import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service'

@Controller('commits')
export class CommitsController {

    constructor(private commitsService: CommitsService){}
    @Get()
    getHistoryCommits() {
        return this.commitsService.getHistoryCommits()
    }
}

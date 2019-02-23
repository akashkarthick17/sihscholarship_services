import { Controller, Get, Res, Req } from 'routing-controllers';
import { Response, Request } from 'express';
import { MongoDBClient } from '../utility/db.utility';

@Controller()
export class testController {

    @Get('/test')
    getAll(@Req() req: Request, @Res() res: Response) {
        MongoDBClient.insertOne('auth', {
            id: "3433",
            username: "ashu",
            password: "ashu"
        });
        return res.send('success');
    }

}
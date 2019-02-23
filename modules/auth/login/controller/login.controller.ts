import { Controller, Post, Req, Res, Body} from "routing-controllers";
import { Request, Response } from "express";
import { Login } from "../model/auth";
import { ResponseUtility } from "../../../utility/response.utility";
import { LoginDelegate } from "../delegate/login.delegate";
import { Service, Inject } from 'typedi';

@Controller('/auth')
export class AuthController {

    constructor(@Inject('login.service') private loginDelegate: LoginDelegate) {
    }

    @Post('/login')
    authenticate(@Req() req: Request, @Res() res: Response, @Body() body: Login) {
        return this.loginDelegate.authenticate(body).then(response => {
            if (response)
                return ResponseUtility.generateResponse(true, response);
            else
                return ResponseUtility.generateResponse(false, response);
        });

    }
}
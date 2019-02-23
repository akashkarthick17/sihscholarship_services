import { Login } from "../model/auth";
import { MongoDBClient } from "../../../utility/db.utility";
import 'reflect-metadata';
import { Service } from "typedi";
import { AppConstants } from "../../../constants/app.constants";

@Service('login.service')
export class LoginDelegate {

    appConstants: AppConstants;
    constructor() {
        this.appConstants = new AppConstants();
    }

    authenticate(body: Login) {
        return MongoDBClient.find(this.appConstants.AUTHDOCUMENT, body).then(response => {
            return response;
        });
    }
}
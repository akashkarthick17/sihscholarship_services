
export class ResponseUtility {
    static generateResponse(isSuccess: boolean, body: any) {

        let response = {
            isSuccess: isSuccess,
            ResponseBody: body
        }

        return response;
    }
}
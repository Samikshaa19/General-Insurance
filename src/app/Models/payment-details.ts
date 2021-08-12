export class PaymentDetails {
    accountNo: any;
    ifscCode: any;
    emailId: any;

    constructor(accountNo:any, ifscCode:any, emailId:any)
    {
        this.accountNo = accountNo,
        this.ifscCode= ifscCode,
        this.emailId = emailId
    }
}

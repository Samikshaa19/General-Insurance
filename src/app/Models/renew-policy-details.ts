export class RenewPolicyDetails {
    newPolicyNo!: any;
    oldPolicyNo!: any;

    constructor(oldPolicyNo:any, newPolicyNo:any)
    {
        this.newPolicyNo = newPolicyNo;
        this.oldPolicyNo = oldPolicyNo;
    }
}

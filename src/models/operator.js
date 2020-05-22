export default class Operator {
  
  constructor(accessToken,operatorName, mobileNumber, password,role,city,operatorType) {
   this.accessToken=accessToken;
    this.operatorName = operatorName;
    this.mobileNumber = mobileNumber;
    this.password = password;
    this.role=role;
    this.city=city;
    this.operatorType=operatorType;
  }
}

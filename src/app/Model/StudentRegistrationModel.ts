export class StudentRegistrationModel{
    constructor(
        public firstName:String,
        public lastName:String,
        public email:String,
        public password:String,
        public confirmPassword:String
    ){}
}
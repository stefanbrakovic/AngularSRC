

export class UserType
{

    userTypeId : number;
    typeName : String;
    typeDescription : String;


  constructor(UserTypeId: number, TypeName: String, TypeDescription: String) {
    this.userTypeId = UserTypeId;
    this.typeName = TypeName;
    this.typeDescription = TypeDescription;
  }
}

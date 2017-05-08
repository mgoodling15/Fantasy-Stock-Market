//player class set-up file

export class Player {
  public email: string;
  public username: string;
  public password: string;
  public bio: string;
  constructor(
    userEmail: string,
    userName: string,
    userPassword: string,
    userBio: string
  ) {
      this.email = userEmail;
      this.username = userName;
      this.password = userPassword;
      this.bio = userBio;

    }
}

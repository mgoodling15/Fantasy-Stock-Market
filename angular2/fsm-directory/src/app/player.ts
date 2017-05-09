//player class set-up file

export class Player {
  public email: string;
  public username: string;
  public password: string;
  public bio: string;
  public portfolio: number;
  constructor(
    userEmail: string,
    userName: string,
    userPassword: string,
    userBio: string,
    userPortfolio: number
  ) {
      this.email = userEmail;
      this.username = userName;
      this.password = userPassword;
      this.bio = userBio;
      this.portfolio = userPortfolio
    }
}


<!-- <div> {{diagnostic}} </div> -->
<div id = "add-player"[hidden]="submitted">
  <div class="container">
      <h1>Create Account</h1>
      <form (ngSubmit)="onSubmit(model.email);fbPostPlayer(model.email,
      model.username, model.password, model.bio)" #playerForm="ngForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"
        required
        [(ngModel)]="model.email" name="email"
        #name="ngModel">
        <div [hidden]="name.valid || name.pristine"
        class="alert alert-danger">
        Email is required
        </div>
      </div>

      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username"
        required
        [(ngModel)]="model.username" name="username"
        #name="ngModel">
        <div [hidden]="name.valid || name.pristine"
        class="alert alert-danger">
        Username is required
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" id="password"
        required
        [(ngModel)]="model.password" name="password"
        #name="ngModel">
        <div [hidden]="name.valid || name.pristine"
        class="alert alert-danger">
        Password is required
        </div>
      </div>

    <div class="form-group">
      <label for="bio">Bio</label>
      <input type="text" class="form-control" id="bio"
      required
      [(ngModel)]="model.bio" name="bio"
      #name="ngModel">
      <div [hidden]="name.valid || name.pristine"
      class="alert alert-danger">
      Bio is required
      </div>
    </div>

    <button type="submit" class="btn btn-success"
    [disabled]="!playerForm.form.valid">Submit</button>
    </form>
  </div>
</div>

<div [hidden]="!submitted">
  <h2>You submitted the following:</h2>
  <div class="row">
    <div class="col-xs-3">Email</div>
    <div class="col-xs-9 pull-left">{{ model.email }}</div>
  </div>

  <div class="row">
    <div class="col-xs-3">Username</div>
    <div class="col-xs-9  pull-left">{{ model.username }}</div>
  </div>
  <div class="row">
    <div class="col-xs-3">Password</div>
    <div class="col-xs-9 pull-left">{{ model.password }}</div>
  </div>
  <div class="row">
    <div class="col-xs-3">Bio</div>
    <div class="col-xs-9 pull-left">{{ model.bio }}</div>
  </div>

  <br>
  <button class="btn btn-primary" (click)="submitted=false">Edit</button>
</div>
<div>

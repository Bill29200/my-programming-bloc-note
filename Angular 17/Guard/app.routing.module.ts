const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'', component:LoginComponent},
{path:'menu', component:MenuComponent,
canActivate: [AuthGard],
children : [
{path:'server', component:ServerComponent},
{path:'client', component:ClientComponent},
{path:'about', component:AboutComponent},
{path:'home', component:HomeComponent},
]},



];

import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService(new Router());

  if (!authService.isLoggedIn()) {
    new Router().navigate(['login']);
    return false;
  }
  
  return authService.isLoggedIn();
};

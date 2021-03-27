import { Component, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showBuyerBoard = false;
  username: string;

  title = 'Real Estate';

  constructor(private tokenStorageService: TokenStorageService, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Real Estate nirbhai'},
      {name: 'description', content: 'Real Estate nirbhai'},
      {name: 'robots', content: 'index, follow'}
    ]);

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showBuyerBoard = this.roles.includes('ROLE_BUYER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

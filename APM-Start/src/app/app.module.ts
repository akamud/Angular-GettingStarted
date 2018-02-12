import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { LOCALE_ID, NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProductsComponent } from './products/products.component'
import { ConvertToSpaces } from './convert-to-spaces.pipe'

@NgModule({
  declarations: [AppComponent, ProductsComponent, ConvertToSpaces],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

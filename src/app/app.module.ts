import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//is this correct routing?
//import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { FormComponentComponent } from "./form-component/form-component.component";

@NgModule({
    declarations: [
        AppComponent,

        FormComponentComponent
    ],
    imports: [
        BrowserModule,
        //AppRoutingModule
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
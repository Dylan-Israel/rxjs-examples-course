import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
    selector: 'app-of-tap-pipe',
    templateUrl: './of-tap-pipe.component.html',
    styleUrls: ['./of-tap-pipe.component.scss']
})
export class OfTapPipeComponent {
    tapEx$ = of('Hello World');
}
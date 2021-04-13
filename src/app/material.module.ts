import { NgModule } from '@angular/core'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatDividerModule,
        MatListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule {

}
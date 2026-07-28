import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { pipe } from "rxjs";
import { PipeOperator } from "./pipe-operator/pipe-operator";

export const importsCompartilhados = [
    CommonModule,
    FormsModule,
    PipeOperator
]
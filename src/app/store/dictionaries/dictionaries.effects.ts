import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";

import { AngularFirestore, DocumentChangeAction } from "@angular/fire/compat/firestore";

import { Observable, of , zip } from "rxjs";
import { map , switchMap, catchError, take } from "rxjs/operators";

import * as fromActions from './dictionaries.actions'

type Action = fromActions.All;
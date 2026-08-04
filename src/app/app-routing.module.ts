import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

// ─── Claude: add prototype component imports here ───────────────────────────
import { NavigationBuilderComponent } from './prototypes/navigation-builder-travis/navigation-builder-travis.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // ─── Claude: add prototype routes here ──────────────────────────────────
    { path: 'navigation-builder-travis', component: NavigationBuilderComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

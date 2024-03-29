import { Routes } from '@angular/router';
import { HomeComponent } from './tools/home/home.component';
import { PagoDeCreditosComponent } from './creditos/caja/pago-de-creditos/pago-de-creditos.component';
import { DesembolsoDeCreditosComponent } from './creditos/caja/desembolso-de-creditos/desembolso-de-creditos.component';
import { MantenimientoDeProductosComponent } from './productos/mantenimiento-de-productos/mantenimiento-de-productos.component';
import { TarifariosComponent } from './productos/tarifarios/tarifarios.component';
import { MantenimientoDeClientesComponent } from './clientes/mantenimiento-de-clientes/mantenimiento-de-clientes.component';
import { IngresosPorDiaComponent } from './reportes/ingresos-por-dia/ingresos-por-dia.component';
import { IngresosPorProductoComponent } from './reportes/ingresos-por-producto/ingresos-por-producto.component';
import { IngresosPorClienteComponent } from './reportes/ingresos-por-cliente/ingresos-por-cliente.component';
import { MantenimientoDeFeriadosComponent } from './sistema/mantenimiento-de-feriados/mantenimiento-de-feriados.component';
import { CierreDeSistemaComponent } from './sistema/cierre-de-sistema/cierre-de-sistema.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'creditos/pago-creditos', component: PagoDeCreditosComponent},
    { path: 'creditos/desembolso-creditos', component: DesembolsoDeCreditosComponent},
    { path: 'productos/mantenimiento-de-productos', component: MantenimientoDeProductosComponent},
    { path: 'productos/tarifarios', component: TarifariosComponent},
    { path: 'clientes/mantenimiento-de-clientes', component: MantenimientoDeClientesComponent},
    
    { path: 'reportes/reporte-ingresos-dia', component: IngresosPorDiaComponent},    
    { path: 'reportes/reporte-ingresos-producto', component: IngresosPorProductoComponent},
    { path: 'reportes/reporte-ingresos-cliente', component: IngresosPorClienteComponent},

    { path: 'sistema/mantenimiento-de-feriados', component: MantenimientoDeFeriadosComponent},
    { path: 'sistema/cierre-de-sistema', component: CierreDeSistemaComponent},

];

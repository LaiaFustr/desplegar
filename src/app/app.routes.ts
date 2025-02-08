import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitasComponent } from './citas/citas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BuscarCliComponent } from './clientes/buscar/buscar.component';
import { CrearCliComponent } from './clientes/crear/crear.component';
import { VerTodosCliComponent } from './clientes/ver-todos/ver-todos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BuscarComponent } from './empleados/buscar/buscar.component';
import { CrearComponent } from './empleados/crear/crear.component';
import { VerTodosComponent } from './empleados/ver-todos/ver-todos.component';
import { PerfilEmpleadoComponent } from "./empleados/ver-todos/perfil-empleado/perfil-empleado.component";
import {OpticasComponent} from './opticas/opticas.component';
import { OpticasTablaComponent } from './opticas/opticas-tabla/opticas-tabla.component';
import { OpticaConfigComponent } from './optica-config/optica-config.component';
import { InformacionComponent} from './optica-config/informacion/informacion.component';
import { CalendarioComponent } from './optica-config/calendario/calendario.component';
import { TrabajadoresComponent } from './optica-config/trabajadores/trabajadores.component';


export const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
 path: 'citas',
 component: CitasComponent
},
{
  path: 'clientes',
  component: ClientesComponent,
  children: [
    {
      path: 'buscar',
      component: BuscarCliComponent

    },
    {
      path: 'crear',
      component: CrearCliComponent
    },
    {
      path: 'ver-todos',
      component: VerTodosCliComponent
    }
  ]
},
{
  path: 'empleados',
  component: EmpleadosComponent,
  children: [
    {
      path: 'buscar',
      component: BuscarComponent
    },
    {
      path: 'crear',
      component: CrearComponent
    },
    {
      path: 'ver-todos',
      component: VerTodosComponent,
      children: [{
        path: 'perfil-empleado',
        component: PerfilEmpleadoComponent,
      }]
    }
  ]
},

{
  path: 'opticas',
  component: OpticasComponent,
  children: [
    {
      path: 'opticas-tabla',
      component: OpticasTablaComponent
    }
  ]
},
{
  path: 'optica-config',
  component: OpticaConfigComponent,
  children: [
    {
      path:'',
      redirectTo: 'informacion',
      pathMatch:'full'
    },
    {
      path: 'informacion',
      component: InformacionComponent
    },
    {
      path: 'calendario',
      component: CalendarioComponent
    },
    {
      path: 'trabajadores',
      component: TrabajadoresComponent
    }
  ]
}];

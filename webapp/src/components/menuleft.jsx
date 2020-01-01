import React, { Component } from 'react';
import { Menu } from 'primereact/menu';


export default class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: 'GENERAL',
          items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', url: '/admin' },
          { label: 'Documentation', icon: 'pi pi-fw pi-file', url: '/admin/api' }
          ]
        },

        {
          label: 'CALIBRATION',
          items: [{ label: 'Plots Camera', icon: 'pi pi-fw pi-home', url: '/admin/calibration' },
          { label: 'Master Bias', icon: 'pi pi-fw pi-user', url: '/admin/masterbias' },

          { label: 'Fits', icon: 'pi pi-fw pi-user', url: '/admin/fits' }
          ]
        },
        {
          label: 'DEVICE SENSORS',
          items: [{ label: 'List', icon: 'pi pi-fw pi-home', url: '/admin/device' }
          ]
        },
        {
          label: 'STRATEGIES',
          items: [{ label: 'List (New or modify)', icon: 'pi pi-fw pi-home', url: '/admin/strategie' }

          ]
        },
        {
          label: 'OBSERVATIONS',
          items: [{ label: 'List of JSON', icon: 'pi pi-fw pi-home', url: '/admin/observation' },
          { label: 'PLANNING', icon: 'pi pi-fw pi-user', url: '/' }
          ]
        },
                {
          label: 'Test',
          items: [          { label: 'test', icon: 'pi pi-fw pi-home', url: '/admin/test' },
          { label: 'Produits Fireflies', icon: 'pi pi-fw pi-user', url: '/admin/fireflies' }
          ]
        },
      ]
    };
  }

  render() {
    return (
      <div className="layout-menu">
        <Menu model={this.state.items} />
      </div>
    );
  }
}


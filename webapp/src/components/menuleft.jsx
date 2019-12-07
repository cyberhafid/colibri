import React, { Component } from 'react';
import { Menu } from 'primereact/menu';


export default class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: 'GENERAL',
          items: []
        },

        {
          label: 'CALIBRATION',
          items: [{ label: 'Plots Camera', icon: 'pi pi-fw pi-home', url: '/admin/calibration' },
          { label: 'Historique', icon: 'pi pi-fw pi-user', url: '/' },
          { label: 'Master Bias', icon: 'pi pi-fw pi-user', url: '/admin/masterbias' }
          ]
        },
        {
          label: 'DEVICE SENSORS',
          items: [{ label: 'List', icon: 'pi pi-fw pi-home', url: '/admin/device' },
          { label: 'Alert', icon: 'pi pi-fw pi-user', url: '/' }
          ]
        },
        {
          label: 'STRATEGIES',
          items: [{ label: 'List', icon: 'pi pi-fw pi-home', url: '/' },
          { label: 'New', icon: 'pi pi-fw pi-user', url: '/' },
          { label: 'Modify', icon: 'pi pi-fw pi-user', url: '/' },

          ]
        },
        {
          label: 'OBSERVATIONS',
          items: [{ label: 'List of JSON', icon: 'pi pi-fw pi-home', url: '/' },
          { label: 'PLANNING', icon: 'pi pi-fw pi-user', url: '/' }
          ]
        },


        {
          label: 'DOCUMENTATION',
          items: [{ label: 'Documentation', icon: 'pi pi-fw pi-file', url: '/admin/api' },
            { label: 'Graphique', icon: 'pi pi-fw pi-file', url: '/admin/graphique' }
          ]
        },
        {
          label: 'Account',
          items: [{ label: 'Configuration', icon: 'pi pi-fw pi-cog', command: () => { props.history.push('/admin/config'); } },
          { label: 'Sign Out', icon: 'pi pi-fw pi-power-off', command: () => { props.logout(); } }]
        },
        {
          label: 'OUTILS',
          items: [{ label: 'List', icon: 'pi pi-fw pi-home', url: '/admin' },
          { label: 'Alert', icon: 'pi pi-fw pi-user', url: '/admin/users' }
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


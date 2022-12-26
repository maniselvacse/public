interface Scripts {
    name: string;
    src: string;
    defer?: Boolean;
}
interface Links {
    name: String;
    rel: string;
    type: string;
    href: string;
}


export const LinkStore: Links[] = [
    {name: "sweetAlert", rel: "stylesheet", type:"text/css", href:"app-assets/vendors/sweetalert/sweetalert.css"},
    {name: "flagIcon", rel: "stylesheet", type:"text/css", href:"app-assets/vendors/flag-icon/css/flag-icon.min.css"},
    {name: "jqueryDataTables", rel: "stylesheet", type:"text/css", href:"app-assets/vendors/data-tables/css/jquery.dataTables.min.css"},
    {name: "responsiveDataTables", rel: "stylesheet", type:"text/css", href:"app-assets/vendors/data-tables/extensions/responsive/css/responsive.dataTables.min.css"},
    {name: "selectDataTables", rel: "stylesheet", type:"text/css", href:"app-assets/vendors/data-tables/css/select.dataTables.min.css"},
    {name: "dataTables", rel: "stylesheet", type:"text/css", href:"app-assets/css/pages/data-tables.min.css"},
    {name: "dashboard", rel: "stylesheet", type:"text/css", href:"app-assets/css/pages/dashboard.min.css"},
];

export const ScriptStore: Scripts[] = [
    {name: 'chart', src: 'app-assets/vendors/chartjs/chart.min.js'},
    {name: 'plugins', src: 'app-assets/js/plugins.min.js'},
    {name: 'search', src: 'app-assets/js/search.min.js'},
    {name: 'custom', src: 'app-assets/js/custom/custom-script.min.js'},
    {name: 'customizer', src: 'app-assets/js/scripts/customizer.min.js'},
    {name: 'uiAlerts', src: 'app-assets/js/scripts/ui-alerts.min.js'},
    {name: 'dashboardEcommerce', src: 'app-assets/js/scripts/dashboard-ecommerce.min.js'},
    {name: 'jqueryDataTables', src: 'app-assets/vendors/data-tables/js/jquery.dataTables.min.js'},
    {name: 'dataTableResponsive', src: 'app-assets/vendors/data-tables/extensions/responsive/js/dataTables.responsive.min.js', defer: true},
    {name: 'dataTableSelect', src: 'app-assets/vendors/data-tables/js/dataTables.select.min.js', defer: true},
    {name: 'dataTables', src: 'app-assets/js/scripts/data-tables.min.js'},
    {name: 'sweetAlert', src: 'app-assets/vendors/sweetalert/sweetalert.min.js'},
    {name: 'sweetAlertExtraComponents', src: 'app-assets/js/scripts/extra-components-sweetalert.min.js'},
];
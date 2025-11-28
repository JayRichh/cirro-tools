// CIRRO Dark Mode - Fast toggle using CSS class
// Styles are injected once, toggling just adds/removes html.dark-mode class

const darkModeStyles = `
  /* All styles only apply when html has dark-mode class */
  html.dark-mode {
    --dm-bg-main: #1e1e1e;
    --dm-bg-elevated: #252526;
    --dm-bg-input: #3c3c3c;
    --dm-bg-hover: #2a2d2e;
    --dm-border: #454545;
    --dm-text: #d4d4d4;
    --dm-text-bright: #ffffff;
    --dm-text-muted: #909090;
    --dm-brand: #00bedf;
    --dm-focus: #007acc;
  }

  /* BASE ELEMENTS */
  html.dark-mode body,
  html.dark-mode html,
  html.dark-mode body *,
  html.dark-mode html * {
    color: var(--dm-text) !important;
  }

  html.dark-mode body,
  html.dark-mode #body,
  html.dark-mode .wrapper,
  html.dark-mode .content-wrapper,
  html.dark-mode .main-content,
  html.dark-mode .page-content {
    background-color: var(--dm-bg-main) !important;
  }

  /* NAVIGATION & HEADERS */
  html.dark-mode .main-header,
  html.dark-mode .navbar,
  html.dark-mode .navbar-default,
  html.dark-mode .navbar-inverse,
  html.dark-mode .topnav,
  html.dark-mode .navbar-brand-box,
  html.dark-mode header {
    background-color: #181818 !important;
    border-bottom: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .navbar-nav .nav-link,
  html.dark-mode .nav-item .nav-link,
  html.dark-mode .navbar-menu .navbar-nav .nav-link,
  html.dark-mode .topnav ul li a,
  html.dark-mode .menu-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
  }

  html.dark-mode .navbar-nav .nav-link:hover,
  html.dark-mode .navbar-menu .navbar-nav .nav-link:hover,
  html.dark-mode .nav-link:hover,
  html.dark-mode .nav-link.active {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  html.dark-mode .main-sidebar,
  html.dark-mode .left-side,
  html.dark-mode .sidebar,
  html.dark-mode .navbar-menu {
    background-color: var(--dm-bg-elevated) !important;
    border-right: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .sidebar-menu > li > a,
  html.dark-mode .nav-sm .nav-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
  }

  html.dark-mode .sidebar-menu > li:hover > a,
  html.dark-mode .sidebar-menu > li.active > a,
  html.dark-mode .nav-sm .nav-link.active,
  html.dark-mode .nav-sm .nav-link:hover {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  /* TYPOGRAPHY */
  html.dark-mode h1, html.dark-mode h2, html.dark-mode h3,
  html.dark-mode h4, html.dark-mode h5, html.dark-mode h6,
  html.dark-mode .h1, html.dark-mode .h2, html.dark-mode .h3,
  html.dark-mode .h4, html.dark-mode .h5, html.dark-mode .h6,
  html.dark-mode p, html.dark-mode span, html.dark-mode div,
  html.dark-mode label, html.dark-mode strong, html.dark-mode b,
  html.dark-mode em, html.dark-mode i, html.dark-mode small,
  html.dark-mode .card-title, html.dark-mode .modal-title,
  html.dark-mode .page-title, html.dark-mode th, html.dark-mode .table th {
    color: var(--dm-text) !important;
  }

  html.dark-mode h1, html.dark-mode h2, html.dark-mode h3,
  html.dark-mode h4, html.dark-mode h5, html.dark-mode h6,
  html.dark-mode .h1, html.dark-mode .h2, html.dark-mode .h3,
  html.dark-mode .h4, html.dark-mode .h5, html.dark-mode .h6,
  html.dark-mode strong, html.dark-mode b,
  html.dark-mode .font-weight-bold, html.dark-mode th {
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .text-muted,
  html.dark-mode .text-secondary,
  html.dark-mode small,
  html.dark-mode .small {
    color: var(--dm-text-muted) !important;
  }

  html.dark-mode a,
  html.dark-mode .btn-link,
  html.dark-mode a.nav-link {
    color: var(--dm-brand) !important;
  }

  html.dark-mode a:hover {
    color: #00a0be !important;
  }

  /* CARDS & CONTAINERS */
  html.dark-mode .card, html.dark-mode .panel, html.dark-mode .well,
  html.dark-mode .box, html.dark-mode .modal-content,
  html.dark-mode .infoholder, html.dark-mode .credentials,
  html.dark-mode .card-block {
    background-color: var(--dm-bg-main) !important;
    border: 1px solid var(--dm-border) !important;
    box-shadow: none !important;
  }

  html.dark-mode .card-header, html.dark-mode .panel-heading,
  html.dark-mode .box-header, html.dark-mode .modal-header,
  html.dark-mode .modal-footer {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .card-body, html.dark-mode .panel-body,
  html.dark-mode .box-body, html.dark-mode .modal-body {
    background-color: var(--dm-bg-main) !important;
  }

  /* FORMS & INPUTS */
  html.dark-mode input, html.dark-mode select, html.dark-mode textarea,
  html.dark-mode .form-control, html.dark-mode input[type="text"],
  html.dark-mode input[type="email"], html.dark-mode input[type="password"],
  html.dark-mode input[type="number"], html.dark-mode input[type="search"],
  html.dark-mode input[type="tel"], html.dark-mode .input-group-addon,
  html.dark-mode .form-select, html.dark-mode #map-filter-search-desktop {
    background-color: var(--dm-bg-input) !important;
    border: 1px solid var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode input::placeholder,
  html.dark-mode textarea::placeholder {
    color: var(--dm-text-muted) !important;
    opacity: 1 !important;
  }

  html.dark-mode input:focus, html.dark-mode select:focus,
  html.dark-mode textarea:focus, html.dark-mode .form-control:focus {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-focus) !important;
    outline: 1px solid var(--dm-focus) !important;
  }

  /* React-Select */
  html.dark-mode .Select, html.dark-mode .Select-control,
  html.dark-mode .select__control, html.dark-mode .css-control {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
  }

  html.dark-mode .Select-placeholder, html.dark-mode .Select-value,
  html.dark-mode .Select-value-label, html.dark-mode .select__placeholder,
  html.dark-mode .select__single-value {
    color: var(--dm-text) !important;
  }

  html.dark-mode .Select-input, html.dark-mode .Select-input input,
  html.dark-mode .select__input input {
    background-color: transparent !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .Select-input input:focus,
  html.dark-mode .select__input input:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }

  html.dark-mode .Select-menu-outer, html.dark-mode .Select-menu,
  html.dark-mode .select__menu, html.dark-mode .select__menu-list {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  }

  html.dark-mode .Select-option, html.dark-mode .select__option {
    background-color: transparent !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .Select-option:hover,
  html.dark-mode .Select-option.is-focused,
  html.dark-mode .select__option--is-focused {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .Select-option.is-selected,
  html.dark-mode .select__option--is-selected {
    background-color: rgba(0, 122, 204, 0.3) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .Select-arrow-zone, html.dark-mode .Select-arrow,
  html.dark-mode .select__dropdown-indicator, html.dark-mode .select__indicator {
    color: var(--dm-text-muted) !important;
  }

  /* Kendo UI */
  html.dark-mode .k-dropdown, html.dark-mode .k-dropdown-wrap,
  html.dark-mode .k-picker-wrap, html.dark-mode .k-multiselect-wrap,
  html.dark-mode .k-textbox, html.dark-mode .k-input,
  html.dark-mode .k-dateinput, html.dark-mode .k-numerictextbox,
  html.dark-mode .k-combobox {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .k-select, html.dark-mode .k-input-button,
  html.dark-mode button.k-button.k-select {
    background-color: var(--dm-bg-input) !important;
    border-left: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .k-input-inner, html.dark-mode .k-input-value-text {
    background-color: transparent !important;
    color: var(--dm-text-bright) !important;
    border: none !important;
  }

  html.dark-mode .k-list-container, html.dark-mode .k-list,
  html.dark-mode .k-list-scroller, html.dark-mode .k-popup,
  html.dark-mode .k-animation-container {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  }

  html.dark-mode .k-item, html.dark-mode .k-list-item {
    background-color: transparent !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .k-item:hover, html.dark-mode .k-item.k-state-hover,
  html.dark-mode .k-item.k-state-selected, html.dark-mode .k-list-item.k-selected {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  /* BUTTONS */
  html.dark-mode .btn-default, html.dark-mode .btn-secondary,
  html.dark-mode .btn-light {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .btn-default:hover, html.dark-mode .btn-secondary:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  html.dark-mode .btn-primary, html.dark-mode .btn-primary-cirro {
    background-color: var(--dm-focus) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode .btn-primary:hover, html.dark-mode .btn-primary-cirro:hover {
    background-color: #005f9e !important;
  }

  /* TABLES & GRIDS */
  html.dark-mode table, html.dark-mode .table,
  html.dark-mode .k-grid, html.dark-mode .k-grid-container,
  html.dark-mode .k-grid-content, html.dark-mode .k-virtual-content {
    background-color: var(--dm-bg-main) !important;
    border-color: var(--dm-border) !important;
  }

  html.dark-mode th, html.dark-mode thead th, html.dark-mode .table thead th,
  html.dark-mode .k-grid-header, html.dark-mode .k-grid-header-wrap,
  html.dark-mode .k-grid-header th, html.dark-mode .k-header,
  html.dark-mode .k-grouping-header, html.dark-mode .k-filter-row th,
  html.dark-mode .k-grid-header .k-header {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  html.dark-mode td, html.dark-mode tbody td, html.dark-mode .table tbody td {
    background-color: transparent !important;
    border-color: var(--dm-border) !important;
  }

  html.dark-mode tr, html.dark-mode tbody tr, html.dark-mode .k-grid tr,
  html.dark-mode .k-master-row {
    background-color: var(--dm-bg-main) !important;
    background-image: none !important;
    border-color: var(--dm-border) !important;
  }

  html.dark-mode .k-alt, html.dark-mode .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.04) !important;
  }

  html.dark-mode tr:hover, html.dark-mode tbody tr:hover,
  html.dark-mode .k-grid tr:hover, html.dark-mode .k-grid tr.k-state-hover,
  html.dark-mode .k-grid td.k-state-focused,
  html.dark-mode .k-grid tr:hover td,
  html.dark-mode .k-grid tr.k-state-hover td {
    background-color: var(--dm-bg-hover) !important;
    background-image: none !important;
  }

  /* CSV UPLOAD & DROPZONE */
  html.dark-mode .bg-lightgreytwo,
  html.dark-mode .border.rounded.bg-lightgreytwo {
    background-color: var(--dm-bg-main) !important;
    border-color: var(--dm-border) !important;
  }

  html.dark-mode .dropzone-custom,
  html.dark-mode .dropzone-custom .bg-white,
  html.dark-mode .dropzone-custom .p-5.rounded.bg-white {
    background-color: var(--dm-bg-input) !important;
    border: 2px dashed var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .dropzone-custom:hover {
    background-color: var(--dm-bg-hover) !important;
    border-color: var(--dm-brand) !important;
  }

  html.dark-mode .dropzone-custom svg,
  html.dark-mode .dropzone-custom .eggblue {
    color: var(--dm-brand) !important;
    fill: var(--dm-brand) !important;
  }

  /* ASIDE MENU */
  html.dark-mode .tt-aside-menu,
  html.dark-mode .tt-aside-content,
  html.dark-mode .expand-content {
    background-color: var(--dm-bg-elevated) !important;
    border-left: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .expand-arrow {
    background-color: var(--dm-bg-elevated) !important;
    border: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .expand-arrow:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  html.dark-mode .expand-arrow-style,
  html.dark-mode .expand-arrow svg {
    fill: var(--dm-text) !important;
    stroke: var(--dm-text) !important;
  }

  html.dark-mode .tt-aside-menu .btn,
  html.dark-mode .tt-aside-menu .map-filter-button {
    background-color: var(--dm-focus) !important;
    color: var(--dm-text-bright) !important;
  }

  /* TABS */
  html.dark-mode .nav-tabs {
    background-color: transparent !important;
    border-bottom: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .nav-tabs .nav-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
    border: none !important;
  }

  html.dark-mode .nav-tabs .nav-link:hover {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  html.dark-mode .nav-tabs .nav-link.active {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-main) !important;
    border-bottom: 2px solid var(--dm-brand) !important;
  }

  /* DROPDOWNS */
  html.dark-mode .dropdown-menu, html.dark-mode .popover,
  html.dark-mode .tooltip-inner {
    background-color: var(--dm-bg-elevated) !important;
    border: 1px solid var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .dropdown-item, html.dark-mode .dropdown-menu > li > a {
    color: var(--dm-text) !important;
    background-color: transparent !important;
  }

  html.dark-mode .dropdown-item:hover, html.dark-mode .dropdown-item:focus {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  /* CHARTS (Highcharts) */
  html.dark-mode .highcharts-container, html.dark-mode .highcharts-root {
    background-color: transparent !important;
  }

  html.dark-mode .highcharts-background {
    fill: var(--dm-bg-main) !important;
  }

  html.dark-mode .highcharts-plot-background,
  html.dark-mode .highcharts-plot-border {
    fill: transparent !important;
    stroke: var(--dm-border) !important;
  }

  html.dark-mode .highcharts-title, html.dark-mode .highcharts-subtitle,
  html.dark-mode .highcharts-axis-title, html.dark-mode .highcharts-axis-labels text,
  html.dark-mode .highcharts-legend-item text, html.dark-mode .highcharts-label text,
  html.dark-mode .highcharts-data-label text, html.dark-mode .highcharts-text-outline,
  html.dark-mode .highcharts-credits text {
    fill: var(--dm-text) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .highcharts-title, html.dark-mode .highcharts-subtitle {
    fill: var(--dm-text-bright) !important;
  }

  html.dark-mode .highcharts-axis-line, html.dark-mode .highcharts-tick {
    stroke: var(--dm-border) !important;
  }

  html.dark-mode .highcharts-grid-line {
    stroke: rgba(255, 255, 255, 0.08) !important;
  }

  html.dark-mode .highcharts-tooltip-box, html.dark-mode .highcharts-label-box {
    fill: var(--dm-bg-elevated) !important;
    stroke: var(--dm-border) !important;
  }

  /* LEAFLET MAPS */
  html.dark-mode .leaflet-container {
    background-color: var(--dm-bg-main) !important;
  }

  html.dark-mode .leaflet-bar, html.dark-mode .leaflet-control-layers,
  html.dark-mode .leaflet-control-zoom-in, html.dark-mode .leaflet-control-zoom-out {
    background-color: var(--dm-bg-elevated) !important;
    border: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .leaflet-bar a, html.dark-mode .leaflet-bar button {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text) !important;
    border-bottom: 1px solid var(--dm-border) !important;
  }

  html.dark-mode .filter-show-on-map, html.dark-mode ul.legend,
  html.dark-mode .legend {
    background-color: rgba(37, 37, 38, 0.95) !important;
    border: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  html.dark-mode .filter-show-on-map *, html.dark-mode .legend * {
    color: var(--dm-text) !important;
  }

  /* FOOTER */
  html.dark-mode footer, html.dark-mode .main-footer,
  html.dark-mode .footer-class {
    background-color: #181818 !important;
    border-top: 1px solid var(--dm-border) !important;
    color: var(--dm-text-muted) !important;
  }

  /* ICONS & LOGOS */
  html.dark-mode i, html.dark-mode i[class*="fa-"],
  html.dark-mode .fa, html.dark-mode .fas, html.dark-mode .far {
    color: var(--dm-text) !important;
  }

  html.dark-mode .active i, html.dark-mode .active .icon,
  html.dark-mode a:hover i {
    color: var(--dm-brand) !important;
  }

  html.dark-mode .icon-cirro, html.dark-mode .nav-link::before,
  html.dark-mode .icon-settings, html.dark-mode span[class*="icon-"] {
    filter: invert(1) brightness(1.8) !important;
    opacity: 0.9 !important;
  }

  html.dark-mode .logo-dark, html.dark-mode img[src*="logo-dark"] {
    filter: invert(53%) sepia(83%) saturate(2256%) hue-rotate(155deg) brightness(95%) contrast(101%) !important;
  }

  html.dark-mode .logo-light, html.dark-mode img[src*="logo-light"] {
    filter: none !important;
    opacity: 1 !important;
  }

  html.dark-mode .navbar-brand img, html.dark-mode .logo-lg img {
    filter: invert(53%) sepia(83%) saturate(2256%) hue-rotate(155deg) brightness(95%) contrast(101%) !important;
  }

  html.dark-mode img[src*="icon"], html.dark-mode .icon-holder img {
    filter: invert(1) brightness(1.3) !important;
  }

  html.dark-mode svg, html.dark-mode svg path {
    fill: var(--dm-text) !important;
  }

  html.dark-mode .text-primary svg, html.dark-mode .eggblue svg {
    fill: var(--dm-brand) !important;
  }

  /* MISC */
  html.dark-mode .text-success, html.dark-mode .text-green {
    color: #4ec9b0 !important;
  }

  html.dark-mode .text-danger, html.dark-mode .text-red {
    color: #f48771 !important;
  }

  html.dark-mode .text-warning, html.dark-mode .text-yellow {
    color: #dcdcaa !important;
  }

  html.dark-mode .bg-white:not(.dropzone-custom .bg-white),
  html.dark-mode .bg-light {
    background-color: var(--dm-bg-main) !important;
  }
`;

const STYLE_ID = "cirro-dark-mode-style";

// Inject styles once at page load - they won't apply until html.dark-mode class is added
const injectStyles = () => {
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = darkModeStyles;
    // Use documentElement (html tag) as fallback if head isn't ready yet (run_at: document_start)
    (document.head || document.documentElement).appendChild(style);
  }
};

// FAST toggle - just add/remove class, no DOM manipulation
const toggleDarkMode = (enable: boolean) => {
  if (enable) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
};

// Inject styles immediately (once)
injectStyles();

// Listen for toggle messages from popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "TOGGLE_DARK_MODE") {
    toggleDarkMode(msg.darkMode);
    sendResponse({ success: true });
  }
  return true;
});

// Apply initial state on page load
chrome.storage.local.get(["darkMode"], (result) => {
  if (result.darkMode) {
    toggleDarkMode(true);
  }
});

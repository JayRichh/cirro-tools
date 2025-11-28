// CIRRO Dark Mode - Comprehensive Override
const darkModeStyles = `
  /* ============================================================================
     FORCE DARK MODE - AGGRESSIVE OVERRIDES
     ============================================================================ */
  
  /* Core Variables */
  :root {
    --dm-bg-main: #1e1e1e !important;
    --dm-bg-elevated: #252526 !important;
    --dm-bg-input: #3c3c3c !important;
    --dm-bg-hover: #2a2d2e !important;
    --dm-border: #454545 !important;
    --dm-text: #d4d4d4 !important;
    --dm-text-bright: #ffffff !important;
    --dm-text-muted: #909090 !important;
    --dm-brand: #00bedf !important;
    --dm-focus: #007acc !important;
  }

  /* ============================================================================
     BASE ELEMENTS - FORCE LIGHT TEXT
     ============================================================================ */
  body, html, body *, html * {
    color: var(--dm-text) !important;
  }

  body, html, #body, .wrapper, .content-wrapper, .main-content, .page-content {
    background-color: var(--dm-bg-main) !important;
    color: var(--dm-text) !important;
  }

  /* ============================================================================
     NAVIGATION & HEADERS
     ============================================================================ */
  .main-header, .navbar, .navbar-default, .navbar-inverse, 
  .topnav, .navbar-brand-box, header {
    background-color: #181818 !important;
    border-bottom: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .navbar-nav .nav-link, .nav-item .nav-link,
  .navbar-menu .navbar-nav .nav-link,
  .topnav ul li a, .menu-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
  }

  .navbar-nav .nav-link:hover,
  .navbar-menu .navbar-nav .nav-link:hover,
  .nav-link:hover, .nav-link.active {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  /* Sidebar */
  .main-sidebar, .left-side, .sidebar, .navbar-menu {
    background-color: var(--dm-bg-elevated) !important;
    border-right: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .sidebar-menu > li > a, .nav-sm .nav-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
  }

  .sidebar-menu > li:hover > a, 
  .sidebar-menu > li.active > a,
  .nav-sm .nav-link.active,
  .nav-sm .nav-link:hover {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  /* ============================================================================
     TYPOGRAPHY - FORCE VISIBLE TEXT
     ============================================================================ */
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6,
  p, span, div, label, strong, b, em, i, small,
  .card-title, .modal-title, .page-title, th, .table th {
    color: var(--dm-text) !important;
  }

  /* Headings brighter */
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6,
  strong, b, .font-weight-bold, th {
    color: var(--dm-text-bright) !important;
  }

  /* Muted text */
  .text-muted, .text-secondary, small, .small {
    color: var(--dm-text-muted) !important;
  }

  /* Brand links */
  a, .btn-link, a.nav-link {
    color: var(--dm-brand) !important;
  }

  a:hover {
    color: #00a0be !important;
  }

  /* ============================================================================
     CARDS, PANELS & CONTAINERS
     ============================================================================ */
  .card, .panel, .well, .box, .modal-content,
  .infoholder, .credentials, .card-block {
    background-color: var(--dm-bg-main) !important;
    border: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
    box-shadow: none !important;
  }

  .card-header, .panel-heading, .box-header,
  .modal-header, .modal-footer {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  .card-body, .panel-body, .box-body, .modal-body {
    background-color: var(--dm-bg-main) !important;
    color: var(--dm-text) !important;
  }

  /* ============================================================================
     FORMS & INPUTS - CRITICAL FIX
     ============================================================================ */
  input, select, textarea, .form-control,
  input[type="text"], input[type="email"], input[type="password"],
  input[type="number"], input[type="search"], input[type="tel"],
  .input-group-addon, .form-select {
    background-color: var(--dm-bg-input) !important;
    border: 1px solid var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  input::placeholder, textarea::placeholder {
    color: var(--dm-text-muted) !important;
    opacity: 1 !important;
  }

  input:focus, select:focus, textarea:focus, .form-control:focus {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-focus) !important;
    color: var(--dm-text-bright) !important;
    outline: 1px solid var(--dm-focus) !important;
  }

  /* React-Select Components - CRITICAL FIX */
  .Select, .Select-control, 
  .select__control, .css-control {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  .Select-control:hover {
    border-color: var(--dm-border) !important;
  }

  /* React-Select placeholder and values */
  .Select-placeholder,
  .Select-value,
  .Select-value-label,
  .select__placeholder,
  .select__single-value {
    color: var(--dm-text) !important;
  }

  /* React-Select input field */
  .Select-input,
  .Select-input input,
  .select__input input {
    background-color: transparent !important;
    color: var(--dm-text-bright) !important;
  }

  /* Remove black focus line */
  .Select-input input:focus,
  .select__input input:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }

  /* React-Select dropdown menu */
  .Select-menu-outer,
  .Select-menu,
  .select__menu,
  .select__menu-list {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  }

  /* React-Select options */
  .Select-option,
  .select__option {
    background-color: transparent !important;
    color: var(--dm-text) !important;
  }

  .Select-option:hover,
  .Select-option.is-focused,
  .select__option--is-focused {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  .Select-option.is-selected,
  .select__option--is-selected {
    background-color: rgba(0, 122, 204, 0.3) !important;
    color: var(--dm-text-bright) !important;
  }

  /* React-Select no results */
  .Select-noresults,
  .select__menu-notice {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text-muted) !important;
  }

  /* React-Select arrow */
  .Select-arrow-zone,
  .Select-arrow,
  .select__dropdown-indicator,
  .select__indicator {
    color: var(--dm-text-muted) !important;
  }

  /* React-Select clear button */
  .Select-clear-zone,
  .Select-clear,
  .select__clear-indicator {
    color: var(--dm-text-muted) !important;
  }

  .Select-clear:hover,
  .select__clear-indicator:hover {
    color: var(--dm-text-bright) !important;
  }

  /* React-Select multi-value (tags) */
  .Select-value,
  .select__multi-value {
    background-color: var(--dm-bg-hover) !important;
    border-color: var(--dm-border) !important;
  }

  .Select-value-icon,
  .select__multi-value__remove {
    background-color: transparent !important;
    color: var(--dm-text-muted) !important;
    border-right: 1px solid var(--dm-border) !important;
  }

  .Select-value-icon:hover,
  .select__multi-value__remove:hover {
    background-color: rgba(255, 77, 79, 0.3) !important;
    color: var(--dm-text-bright) !important;
  }

  /* React-Select loading indicator */
  .Select-loading-zone,
  .Select-loading,
  .select__loading-indicator {
    color: var(--dm-brand) !important;
  }

  /* Kendo Dropdowns & Pickers - COMPREHENSIVE */
  .k-dropdown, .k-dropdown-wrap, .k-picker-wrap,
  .k-multiselect-wrap, .k-textbox, .k-input,
  .k-dateinput, .k-numerictextbox, .k-combobox {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  /* Kendo Select Button (dropdown arrow area) */
  .k-select, .k-input-button, button.k-button.k-select {
    background-color: var(--dm-bg-input) !important;
    border-left: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .k-select:hover, .k-input-button:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  /* Kendo Input Inner (the actual text input area) */
  .k-input-inner, .k-input-value-text {
    background-color: transparent !important;
    color: var(--dm-text-bright) !important;
    border: none !important;
  }

  /* Kendo Dropdown Lists */
  .k-list-container, .k-list, .k-list-scroller,
  .k-popup, .k-animation-container {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  }

  .k-item, .k-list-item {
    background-color: transparent !important;
    color: var(--dm-text) !important;
  }

  .k-item:hover, .k-item.k-state-hover,
  .k-item.k-state-selected, .k-list-item.k-selected {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  /* Kendo Icons inside controls */
  .k-icon, .k-svg-icon {
    color: var(--dm-text-muted) !important;
  }

  /* ============================================================================
     BUTTONS
     ============================================================================ */
  .btn {
    border: 1px solid transparent !important;
    font-weight: 400 !important;
  }

  .btn-default, .btn-secondary, .btn-light {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .btn-default:hover, .btn-secondary:hover {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  .btn-primary, .btn-primary-cirro {
    background-color: var(--dm-focus) !important;
    color: var(--dm-text-bright) !important;
  }

  .btn-primary:hover, .btn-primary-cirro:hover {
    background-color: #005f9e !important;
  }

  /* ============================================================================
     TABLES & GRIDS - CRITICAL FIX
     ============================================================================ */
  table, .table, .k-grid, .k-grid-container {
    background-color: var(--dm-bg-main) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  /* Headers */
  th, thead th, .table thead th,
  .k-grid-header, .k-grid-header-wrap,
  .k-grid-header th, .k-header {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
    font-weight: 600 !important;
  }

  .k-grid-header .k-link {
    color: var(--dm-text-bright) !important;
  }

  /* Cells */
  td, tbody td, .table tbody td,
  .k-grid-content, .k-grid-content td,
  .k-grid-table td {
    background-color: transparent !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  /* Rows - CRITICAL FIX - Super specific selectors */
  tr, tbody tr, .k-grid tr,
  .k-master-row, 
  .k-grid .k-master-row,
  .k-grid-content tr,
  .k-grid-content tbody tr,
  .k-grid-table tbody tr,
  table.k-grid-table tbody tr {
    background-color: var(--dm-bg-main) !important;
    border-color: var(--dm-border) !important;
  }

  /* Force all non-alt rows to have dark background */
  .k-grid tbody > tr:not(.k-alt),
  .k-grid-content tbody > tr:not(.k-alt),
  .k-grid-table tbody > tr:not(.k-alt) {
    background-color: var(--dm-bg-main) !important;
  }

  /* Alternate rows */
  .table-striped tbody tr:nth-of-type(odd),
  .k-alt, 
  .k-grid tr.k-alt,
  .k-master-row.k-alt, 
  .k-grid .k-master-row.k-alt,
  .k-grid tbody > tr.k-alt,
  .k-grid-content tr.k-alt,
  .k-grid-table tbody tr.k-alt {
    background-color: rgba(255, 255, 255, 0.03) !important;
  }

  /* Hover states */
  tr:hover, tbody tr:hover, .table-hover tbody tr:hover,
  .k-grid tr:hover,
  .k-master-row:hover, 
  .k-grid .k-master-row:hover,
  .k-grid-content tr:hover,
  .k-grid-table tbody tr:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  tr:hover td, tbody tr:hover td,
  .k-grid tr:hover td,
  .k-master-row:hover td,
  .k-grid-content tr:hover td,
  .k-grid-table tbody tr:hover td {
    background-color: transparent !important;
  }

  /* Force remove any white/light backgrounds from grid rows */
  .k-grid tbody tr[style*="background"],
  .k-grid-content tbody tr[style*="background"],
  .k-grid-table tbody tr[style*="background"] {
    background-color: var(--dm-bg-main) !important;
  }

  .k-grid tbody tr.k-alt[style*="background"],
  .k-grid-content tbody tr.k-alt[style*="background"] {
    background-color: rgba(255, 255, 255, 0.03) !important;
  }

  /* Kendo Grid No Records Message */
  .k-grid-norecords,
  .k-grid-norecords td,
  .k-grid .k-grid-norecords {
    background-color: var(--dm-bg-main) !important;
    color: var(--dm-text-muted) !important;
    border-color: var(--dm-border) !important;
  }

  .k-grid-norecords-template {
    background-color: transparent !important;
    color: var(--dm-text-muted) !important;
  }

  /* Pager */
  .k-pager-wrap, .k-grid-pager, .pagination {
    background-color: var(--dm-bg-elevated) !important;
    border-top: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .k-pager-numbers .k-link, .page-link {
    color: var(--dm-text) !important;
    background-color: transparent !important;
  }

  .k-pager-numbers .k-state-selected,
  .page-item.active .page-link {
    color: var(--dm-focus) !important;
    border-color: var(--dm-focus) !important;
    background-color: rgba(0, 122, 204, 0.2) !important;
  }

  /* Kendo Grid Grouping */
  .k-grouping-header, .k-grouping-row {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text) !important;
    border-color: var(--dm-border) !important;
  }

  .k-group-cell, .k-group-col {
    background-color: var(--dm-bg-elevated) !important;
  }

  .k-grouping-dropclue {
    background-color: var(--dm-brand) !important;
  }

  /* Kendo Toolbar */
  .k-toolbar, .k-grid-toolbar {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  .k-toolbar .k-button, .k-grid-toolbar .k-button {
    background-color: var(--dm-bg-input) !important;
    color: var(--dm-text) !important;
    border-color: var(--dm-border) !important;
  }

  .k-toolbar .k-button:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  /* ============================================================================
     TABS
     ============================================================================ */
  .nav-tabs {
    background-color: transparent !important;
    border-bottom: 1px solid var(--dm-border) !important;
  }

  .nav-tabs .nav-link {
    color: var(--dm-text-muted) !important;
    background-color: transparent !important;
    border: none !important;
  }

  .nav-tabs .nav-link:hover {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-hover) !important;
  }

  .nav-tabs .nav-link.active {
    color: var(--dm-text-bright) !important;
    background-color: var(--dm-bg-main) !important;
    border-bottom: 2px solid var(--dm-brand) !important;
  }

  /* ============================================================================
     DROPDOWNS & MENUS
     ============================================================================ */
  .dropdown-menu, .popover, .tooltip-inner {
    background-color: var(--dm-bg-elevated) !important;
    border: 1px solid var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
    color: var(--dm-text) !important;
  }

  .dropdown-item, .dropdown-menu > li > a {
    color: var(--dm-text) !important;
    background-color: transparent !important;
  }

  .dropdown-item:hover, .dropdown-item:focus {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  /* ============================================================================
     CHARTS (Highcharts) - COMPREHENSIVE DARK MODE
     ============================================================================ */
  
  /* Chart Container & Backgrounds */
  .highcharts-container, 
  .highcharts-root {
    background-color: transparent !important;
  }

  .highcharts-background {
    fill: var(--dm-bg-main) !important;
  }

  .highcharts-plot-background,
  .highcharts-plot-border {
    fill: transparent !important;
    stroke: var(--dm-border) !important;
  }

  /* All Text Elements - Force Visible */
  .highcharts-title, 
  .highcharts-subtitle,
  .highcharts-axis-title, 
  .highcharts-axis-labels text,
  .highcharts-legend-item text, 
  .highcharts-label text,
  .highcharts-data-label text,
  .highcharts-text-outline,
  .highcharts-credits text {
    fill: var(--dm-text) !important;
    color: var(--dm-text) !important;
  }

  /* Bright text for titles */
  .highcharts-title,
  .highcharts-subtitle {
    fill: var(--dm-text-bright) !important;
  }

  /* Axis Lines & Grid */
  .highcharts-axis-line,
  .highcharts-tick {
    stroke: var(--dm-border) !important;
  }

  .highcharts-grid-line {
    stroke: rgba(255, 255, 255, 0.08) !important;
  }

  .highcharts-minor-grid-line {
    stroke: rgba(255, 255, 255, 0.04) !important;
  }

  /* Tooltips */
  .highcharts-tooltip-box,
  .highcharts-label-box {
    fill: var(--dm-bg-elevated) !important;
    stroke: var(--dm-border) !important;
  }

  .highcharts-tooltip text,
  .highcharts-tooltip span,
  .highcharts-tooltip-box text {
    fill: var(--dm-text) !important;
    color: var(--dm-text) !important;
  }

  /* Legend */
  .highcharts-legend-box {
    fill: transparent !important;
    stroke: transparent !important;
  }

  .highcharts-legend-item text {
    fill: var(--dm-text) !important;
  }

  .highcharts-legend-item:hover text {
    fill: var(--dm-text-bright) !important;
  }

  .highcharts-legend-item-hidden text {
    fill: var(--dm-text-muted) !important;
  }

  /* Crosshairs */
  .highcharts-crosshair {
    stroke: var(--dm-brand) !important;
  }

  /* Plot Lines & Bands */
  .highcharts-plot-line {
    stroke: var(--dm-border) !important;
  }

  .highcharts-plot-band {
    fill: rgba(255, 255, 255, 0.05) !important;
  }

  /* Data Labels */
  .highcharts-data-label,
  .highcharts-data-label-box {
    fill: transparent !important;
  }

  .highcharts-data-label text {
    fill: var(--dm-text) !important;
  }

  /* Navigation & Buttons */
  .highcharts-button,
  .highcharts-button-box {
    fill: var(--dm-bg-input) !important;
    stroke: var(--dm-border) !important;
  }

  .highcharts-button text {
    fill: var(--dm-text) !important;
  }

  .highcharts-button:hover .highcharts-button-box {
    fill: var(--dm-bg-hover) !important;
  }

  /* Range Selector */
  .highcharts-input-box {
    fill: var(--dm-bg-input) !important;
    stroke: var(--dm-border) !important;
  }

  .highcharts-input-text {
    fill: var(--dm-text) !important;
  }

  /* Scrollbar */
  .highcharts-scrollbar-track {
    fill: var(--dm-bg-input) !important;
    stroke: var(--dm-border) !important;
  }

  .highcharts-scrollbar-thumb {
    fill: var(--dm-text-muted) !important;
    stroke: var(--dm-text-muted) !important;
  }

  .highcharts-scrollbar-arrow {
    fill: var(--dm-text-muted) !important;
  }

  /* Navigator */
  .highcharts-navigator-mask-inside {
    fill: rgba(255, 255, 255, 0.05) !important;
  }

  .highcharts-navigator-outline {
    stroke: var(--dm-border) !important;
  }

  .highcharts-navigator-handle {
    fill: var(--dm-bg-input) !important;
    stroke: var(--dm-border) !important;
  }

  /* Credits */
  .highcharts-credits {
    fill: var(--dm-text-muted) !important;
  }

  .highcharts-credits text {
    fill: var(--dm-text-muted) !important;
  }

  /* Context Menu */
  .highcharts-contextmenu,
  .highcharts-menu {
    background-color: var(--dm-bg-elevated) !important;
    border-color: var(--dm-border) !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5) !important;
  }

  .highcharts-menu-item {
    background-color: transparent !important;
    color: var(--dm-text) !important;
  }

  .highcharts-menu-item:hover {
    background-color: var(--dm-bg-hover) !important;
    color: var(--dm-text-bright) !important;
  }

  /* Loading */
  .highcharts-loading {
    background-color: rgba(30, 30, 30, 0.9) !important;
  }

  .highcharts-loading-inner {
    color: var(--dm-text) !important;
  }

  /* No Data */
  .highcharts-no-data text {
    fill: var(--dm-text-muted) !important;
  }

  /* Drilldown Button */
  .highcharts-drilldown-axis-label text {
    fill: var(--dm-brand) !important;
  }

  /* Reset Zoom Button */
  .highcharts-reset-zoom rect {
    fill: var(--dm-bg-input) !important;
    stroke: var(--dm-border) !important;
  }

  .highcharts-reset-zoom text {
    fill: var(--dm-text) !important;
  }

  /* Series - Keep their colors but ensure visibility */
  .highcharts-series path,
  .highcharts-series rect,
  .highcharts-series circle {
    /* Don't override - let series keep their colors */
  }

  /* But force markers to be visible */
  .highcharts-point {
    stroke-width: 1 !important;
  }

  /* Zone Lines */
  .highcharts-zone-line {
    stroke: var(--dm-border) !important;
  }

  /* Export Menu */
  .highcharts-exporting-group {
    fill: var(--dm-text-muted) !important;
  }

  .highcharts-exporting-group:hover {
    fill: var(--dm-text-bright) !important;
  }

  /* ============================================================================
     LEAFLET MAPS
     ============================================================================ */
  .leaflet-container {
    background-color: var(--dm-bg-main) !important;
  }

  .leaflet-bar, .leaflet-control-layers,
  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    background-color: var(--dm-bg-elevated) !important;
    border: 1px solid var(--dm-border) !important;
  }

  .leaflet-bar a, .leaflet-bar button {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text) !important;
    border-bottom: 1px solid var(--dm-border) !important;
  }

  .leaflet-bar a:hover {
    background-color: var(--dm-bg-hover) !important;
  }

  .filter-show-on-map, ul.legend, .legend {
    background-color: rgba(37, 37, 38, 0.95) !important;
    border: 1px solid var(--dm-border) !important;
    color: var(--dm-text) !important;
  }

  /* Map sidebar/filter panel content */
  .filter-show-on-map *, .legend * {
    color: var(--dm-text) !important;
  }

  .filter-show-on-map input,
  .filter-show-on-map select,
  .filter-show-on-map textarea {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-border) !important;
    color: var(--dm-text-bright) !important;
  }

  .filter-show-on-map .form-control {
    background-color: var(--dm-bg-input) !important;
    color: var(--dm-text-bright) !important;
  }

  .filter-text-header, .filter-label {
    color: var(--dm-text-bright) !important;
  }

  .filter-checkbox, .filter-show-on-map input[type="checkbox"] {
    background-color: var(--dm-bg-input) !important;
    border-color: var(--dm-text-muted) !important;
  }

  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text) !important;
  }

  .leaflet-popup-content {
    color: var(--dm-text) !important;
  }

  /* ============================================================================
     FOOTER
     ============================================================================ */
  footer, .main-footer, .footer-class {
    background-color: #181818 !important;
    border-top: 1px solid var(--dm-border) !important;
    color: var(--dm-text-muted) !important;
  }

  /* ============================================================================
     SCROLLBARS
     ============================================================================ */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: var(--dm-bg-main);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #424242;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #4f4f4f;
  }

  /* ============================================================================
     STATUS COLORS - Keep visible
     ============================================================================ */
  .text-success, .text-green, .loggers-down-color {
    color: #4ec9b0 !important;
  }

  .text-danger, .text-red, .exceedance-alerts-color {
    color: #f48771 !important;
  }

  .text-warning, .text-yellow {
    color: #dcdcaa !important;
  }

  /* Brand color (Cirro blue) */
  .text-primary, .eggblue, .mediumblueone {
    color: var(--dm-brand) !important;
  }

  /* ============================================================================
     LOADING & PLACEHOLDERS
     ============================================================================ */
  .loading, .placeholder, .skeleton {
    background-color: var(--dm-bg-elevated) !important;
    color: var(--dm-text-muted) !important;
  }

  /* ============================================================================
     ICONS & LOGOS - CRITICAL FIX FOR BLACK ELEMENTS
     ============================================================================ */
  
  /* Font Awesome Icons - Force visible color */
  i, i[class*="fa-"], i[class*="bx-"], i[class*="mdi-"],
  .fa, .fas, .far, .fal, .fab, .bx, .mdi,
  span[class*="icon-"], .icon {
    color: var(--dm-text) !important;
  }

  /* Icons in active/hover states keep their colors */
  .active i, .active .icon, 
  a:hover i, button:hover i,
  .nav-link.active i {
    color: var(--dm-brand) !important;
  }

  /* Cirro custom icons with SVG backgrounds */
  .icon-cirro,
  .icon-settings, 
  .icon-subscriptions,
  .icon-data,
  .icon-alerts,
  .icon-reports,
  .icon-images,
  .icon-orgdataloggerschema,
  .icon-orgsettings,
  .icon-orgclients,
  .icon-management,
  .icon-orgprojects,
  .icon-orgdatalogger,
  .icon-user,
  .icon-help,
  span[class*="icon-"] {
    filter: invert(1) brightness(1.8) !important;
    opacity: 0.9 !important;
  }

  /* Active/hover states for custom icons */
  .active .icon-cirro,
  .active .icon-settings,
  .active span[class*="icon-"],
  a:hover .icon-cirro,
  a:hover .icon-settings,
  a:hover span[class*="icon-"],
  .nav-link.active .icon-cirro,
  .nav-link.active span[class*="icon-"] {
    filter: invert(0.7) brightness(1.2) hue-rotate(180deg) !important;
    opacity: 1 !important;
  }

  /* Logo handling - show light version, hide dark version */
  .logo-dark, 
  img[src*="logo-dark"],
  img[src*="logo_dark"] {
    filter: invert(1) brightness(1.5) !important;
  }

  .logo-light,
  img[src*="logo-light"],
  img[src*="logo_light"] {
    filter: none !important;
    opacity: 1 !important;
  }

  /* Brand logos in navbar */
  .navbar-brand img,
  .navbar-brand-box img,
  .logo-sm img,
  .logo-lg img {
    filter: invert(1) brightness(1.5) !important;
  }

  /* Client logos */
  .clientLogo, 
  img[class*="Logo"],
  footer img {
    filter: invert(1) brightness(1.3) !important;
  }

  /* Cirro logo specifically */
  img.cirroLogo,
  img[src*="cirro"],
  img[alt*="Cirro" i],
  img[alt*="logo" i] {
    filter: invert(1) brightness(1.5) !important;
  }

  /* Map icons and markers - keep their specific colors */
  .marker-css-icon,
  .marker-css-icon-datalogger,
  .marker-css-icon-sensor,
  .leaflet-marker-icon img {
    filter: none !important;
  }

  /* Image icons that should be inverted */
  img[src*="icon"],
  img[class*="icon"],
  .icon-holder img {
    filter: invert(1) brightness(1.3) !important;
  }

  /* User avatar circles - keep original colors */
  .icon-user, .header-profile-user,
  .icon-holder span.icon-user {
    filter: none !important;
    background-color: var(--dm-bg-input) !important;
    color: var(--dm-text-bright) !important;
  }

  /* Help icon */
  .icon-help {
    filter: none !important;
    background-color: var(--dm-text-bright) !important;
    color: var(--dm-bg-main) !important;
  }

  /* SVG icons inline */
  svg, svg path, svg rect, svg circle {
    fill: var(--dm-text) !important;
  }

  /* SVG icons in buttons */
  button svg, a svg, .btn svg {
    fill: currentColor !important;
  }

  /* Brand color SVGs */
  .text-primary svg,
  .eggblue svg,
  a:hover svg {
    fill: var(--dm-brand) !important;
  }

  /* Dropdown menu icons */
  .dropdown-item i,
  .dropdown-menu i,
  .dropdown-menu img {
    filter: invert(1) brightness(1.3) !important;
  }

  /* Sidebar menu icons */
  .navbar-menu i,
  .sidebar i,
  .nav-sm i,
  .menu-link i {
    color: var(--dm-text-muted) !important;
  }

  .navbar-menu .active i,
  .sidebar .active i,
  .nav-sm .active i,
  .menu-link.active i,
  .navbar-menu a:hover i {
    color: var(--dm-brand) !important;
  }

  /* Table/grid icons */
  table i, .k-grid i,
  td i, th i {
    color: var(--dm-text) !important;
  }

  /* Button icons */
  .btn i, .btn svg,
  button i, button svg {
    color: inherit !important;
    filter: none !important;
  }

  /* Specific icon colors for status */
  .text-success i, .text-green i {
    color: #4ec9b0 !important;
  }

  .text-danger i, .text-red i {
    color: #f48771 !important;
  }

  .text-warning i, .text-yellow i {
    color: #dcdcaa !important;
  }

  /* Map control icons */
  .leaflet-control i,
  .leaflet-bar i,
  #icon-setting-on-map,
  #icon-filter-on-map {
    filter: invert(1) brightness(1.5) !important;
  }

  /* Active map controls */
  .leaflet-control.active i,
  #icon-setting-on-map.active,
  #icon-filter-on-map.active {
    filter: invert(0.7) brightness(1.2) hue-rotate(180deg) !important;
  }

  /* Card header icons */
  .card-header i,
  .card-header img,
  .cardHeaderStyle i,
  .cardHeaderStyle img {
    filter: invert(1) brightness(1.3) !important;
  }

  /* Modal icons */
  .modal-header i,
  .modal-body i,
  .modal-footer i {
    color: var(--dm-text) !important;
  }

  /* Flag icons - keep original colors */
  .flag-icon,
  img[class*="flag"],
  [class*="flag-icon"] {
    filter: none !important;
  }

  /* Loading spinner icons */
  .spinner, .loading i,
  [class*="spinner"] i,
  [class*="loading"] i {
    color: var(--dm-brand) !important;
  }

  /* Close buttons */
  .close, .btn-close,
  button.close, button.btn-close {
    color: var(--dm-text) !important;
    opacity: 0.7 !important;
  }

  .close:hover, .btn-close:hover {
    opacity: 1 !important;
  }

  /* Kendo UI icons */
  .k-icon, .k-svg-icon,
  .k-i-arrow-60-down,
  .k-i-arrow-60-up,
  .k-button .k-icon {
    color: var(--dm-text-muted) !important;
  }

  .k-button:hover .k-icon,
  .k-state-hover .k-icon {
    color: var(--dm-text-bright) !important;
  }

  /* Notification badges */
  .badge, .topbar-badge,
  .notification-badge {
    filter: none !important;
  }

  /* ============================================================================
     BACKGROUND IMAGES - FORCE VISIBILITY
     ============================================================================ */
  
  /* Elements with dark background images */
  [style*="background-image"],
  .card.placeholder,
  .cirro-bg {
    filter: brightness(1.2) !important;
  }

  /* Exclude colored backgrounds */
  [style*="background-color"],
  [class*="bg-"] {
    filter: none !important;
  }
`;

const STYLE_ID = "cirro-dark-mode-style";

const toggleDarkMode = (enable: boolean) => {
  const existingStyle = document.getElementById(STYLE_ID);

  if (enable) {
    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = darkModeStyles;
      document.head.appendChild(style);
    }
  } else {
    if (existingStyle) {
      existingStyle.remove();
    }
  }
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.type === "TOGGLE_DARK_MODE") {
    toggleDarkMode(msg.darkMode);
    sendResponse({ success: true });
  }
});

// Check initial state
chrome.storage.local.get(["darkMode"], (result) => {
  if (result.darkMode) {
    toggleDarkMode(true);
  }
});

// Centralized color palette for CS 128 website
// Update colors here and they'll apply everywhere
// Scheme: cool mint + teal/periwinkle (distinct from CS 340's warm cream/orange)

export const colors = {
  // Navigation button backgrounds
  navCream: '#eef6f1',   // pale mint (course links)
  navOrange: '#cdece0',  // teal-tint (PrairieLearn)
  navBlue: '#dfe4fb',    // periwinkle (Campuswire / Syllabus)

  // Backgrounds
  white: '#fff',
  lightGray: '#f9fafb',
  cream: '#e8f5ee',            // soft mint (primary card fill)
  tableHeaderBlue: '#dfe4fb',  // periwinkle to match nav

  // Text colors
  black: '#000',
  darkGray: '#374151',
  mediumGray: '#6b7280',
  lightGrayText: '#9ca3af',

  // Borders
  border: 'rgba(0,0,0,0.18)',
  borderLight: 'rgba(0,0,0,0.1)',
  borderLighter: 'rgba(0,0,0,0.05)',
  tableBorder: '#e5e7eb',

  // Interactive states
  focusBlue: '#0d9488',   // teal focus ring (was blue)
  hoverGray: '#f3f4f6',
  buttonBorder: 'rgba(0,0,0,0.1)',

  // Button states
  buttonActive: '#cdece0',
  buttonInactive: '#f3f4f6',
  buttonDisabledBg: '#f3f4f6',
  buttonDisabledText: '#9ca3af',

  // Hover backgrounds
  tableRowHover: 'rgba(0,0,0,0.02)',
  announcementHover: 'rgba(13, 148, 136, 0.08)',  // faint teal

  // MP status colors
  statusActive: '#b2ebc6',      // Light green - between release and due
  statusGrace: '#e9d5ff',        // Light purple - 24 hours after due
  statusInactive: '#f3f4f6'      // Light gray - not released or past grace
};

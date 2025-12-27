// colors.js - Color Token Configuration
// Based on ColorHunt Palette: https://colorhunt.co/palette/faf3e1f5e7c6ff6d1f222222

const colors = {
  // Base palette colors
  cream: '#FAF3E1',
  lightCream: '#F5E7C6',
  orange: '#FF6D1F',
  darkGray: '#222222',
  
  // Extended variations
  white: '#FFFFFF',
  black: '#000000',
  
  // Light mode colors
  light: {
    primary: '#FF6D1F',      // Orange
    primaryHover: '#FF5A0A',
    primaryLight: '#FF8F4D',
    
    background: '#FAF3E1',   // Cream
    backgroundAlt: '#F5E7C6', // Light Cream
    
    text: '#222222',         // Dark Gray
    textSecondary: '#4A4A4A',
    
    border: '#F5E7C6',
    shadow: 'rgba(255, 109, 31, 0.4)',
  },
  
  // Dark mode colors
  dark: {
    primary: '#FF6D1F',      // Orange
    primaryHover: '#FF8F4D',
    primaryLight: '#FF5A0A',
    
    background: '#1A1A1A',   // Slightly lighter than base dark
    backgroundAlt: '#222222', // Dark Gray from palette
    
    text: '#FAF3E1',         // Cream
    textSecondary: '#F5E7C6', // Light Cream
    
    border: '#333333',
    shadow: 'rgba(255, 109, 31, 0.6)',
  }
};

export default colors;
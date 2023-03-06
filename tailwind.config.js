/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      xs: {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px) { ... }

      sm: {'min': '481px', 'max': '768px'},
      // => @media (min-width: 640px) { ... }
      md: {'min': '769px', 'max': '1024px'},  
      // => @media (min-width: 768px) { ... }

      lg: {'min': '1025px', 'max': '1440px'},
      
      // => @media (min-width: 1024px) { ... }
      xl: {'min': '1441px','max': '2500px'},
      // => @media (min-width: 1280px) { ... } 
      xxl: {'min': '2500px','max': '2561px'},    
    },
    extend: {
      colors:{
        'myblue': {
          500: '#043A90'
        },
        'mylightblue': {
          100: '#00B0DA'
        },
        
    },
    fontFamily:{
      body:['Montserrat']
   },
  },
  plugins: [],
}
}

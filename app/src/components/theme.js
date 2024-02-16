const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#33DDFB",
    400: "#00D5FA",
    500: "#00dddd",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
  indicator:{
    100:"#0de7161a",
    200:"#03ed42",
    300:"#f900001a",
    400:"#f10909"
  }
};


const light = {
    typography:{
      allVariants:{
        color:"black"
      },
    },
    components:{
      MuiSvgIcon:{
       styleOverrides:{
        root:{
          color:colorTokens.grey[100]
        }
       }
      },
      MuiIconButton:{
        styleOverrides:{
          root:{
            color:"black"
          }
        }
      },
      MuiTypography:{
        styleOverrides:{
          root:{
            color:"black"
          }
        }
      },
      MuiBackdrop:{
        styleOverrides:{
          root:{
            backgroundColor:"rgba(255, 255,255, 0.1)"
          },
        }
      }
    }
  }
  
 const dark = {
    typography:{
      allVariants:{
        color:"white"
      },
    },
    components:{
      MuiSvgIcon:{
       styleOverrides:{
        root:{
          color:"white"
        }
       }
      },
      MuiIconButton:{
        styleOverrides:{
          root:{
            color:"white"
          }
        }
      },
      MuiTypography:{
        styleOverrides:{
          root:{
            color:"white"
          }
        }
      },
      MuiBackdrop:{
        styleOverrides:{
          root:{
            backgroundColor:"rgba(0, 0,0, 0.8)"
          },
        }
      }
    }
  }

const themeSettings = (mode) => {
    return{
      palette: {
        mode:mode,
        background:{
          light:"red"
        },
        primary: {
          dark: colorTokens.primary[400],
          main: colorTokens.primary[600],
          light: colorTokens.primary[200],
        },
        red:{
          light:colorTokens.indicator[300],
          dark:colorTokens.indicator[400]
        },
        green:{
          light:colorTokens.indicator[100],
          dark:colorTokens.indicator[200]
        }
      },
      ...(mode == "dark")? dark:light  
    }

}

export default themeSettings
const initialState = {
    toggleTraficType: false,
    colorNowSelected: "red",
    redColor: {
      coutntActive: 0,
      activeNow: true
    },
    yelowColor: {
      coutntActive: 0,
      activeNow: false
    },
    greenColor: {
      coutntActive: 0,
      activeNow: false
    }
  };

const StatusBarState = (state = initialState, action) => {
    switch (action.type) {
      case 'CANGE_STATE_TYPE':
        return { ...state, toggleTraficType: state.toggleTraficType === false ? true : false };
      case 'CHANGE_STATE_COLOR':
        switch (action.colorHendle){
          case "red":
            
            return {...state,
              colorNowSelected: action.colorHendle, 
              redColor: {...state.redColor, 
                coutntActive: state.redColor.coutntActive + 1,
                activeNow: state.redColor.activeNow = true
              }, 
              yelowColor: {...state.yelowColor, 
                activeNow: state.yelowColor.activeNow = false
              }, 
              greenColor: {...state.greenColor, 
                activeNow: state.greenColor.activeNow = false
              }};
          case "yelow":
              return {...state,
                colorNowSelected: action.colorHendle, 
                redColor: {...state.redColor, 
                  activeNow: state.redColor.activeNow = false
                }, 
                yelowColor: {...state.yelowColor, 
                  coutntActive: state.yelowColor.coutntActive + 1,
                  activeNow: state.yelowColor.activeNow = true
                }, 
                greenColor: {...state.greenColor, 
                  activeNow: state.greenColor.activeNow = false
                }};

          case "green":
              return {...state,
                colorNowSelected: action.colorHendle, 
                redColor: {...state.redColor, 
                  activeNow: state.redColor.activeNow = false
                }, 
                yelowColor: {...state.yelowColor, 
                  activeNow: state.yelowColor.activeNow = false
                }, 
                greenColor: {...state.greenColor, 
                  coutntActive: state.greenColor.coutntActive + 1,
                  activeNow: state.greenColor.activeNow = true
                }};
            
          
        }
        return {};
      default:
        return state;
    }
  };
  
  export default StatusBarState;
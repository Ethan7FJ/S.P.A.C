import { StyleSheet, Dimensions} from "react-native";

const dibujar=StyleSheet.create({
    Container:{
      width:'100%',
      padding:20
    },
    Title:{
      padding:10,
      fontSize:20,
      color:'black',
    },
    TextInput:{
      borderColor:'black',
      borderWidth:1,
      borderRadius:15,
      width:Dimensions.get("screen").width*0.6,
      paddingLeft:10
    },
    textt:{
      fontSize:16,
      color:'black',
    },
    wtext:{
      fontSize:16,
      color:'black',
    },
    InputContainer:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    Buttonn:{
      width:Dimensions.get("screen").width*0.2,
      backgroundColor:'#E6E1D2',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15
    },
    taskcontainer:{
      paddingVertical:20,
      borderBottomColor:'black',
      borderBottomWidth:10,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    textodone:{
      fontSize:16,
      color:"black",
      textDecorationLine:"line-through"
    },
    removebutton:{
      backgroundColor:'#E6E1D2',
      justifyContent:'center',
      alignContent:'center',
      paddingHorizontal:15,
      borderRadius:10,
    },
    autor:{
      fontSize:12,
      padding:10,
      color:'#E6E1D2',
    }
  })
  export default dibujar
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Full-screen white container (edge-to-edge)
  screenContainer: {
    flex: 1,
    backgroundColor: 'white', // Changed to white for full bleed
  },

  // Main content container (centered)
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },

  // Big full-width image
  image: {
    
    width: '100%',
    height: 320, // Increased height
    resizeMode: 'cover',
  },

  // "Bad Job!" text (below image, outside red rectangle)
  goodtext: {
    fontSize: 38, // Very large
    fontWeight: '600',
    color: 'black',
    marginVertical: 25,
    textAlign: 'center',
    bottom : 70,
    width: '100%',
  },

  redBackground: {
    backgroundColor: '#93D395',
    borderRadius: 20,
    
    width: '85%', // Narrower
    padding: 18,
    bottom : 40,
    marginBottom: 30,
    alignItems: 'center',
  },

  // Score text (2/10)
  score: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 22,
    color: '#333',
    marginBottom: 8,
  },

  // Points text (+20 Points)
  points: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 20,
    color: 'green',
    marginBottom: 15,
  },

  // Message text
  message: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  // Yellow button (lower on screen)
  button: {
    backgroundColor: '#FEDC62',
    borderRadius: 20,
    width: 260,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 40,
  },

  // Button text
  buttonText: {
    color: '#184F78',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },

  xButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  xIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

});
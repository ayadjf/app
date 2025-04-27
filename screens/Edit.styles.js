import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 80, // Add padding to prevent content from being hidden behind the bottom bar
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 24,
    height: 24
  },
  profileSection: {
    marginTop: 70,
    alignItems: 'center'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333'
  },
  buttonGroup: {
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#184F78',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },
  buttonn: {
    backgroundColor: '#FEDC62',
    borderRadius: 20,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center'
  },
  buttonnText: {
    color: '#184F78',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 15
  },

  // Bottom Bar Styles (consistent with other pages)
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: '#0A426E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  activeTab: {
    alignItems: 'center',
    marginTop: -30,
  },
  whiteOuterCircle: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFE061',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  activeIcon: {
    width: 28,
    height: 28,
    tintColor: '#0A426E',
  },
  activeLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
  inactiveIcon: {
    width: 26,
    height: 26,
    tintColor: 'white',
  },
  tabLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  input: {
    backgroundColor: '#184F78',
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color:'#fff'
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 0.5,
    marginTop: -8,
    marginLeft: 4,
  }

  
});
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 80, // Add padding to prevent content from being hidden behind the bottom bar
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1
  },
  backIcon: {
    width: 24,
    height: 24
  },
  profileSection: {
    marginTop: 120,
    alignItems: 'center'
  },
  profileImage: {
    top: -70,
    width: 128,
    height: 124,
    borderRadius: 60,
    marginBottom: 20,
    bottom: 120,
  },
  name: {
    top: -70,
    fontStyle: 'inter',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 60,
    left: 1,
    alignItems: 'center',
    bottom: 100,
  },
  buttonGroup: {
    width: '92%',
    alignSelf: 'center',
    top: -90,
  },
  button: {
    backgroundColor: '#184F78',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  icon: {
    left: 10,
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 10
  },
  buttonText: {
    color: 'white',
    left: 20,
    fontSize: 18,
  },
  
  // Bottom Bar Styles (updated to match Home page)
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
  }
});
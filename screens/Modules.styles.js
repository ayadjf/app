import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleSection: {
    marginTop: 80,
    marginLeft: 30,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    bottom: 130,
  },
  buttonGroup: {
    width: '90%',
    bottom: 120,
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  button1: {
    backgroundColor: '#FFEEEE',
  },
  button2: {
    backgroundColor: '#EEFFEE',
  },
  button3: {
    backgroundColor: '#EEEEFF',
  },
  button4: {
    backgroundColor: '#FFF8EE',
  },
  buttonTextContainer: {
    flex: 1,
    marginRight: 15,
  },
  buttonTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  buttonSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  buttonDetails: {
    fontSize: 16,
    color: '#184F78',
    fontWeight: '500',
  },
  buttonIcon: {
    width: 70,
    height: 70,
  },
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
    marginBottom: 15,
  },
  tabLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginTop: -10,
    marginBottom: 15,
  }
});
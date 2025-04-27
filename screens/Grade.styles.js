import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Your existing styles...
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
  header: {
    marginTop: 80,
    marginLeft: 30,
    marginBottom: 20
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333'
  },
  subTitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 5
  },
  subSubTitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 2
  },
  modulesContainer: {
    left: 30,
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 100, // Added to prevent content from being hidden behind bottom bar
  },
  moduleWrapper: {
    marginBottom: 5
  },
  moduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  blueCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#184F78',
    marginRight: 10,
  },
  docIcon: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  moduleText: {
    flex: 1
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  moduleSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4
  },
  gradeContainer: {
    left :210,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 50,
    alignSelf: 'flex-start',
    marginTop: 4
  },
  gradeText: {
   
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%'
  },

  // Bottom Bar Styles
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 80, // Added to prevent content from being hidden behind bottom bar
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
  },
  tabLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  }
});
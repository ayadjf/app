import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },
  header: {
    marginBottom: 15,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding: 8,
    borderRadius: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    top : 10    ,
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    width: '100%',
  },
  dateSelector: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 4,
    
  },
  dateItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    width: 60,
    backgroundColor: '#F8F8F8',
  
    // Button effects
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  activeDate: {
    backgroundColor: '#184F78',
  },
  activeDateText: {
    color: '#FFFFFF',
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  dateDay: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  dateMonth: {
    fontSize: 12,
    color: '#666',
  },
  statusFilter: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 10,
    paddingHorizontal: 4,
  },
  statusItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusAll: {
    backgroundColor: '#E3F2FD',
  },
  statusTodo: {
    backgroundColor: '#FFF3E0',
  },
  statusDone: {
    backgroundColor: '#E8F5E9',
  },
  statusAbsent: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    
  },
  quizList: {
    top: 40,
    flex: 1,
    paddingHorizontal: 8,
  },
  quizItem: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    // Button effects
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  subject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
   

  },
  quizTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  
  },
  quizTime: {
    fontSize: 14,
    color: '#FEDC62',
    marginBottom: 4,
    fontWeight: 'bold',
    

  },
  quizStatus: {
    left : 260,
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusDoneText: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  statusTodoText: {
    backgroundColor: '#FFF3E0',
    color: '#EF6C00',
  },
  statusAbsentText: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#184F78',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  bottomIcon: {
    padding: 10,
  },
  bottomIconText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },

// Add these styles to your existing Home.styles.js
mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  // Bottom Bar Styles (same as in Grade.styles)
    // Bottom Bar Styles
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
      modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
      

});
import { StyleSheet } from 'react-native';

// const containerBgColor = '#383ebd'
// const cardBgColor = '#0a0d47'
export const containerBgColor = '#0a0d47'
export const cardBgColor = '#383ebd'
export const cardHeadingColor = '#38bd82'
export const iconColor = cardHeadingColor
export const headerBgColor = '#eb7ae7'

export const headerStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '700',
    color: 'white',
    fontSize: 20,
    letterSpacing: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  headerTitle: {
    flexDirection: 'row'
  },
})

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: containerBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  screenLoadingContainer: {
    flex: 1,
    backgroundColor: containerBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Card: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  CardContent: {
    marginHorizontal: 5,
    marginVertical: 15,
  },
  CardText: {
    padding: 6,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },

});

export const globalStylesScrollers = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  scrollView: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: globalStyles.container.backgroundColor,
  }
})

export const globalModal = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    //color: iconColor,
    backgroundColor: iconColor,
  },
  modalClose: {
    marginBottom: 10,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  Card: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  HeadingCard: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  SubHeadingCard: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubHeadingCardContent: {
    marginHorizontal: 2,
    marginVertical: 2,
    justifyContent: 'space-evenly',
    alignContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardContent: {
    marginHorizontal: 2,
    marginVertical: 2,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly'
  },
  CardText: {
    padding: 4,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    justifyContent: 'center',
  },
  HeadingCardText: {
    padding: 4,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    justifyContent: 'center',
  },
})
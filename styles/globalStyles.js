import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from './scale_utils';

export const containerBgColor = '#0a0d47'
export const cardBgColor = '#383ebd'
export const cardHeadingColor = '#38bd82'
export const iconColor = cardHeadingColor
export const headerBgColor = '#eb7ae7'

export const headerStyle = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: scale(20),
    marginVertical: scale(10),
  },
  headerText: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '700',
    color: 'black',

    fontSize: moderateScale(20),
    letterSpacing: 1,
  },
  icon: {
    //position: 'absolute',
    //left: moderateScale(10),
  },
  headerImage: {
    width: moderateScale(30),
    height: verticalScale(30),
    backgroundColor: 'transparent',
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
  },
  CardContent: {
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(15),
  },
  CardText: {
    padding: moderateScale(4),
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(12),
    justifyContent: 'center',
  },
  ErrorCard: {
    borderRadius: 6,
    backgroundColor: '#e2286a',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: verticalScale(8),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
  },
  SubHeadingCard: {
    flex: 1,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: verticalScale(12),
    },
    shadowOpacity: 0.58,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubHeadingCardContent: {
    marginHorizontal: moderateScale(2),
    marginVertical: moderateScale(2),
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SubHeadingCardText: {
    padding: moderateScale(4),
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(12),
    justifyContent: 'center',
  },
});

export const globalStylesScrollers = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  scrollView: {
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    backgroundColor: globalStyles.container.backgroundColor,
  }
})

export const globalModal = StyleSheet.create({
  modalToggle: {
    marginBottom: moderateScale(10),
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: iconColor,
  },
  modalClose: {
    marginBottom: moderateScale(10),
    marginTop: moderateScale(20),
  },
  modalContent: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  Card: {
    flex: 1,
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: moderateScale(12),
    },
    shadowOpacity: 0.58,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
  },
  CardContent: {
    marginHorizontal: moderateScale(2),
    marginVertical: moderateScale(2),
    alignSelf: 'stretch',
    justifyContent: 'space-evenly'
  },
  CardText: {
    padding: moderateScale(2),
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(12, 0.25),
    justifyContent: 'center',
  },
  HeadingCard: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: moderateScale(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
  },
  HeadingCardContent: {
    marginHorizontal: moderateScale(2),
    marginVertical: moderateScale(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  SubHeadingCard: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: moderateScale(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: moderateScale(4),
    marginVertical: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubHeadingCardContent: {
    marginHorizontal: moderateScale(2),
    marginVertical: moderateScale(2),
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeadingCardText: {
    padding: 4,
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: moderateScale(12),
    justifyContent: 'center',
  },
})
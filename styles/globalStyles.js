import { StyleSheet } from 'react-native';
import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

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
    color: 'black',
    fontSize: normalize(26),
    //letterSpacing: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    left: normalize(16),
  },
  headerImage: {
    width: normalize(42),
    height: normalize(42),
    marginHorizontal: normalize(10),
    backgroundColor: 'transparent',

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
    //borderRadius: 6,
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    //shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
  },
  CardContent: {
    marginHorizontal: normalize(5),
    marginVertical: normalize(15),
  },
  CardText: {
    padding: normalize(4),
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontSize: normalize(16),
    justifyContent: 'center',
  },
  ErrorCard: {
    borderRadius: 6,
    backgroundColor: '#e2286a',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: normalize(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
  },
  SubHeadingCard: {
    flex: 1,
    //borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: normalize(12),
    },
    shadowOpacity: 0.58,
    //shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubHeadingCardContent: {
    marginHorizontal: normalize(2),
    marginVertical: normalize(2),
    justifyContent: 'space-evenly',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SubHeadingCardText: {
    padding: normalize(4),
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: normalize(16),
    justifyContent: 'center',
  },
});

export const globalStylesScrollers = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  scrollView: {
    padding: normalize(10),
    marginBottom: normalize(10),
    backgroundColor: globalStyles.container.backgroundColor,
  }
})

export const globalModal = StyleSheet.create({
  modalToggle: {
    marginBottom: normalize(10),
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: normalize(10),
    borderRadius: normalize(10),
    alignSelf: 'center',
    //color: iconColor,
    backgroundColor: iconColor,
  },
  modalClose: {
    marginBottom: normalize(10),
    marginTop: normalize(20),
  },
  modalContent: {
    flex: 1,
    backgroundColor: globalStyles.container.backgroundColor,
  },
  Card: {
    flex: 1,
    //borderRadius: 6,
    backgroundColor: cardBgColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: normalize(12),
    },
    shadowOpacity: 0.58,
    //shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
  },
  CardContent: {
    marginHorizontal: normalize(2),
    marginVertical: normalize(2),
    alignSelf: 'stretch',
    justifyContent: 'space-evenly'
  },
  CardText: {
    padding: normalize(4),
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: normalize(16),
    justifyContent: 'center',
  },
  HeadingCard: {
    flex: 1,
    //borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: normalize(12),
    },
    shadowOpacity: 0.58,
    //shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
  },
  HeadingCardContent: {
    marginHorizontal: normalize(2),
    marginVertical: normalize(2),
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  SubHeadingCard: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: cardHeadingColor,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: normalize(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SubHeadingCardContent: {
    marginHorizontal: normalize(2),
    marginVertical: normalize(2),
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
    fontSize: normalize(16),
    justifyContent: 'center',
  },
})
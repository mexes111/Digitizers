import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 'slide1',
    title: 'Discover Emerging Talent',
    subtitle: 'Find the next generation of African creatives before they break mainstream',
    image: require('../../assets/thumbnail1.png'),
  },
  {
    key: 'slide2',
    title: 'Connect with Industry Pros',
    subtitle: 'Network with A&Rs, record labels, brands, and creative agencies',
    image: require('../../assets/thumbnail2.png'),
  },
  {
    key: 'slide3',
    title: 'Build Your Creative Career',
    subtitle: 'Access opportunities, grow your network, and showcase your talent',
    image: require('../../assets/thumbnail3.png'),
  },
];

const CarouselSlide = ({ item, index, scrollX, width }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8], Extrapolate.CLAMP);
    return { transform: [{ scale }] };
  });

  return (
    <View style={[styles.slide, { width }]}>
      <Animated.Image source={item.image} style={[styles.image, animatedStyle]} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default function WelcomeCarousel() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const handleNext = () => {
    const nextIndex = currentIndex.current + 1;
    if (nextIndex < slides.length) {
      flatListRef.current?.scrollToIndex({ index: nextIndex });
    } else {
      navigation.navigate('UserTypeSelection');
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      currentIndex.current = viewableItems[0].index;
    }
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={({ item, index }) => (
          <CarouselSlide item={item} index={index} scrollX={scrollX} width={width} />
        )}
      />
      <View style={styles.pagination}>
        {slides.map((_, i) => {
          const animatedDotStyle = useAnimatedStyle(() => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = interpolate(scrollX.value, inputRange, [8, 16, 8], Extrapolate.CLAMP);
            return { width: dotWidth };
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                i === currentIndex.current ? styles.dotActive : styles.dotInactive,
                animatedDotStyle,
              ]}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          currentIndex.current === slides.length - 1 ? styles.done : null,
        ]}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>
          {currentIndex.current === slides.length - 1 ? '✔' : '→'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
  },
  image: {
    width: '90%',
    height: '55%',
    marginTop: 40,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#BDC3C7',
    fontSize: 15,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '#7F8C8D',
  },
  dotActive: {
    backgroundColor: '#fff',
  },
  dotInactive: {
    backgroundColor: '#7F8C8D',
  },
  button: {
    backgroundColor: '#0057FF',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  done: {
    backgroundColor: '#27AE60',
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});

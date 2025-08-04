import React, { useRef, useState } from 'react';
import {
  FlatList,
  useWindowDimensions,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '../../components/typography/Typography';
import { useTheme } from '../../theme/ThemeProvider';

const slides = [
  {
    key: 'slide1',
    title: 'Discover Emerging Talent',
    subtitle: 'Find the next generation of African creatives\nbefore they break mainstream',
    image: require('../../assets/thumbnail1.png'),
  },
  {
    key: 'slide2',
    title: 'Connect with Industry Pros',
    subtitle: 'Network with A&Rs, record labels, brands,\nand creative agencies',
    image: require('../../assets/thumbnail2.png'),
  },
  {
    key: 'slide3',
    title: 'Build Your Creative Career',
    subtitle: 'Access opportunities, grow your network,\nand showcase your talent',
    image: require('../../assets/thumbnail3.png'),
  },
];

interface CarouselSlideProps {
  item: typeof slides[0];
  index: number;
  scrollX: Animated.SharedValue<number>;
  width: number;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ item, index, scrollX, width }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const scale = interpolate(scrollX.value, inputRange, [0.85, 1, 0.85], Extrapolate.CLAMP);
    const opacity = interpolate(scrollX.value, inputRange, [0.7, 1, 0.7], Extrapolate.CLAMP);
    return { 
      transform: [{ scale }],
      opacity,
    };
  });

  const slideStyles = StyleSheet.create({
    slide: {
      width: width,
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingHorizontal: 24,
      // paddingTop: 80,
      paddingBottom: 40,
    },
    imageContainer: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: 20,
      marginBottom: 40,
    },
    image: {
      width: '90%',
      height: '100%',
      borderRadius: 20,
    },
    textContainer: {
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 60,
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: -0.5,
      lineHeight: 35
    },
    subtitle: {
      fontSize: 13,
      color: '#A8A8A8',
      textAlign: 'center',
      lineHeight: 26,
      fontWeight: '400',
    },
  });

  return (
    <View style={slideStyles.slide}>
      <View style={slideStyles.imageContainer}>
        <Animated.Image 
          source={item.image} 
          style={[slideStyles.image, animatedStyle]} 
          resizeMode="cover" 
        />
      </View>
      <View style={slideStyles.textContainer}>
        <Typography style={slideStyles.title}>
          {item.title}
        </Typography>
        <Typography style={slideStyles.subtitle}>
          {item.subtitle}
        </Typography>
      </View>
    </View>
  );
};

interface WelcomeCarouselProps {
  navigation?: any;
}

export default function WelcomeCarousel({ navigation }: WelcomeCarouselProps) {
  const nav = useNavigation();
  const { width } = useWindowDimensions();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < slides.length) {
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      (navigation || nav).navigate('UserTypeSelection');
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const DotIndicator = ({ index }: { index: number }) => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
      const dotWidth = interpolate(scrollX.value, inputRange, [8, 32, 8], Extrapolate.CLAMP);
      const opacity = interpolate(scrollX.value, inputRange, [0.4, 1, 0.4], Extrapolate.CLAMP);
      return { width: dotWidth, opacity };
    });

    return (
      <Animated.View
        style={[
          {
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: '#FFFFFF',
          },
          animatedDotStyle,
        ]}
      />
    );
  };

  const getButtonStyle = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    return {
      backgroundColor: isLastSlide ? '#00D4AA' : '#007AFF',
      width: 280,
      height: 64,
      borderRadius: 32,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      marginBottom: 40,
      shadowColor: isLastSlide ? '#00D4AA' : '#007AFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    };
  };

  const getButtonIcon = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    if (isLastSlide) {
      return (
        <View style={styles.checkmarkContainer}>
          <Typography style={styles.checkmark}>✓</Typography>
        </View>
      );
    }
    return (
      <View style={styles.arrowContainer}>
        <Typography style={styles.arrow}>→</Typography>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 40,
      paddingHorizontal: 20,
    },
    checkmarkContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkmark: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '700',
    },
    arrowContainer: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    buttonContainer: {
      alignItems: 'center',
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
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
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => (
          <DotIndicator key={i} index={i} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={getButtonStyle()}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          {getButtonIcon()}
        </TouchableOpacity>
      </View>
    </View>
  );
}

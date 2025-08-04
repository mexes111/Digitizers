import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { Typography } from '../../components/typography/Typography';
import { ScreenContainer } from '../../components/layout/ScreenContainer';
import { Gap } from '../../components/layout/Gap';
import { CategoryButton } from '../../components/buttons/CategoryButton';
import { TabButton } from '../../components/buttons/TabButton';
import { ContentCard } from '../../components/cards/ContentCard';
import { SubscriptionCard } from '../../components/cards/SubscriptionCard';
import { useNavigation } from '@react-navigation/native';

interface DiscoverScreenProps {
  navigation?: any;
}

const categories = [
  { id: '1', title: 'Musicians', icon: '🎵', isSelected: true },
  { id: '2', title: 'Models', icon: '👤', isSelected: false },
  { id: '3', title: 'Stylists', icon: '✂️', isSelected: false },
  { id: '4', title: 'Photographers', icon: '📸', isSelected: false },
  { id: '5', title: 'Stylists', icon: '🎨', isSelected: false },
];

const contentData = [
  {
    id: '1',
    title: 'New Afrobeats single ready for industry review. Seeking record label partnership.',
    author: 'Kemi Adebayo',
    location: 'Musician • Lagos, Nigeria',
    views: '1200',
    likes: '1200',
  },
  {
    id: '2',
    title: 'New Afrobeats single ready for industry review. Seeking record label partnership.',
    author: 'Kemi Adebayo',
    location: 'Musician • Lagos, Nigeria',
    views: '1200',
    likes: '1200',
  },
];

export default function DiscoverScreen({ navigation }: DiscoverScreenProps) {
  const nav = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [activeTab, setActiveTab] = useState('trending');

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handleContentPress = (contentId: string) => {
    // Navigate to content detail
    console.log('Content pressed:', contentId);
  };

  const handleSubscribe = () => {
    (navigation || nav).navigate('Subscription');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingBottom: 20,
      paddingTop: 10
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FFFFFF',
      lineHeight: 30
    //   marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    logoContainer: {
      position: 'absolute',
      top: 10,
      right: 0,
    },
    logo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#007AFF',
    },
    categoriesContainer: {
      marginBottom: 24,
    },
    categoriesList: {
      paddingLeft: 0,
    },
    tabsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    },
    contentContainer: {
      flex: 1,
    },
  });

  const renderCategory = ({ item }: { item: any }) => (
    <CategoryButton
      title={item.title}
      icon={item.icon}
      isSelected={item.id === selectedCategory}
      onPress={() => handleCategoryPress(item.id)}
    />
  );

  const renderContent = ({ item }: { item: any }) => (
    <ContentCard
      title={item.title}
      author={item.author}
      location={item.location}
      views={item.views}
      likes={item.likes}
      onPress={() => handleContentPress(item.id)}
    />
  );

  return (
    <ScreenContainer showCurvedLine={true} curvedLinePosition="topRight">
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logoColor.png')}
              style={{ width: 30, height: 30, borderRadius: 10 }}
            />
            {/* <Typography style={styles.logo}>D</Typography> */}
          </View>
          
          <Typography style={styles.title}>Discover</Typography>
          <Typography style={styles.subtitle}>
            Find emerging artists and creatives
          </Typography>
        </View>

        <Gap size="lg" />

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TabButton
            title="Trending Now"
            isActive={activeTab === 'trending'}
            onPress={() => handleTabPress('trending')}
          />
          <TabButton
            title="Recent Uploads"
            isActive={activeTab === 'recent'}
            onPress={() => handleTabPress('recent')}
          />
        </View>

        {/* Content */}
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          {contentData.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              author={item.author}
              location={item.location}
              views={item.views}
              likes={item.likes}
              onPress={() => handleContentPress(item.id)}
            />
          ))}

          <Gap size="md" />

          {/* Subscription Card */}
          <SubscriptionCard
            title="Premium Subscription"
            subtitle="Subscription needed to browse talent profiles."
            buttonText="Subscribe now"
            onSubscribe={handleSubscribe}
          />

          <Gap size="xl" />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
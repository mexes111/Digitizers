import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { Typography } from '../typography/Typography';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  subtitle?: string;
  badge?: string;
  isSelected: boolean;
  onSelect: () => void;
  style?: ViewStyle;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  subtitle,
  badge,
  isSelected,
  onSelect,
  style,
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
    //   borderWidth: 2,
    //   borderColor: isSelected ? theme.colors.primary : `${theme.colors.textPrimary}20`,
    //   borderRadius: theme.borderRadius.xl,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.md,
      backgroundColor: isSelected ? `${theme.colors.primary}10` : 'transparent',
      position: 'relative',
    },
    radioContainer: {
      position: 'absolute',
      top: theme.spacing.lg,
      left: theme.spacing.lg,
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: isSelected ? theme.colors.primary : `${theme.colors.textPrimary}40`,
      backgroundColor: isSelected ? theme.colors.primary : 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioInner: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
    },
    badge: {
    //   position: 'absolute',
    //   top: -8,
      right: theme.spacing.lg,
      backgroundColor: '#34C759',
      paddingHorizontal: theme.spacing.sm,
    //   paddingVertical: 4,
      borderRadius: 6,
      marginLeft: 20
    },
    badgeText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    content: {
      marginLeft: 36,
      marginTop: -10
    },
    title: {
      fontSize: theme.fontSize.lg,
      fontWeight: '600',
      color: theme.colors.textPrimary,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.sm,
    },
    priceContainer: {
      alignItems: 'flex-end',
    },
    price: {
      fontSize: theme.fontSize.xl,
      fontWeight: '600',
      color: theme.colors.textPrimary,
    },
    period: {
      fontSize: theme.fontSize.sm,
      color: theme.colors.textSecondary,
      marginTop: 2,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <View style={styles.radioContainer}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
      
  
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={styles.content}>
        <View style={{}}>
                    <Typography style={styles.title}>{title}</Typography>
    {badge && (
        <View style={styles.badge}>
          <Typography style={styles.badgeText}>{badge}</Typography>
        </View>
      )}

        </View>
        {subtitle && <Typography style={styles.subtitle}>{subtitle}</Typography>}
      </View>
      
      <View style={styles.priceContainer}>
        <Typography style={styles.price}>{price}</Typography>
        <Typography style={styles.period}>{period}</Typography>
      </View>
      </View>
    </TouchableOpacity>
  );
};
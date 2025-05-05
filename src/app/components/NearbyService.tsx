import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface NearbyServiceProps {
  name: string;
  rating: number;
  price: string;
  distance: string;
  featured?: boolean;
  image?: any;
}

export default function NearbyService({
  name,
  rating,
  price,
  distance,
  featured = false,
  image = require('@/assets/images/istockphoto-2007315464-612x612.webp')
}: NearbyServiceProps) {
  return (
    <TouchableOpacity style={[styles.container, featured && styles.featuredContainer]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        {featured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>추천</Text>
          </View>
        )}
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={Colors.tint} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.reviewsText}>(128개 리뷰)</Text>
        </View>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color={Colors.dark} />
            <Text style={styles.metaText}>25분</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color={Colors.dark} />
            <Text style={styles.metaText}>{distance}</Text>
          </View>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>₩{price}</Text>
          <Text style={styles.priceLabel}>시작가</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.bookButton}>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredContainer: {
    borderWidth: 1,
    borderColor: Colors.tint,
    backgroundColor: '#F8FAFF',
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  featuredBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: Colors.tint,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  featuredText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.dark,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.dark,
  },
  reviewsText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#666',
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  metaText: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.dark,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.dark,
  },
  priceLabel: {
    marginLeft: 6,
    fontSize: 12,
    color: '#666',
  },
  bookButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.tint,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
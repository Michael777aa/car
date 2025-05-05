import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface ServiceCategoryProps {
  name: string;
  icon: string;
  active?: boolean;
}

export default function ServiceCategory({ 
  name, 
  icon, 
  active = false 
}: ServiceCategoryProps) {
  // Translate service names to Korean
  const translatedName = () => {
    switch(name) {
      case 'Exterior Wash': return '외부 세차';
      case 'Interior Cleaning': return '내부 청소';
      case 'Engine Care': return '엔진 관리';
      case 'Detailing': return '디테일링';
      default: return name;
    }
  };

  return (
    <TouchableOpacity style={[styles.container, active && styles.activeContainer]}>
      <View style={[styles.iconContainer, active && styles.activeIconContainer]}>
        <Ionicons 
          name={icon as any} 
          size={24} 
          color={active ? Colors.tint : Colors.dark} 
        />
      </View>
      <Text style={[styles.name, active && styles.activeName]}>{translatedName()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 15,
  },
  activeContainer: {
    transform: [{ scale: 1.05 }],
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  activeIconContainer: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderColor: Colors.tint,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.dark,
    textAlign: 'center',
  },
  activeName: {
    color: Colors.tint,
    fontWeight: '600',
  },
});
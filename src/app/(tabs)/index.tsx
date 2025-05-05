import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import Carousel from '@/src/app/components/Carousel';
import ServiceCategory from '@/src/app/components/ServiceCategory';
import NearbyService from '@/src/app/components/NearbyService';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
          <Ionicons name="menu" size={24} color="dark" />
        <Text style={styles.title}>모던워시</Text>
          <Ionicons name="notifications" size={24} color="dark" />
      </View>

      {/* 메인 배너 */}
      <Carousel 
  
      />

      {/* 서비스 카테고리 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>서비스 카테고리</Text>
        <View style={styles.categories}>
          <ServiceCategory name="외부 세차" icon="car-outline" />
          <ServiceCategory name="내부 청소" icon="brush-outline" />
          <ServiceCategory name="엔진 관리" icon="build-outline" />
          <ServiceCategory name="디테일링" icon="sparkles-outline" />
        </View>
      </View>

      {/* 주변 서비스 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>주변 세차장</Text>
        <NearbyService 
          name="프리미엄 카워시" 
          rating={4.8} 
          price="25,000원" 
          distance="0.5km"
          image={require('@/assets/images/istockphoto-2007315464-612x612.webp')}
        />
        <NearbyService 
          name="퀵 워시 센터" 
          rating={4.5} 
          price="15,000원" 
          distance="1.2km" 
          image={require('@/assets/images/background-image.jpg')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'dark',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: Colors.dark,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
// components/Carousel.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Colors } from "@/constants/Colors";

const { width } = Dimensions.get("window");
const images = [
  require("@/assets/images/photo-1607860108855-64acf2078ed9.avif"),
  require("@/assets/images/photo-1552930294-6b595f4c2974.avif"),
  require("@/assets/images/premium_photo-1682142564647-6f4396a34d02.avif"),
];

export default function Carousel() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.slideText}>프리미엄 카워시 서비스</Text>
              <Text style={styles.slideSubText}>이번 주 최대 30% 할인</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, i) => (
          <View key={i} style={styles.paginationDot} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    position: "relative",
  },
  scrollView: {
    height: "100%",
  },
  slide: {
    width: width,
    height: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 5,
  },
  slideText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  slideSubText: {
    color: "white",
    fontSize: 14,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginHorizontal: 5,
  },
});
import MapboxGL, { Camera, MapView } from "@rnmapbox/maps";
import { StyleSheet, View } from "react-native";

MapboxGL.setAccessToken("<token>");

export default function App() {
  return (
    <View style={styles.container}>
      <MapView>
        <Camera
          centerCoordinate={[-73.984638, 40.759211]}
          zoomLevel={12}
          animationDuration={0}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
